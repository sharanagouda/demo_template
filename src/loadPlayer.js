import { parse } from "qs";
import { propEq, propOr } from "ramda";
import { from } from "rxjs";
import { filter, pairwise, pluck, throttleTime } from "rxjs/operators";

import { getHistory } from "@discovery-dni/cd-tv.history";
import { enableNavigation } from "@discovery-dni/cd-tv.navigation";
import { sonicConfig$ } from "@discovery-dni/cd-tv.sonic";
import { sidebarVisible } from "@discovery-dni/cd-tv.ui-components";
import { init, sonicConfig, state } from "@discovery-dni/np2";

import { loadDep } from "./utils";

export const loadPlayer = () => {
  const q = parse(location.search, {
    ignoreQueryPrefix: true
  });

  const platform = propOr("chrome", ["deviceType"], q);
  const player = propOr("", ["player"], q);
  const debug = propEq("debug", "true", q);

  let loader = Promise.resolve();

  switch (platform) {
    case "samsung-jazzl":
      loader = loader.then(() =>
        loadDep(
          "script",
          `/static/np2-player-html5/np2-player-html5.iife${
            debug ? "" : ".min"
          }.js`
        )
      );
      loader = loader.then(() =>
        loadDep(
          "script",
          `/static/np2-player-hlsjs/np2-player-hlsjs.iife${
            debug ? "" : ".min"
          }.js`
        )
      );
      loader = loader.then(() =>
        loadDep(
          "script",
          `/static/np2-player-avplay/np2-player-avplay.iife${
            debug ? "" : ".min"
          }.js`
        )
      );
      break;
    case "xbox":
      loader = loader.then(() =>
        loadDep(
          "script",
          `/static/np2-player-html5/np2-player-html5.iife${
            debug ? "" : ".min"
          }.js`
        )
      );
      loader = loader.then(() =>
        loadDep(
          "script",
          `/static/np2-player-hlsjs/np2-player-hlsjs.iife${
            debug ? "" : ".min"
          }.js`
        )
      );
      loader = loader.then(() =>
        loadDep(
          "script",
          `/static/np2-player-shaka/np2-player-shaka.iife${
            debug ? "" : ".min"
          }.js`
        )
      );
      break;
    case "ps4": {
      loader = loader.then(() =>
        loadDep(
          "script",
          `/static/np2-player-webmaf/np2-player-webmaf.iife${
            debug ? "" : ".min"
          }.js`
        )
      );
      break;
    }
    case "android":
    case "firetv":
      if (player === "exoplayer") {
        loader = loader.then(() =>
          loadDep(
            "script",
            `/static/np2-player-exoplayer/np2-player-exoplayer.iife${
              debug ? "" : ".min"
            }.js`
          )
        );
      }
      break;
    default:
      loader = loader.then(() =>
        loadDep(
          "script",
          `/static/np2-player-html5/np2-player-html5.iife${
            debug ? "" : ".min"
          }.js`
        )
      );
      loader = loader.then(() =>
        loadDep(
          "script",
          `/static/np2-player-shaka/np2-player-shaka.iife${
            debug ? "" : ".min"
          }.js`
        )
      );
  }

  loader = loader.then(() => {
    const container = document.getElementById("np2");

    return init(container, {
      workerUri: "/static/np2-worker/np2-worker.iife.js"
    });
  });

  loader = loader.then(() => {
    state.state$
      .pipe(
        pairwise(),
        filter(
          ([prev, curr]) =>
            prev.state !== "UNLOADED" && curr.state === "UNLOADED"
        ),
        pluck(1, "redirectTo"),
        throttleTime(500)
      )
      .subscribe(redirectTo => {
        enableNavigation(true);
        sidebarVisible(true);

        if (redirectTo && typeof redirectTo === "string") {
          getHistory().replace(redirectTo);
        } else {
          getHistory().goBack();
        }
      });

    sonicConfig$.subscribe(config => {
      console.log(config);
      sonicConfig(config);
    });
  });

  return from(loader);
};
