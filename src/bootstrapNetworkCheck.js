import { interval, timer, merge } from "rxjs";
import { filter, withLatestFrom, debounce } from "rxjs/operators";
import includes from "lodash.includes";

import { getHistory, getLocation } from "@discovery-dni/cd-tv.history";
import { log$ } from "@discovery-dni/cd-tv.log";
import { state } from "@discovery-dni/np2";
import { ping } from "./utils";

export const bootstrapNetworkCheck = () => {
  const sonicNetworkError$ = log$.pipe(
    filter(({ type }) => type === "sonic:network:error")
  );

  const onError = () => {
    getHistory().push("/network-error");
  };

  merge(sonicNetworkError$, interval(10 * 1000))
    .pipe(
      withLatestFrom(getLocation()),
      filter(
        ([, location]) =>
          !includes(["ASSET_PLAYBACK", "ERROR"], state.state.state) &&
          location.pathname !== "/network-error"
      ),
      debounce(() => timer(1000))
    )
    .subscribe(() => {
      ping({ onError });
    });
};
