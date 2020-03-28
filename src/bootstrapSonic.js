import { bootstrap as sonic } from "@discovery-dni/cd-tv.sonic";

import { name as clientName, version as clientVersion } from "../package.json";

export const CONFIG_FILE_ALIAS = "tv-te";
export const HOME_PATH = "/tv-home";
export const MAIN_MENU = "tv-menubar";

export const bootstrapSonic = function bootstrapSonic() {
  return sonic({
    realmService: {
      uri: "https://global-test.disco-api.com/realms",
      brand: "luna"
    },
    clientName,
    clientVersion
  });
};
