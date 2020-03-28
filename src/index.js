import { map, flatMap } from "rxjs/operators";

import { createRouter, Route } from "@discovery-dni/cd-tv.router";
import { getLocation } from "@discovery-dni/cd-tv.history";
import { bootstrap as bootstrapPlatform } from "@discovery-dni/cd-tv.platform";
import { bootstrap as bootstrapNavigation } from "@discovery-dni/cd-tv.navigation";

import { bootstrapNetworkCheck } from "./bootstrapNetworkCheck";
import { bootstrapSonic } from "./bootstrapSonic";
import { createApp } from "./app";
import { loadPlayer } from "./loadPlayer";
import {
  Channel,
  Login,
  NotFound,
  TERoute,
  Video,
  FavoriteChannels
} from "./Routes";

const queryParamsToPersist = [
  "debug",
  "sonicBase",
  "deviceType",
  "countryCode",
  "ads"
];

const location = getLocation(queryParamsToPersist);

bootstrapSonic()
  .pipe(
    map(bootstrapPlatform),
    map(bootstrapNavigation),
    map(bootstrapNetworkCheck),
    flatMap(loadPlayer),
    flatMap(createApp),
    map(app => {
      createRouter(location, app.element, [
        {
          path: "/",
          exact: true,
          component: Route
        },
        {
          path: "/login",
          exact: true,
          component: Login
        },
        {
          path: "/favorite",
          exact: true,
          component: FavoriteChannels
        },
        {
          path: "/channel",
          component: Channel
        },
        {
          path: "/video",
          component: Video
        },
        {
          path: "/",
          component: TERoute
        },
        {
          path: "/",
          component: NotFound
        }
      ]);
    })
  )
  .toPromise()
  .then(() => {
    document.getElementById("loading").remove();
  })
  .catch(err => {
    /* eslint-disable */

    if (__DEV__) {
      console.error(err);
    }
  });
