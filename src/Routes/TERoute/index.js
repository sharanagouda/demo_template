import { Route as R } from "@discovery-dni/cd-tv.template-engine";
import { resolve } from "../../components/resolve";
import { sidebarVisible } from "@discovery-dni/cd-tv.ui-components";

export class TERoute extends R {
  static isMatch(location, match, data) {
    return !!data.page;
  }

  resolveComponent(data) {
    sidebarVisible(true);

    return resolve(data, this.data.included);
  }
}
