import { or, path, pathEq } from "ramda";
import { map } from "rxjs/operators";

import { enableNavigation } from "@discovery-dni/cd-tv.navigation";
import { Route } from "@discovery-dni/cd-tv.router";
import { getRoute } from "@discovery-dni/cd-tv.sonic";
import { resolvePageFromRoute } from "@discovery-dni/cd-tv.template-engine";
import { sidebarVisible } from "@discovery-dni/cd-tv.ui-components";
import { addMedia } from "@discovery-dni/np2";

export class Channel extends Route {
  static isMatch(location, match, data) {
    return pathEq(["page", "primaryContent", "type"], "channel", data);
  }

  static fetchData(location) {
    return getRoute(location.pathname).pipe(
      map(({ data = {}, included = [], meta = {} }) => ({
        page: resolvePageFromRoute(included, data),
        isTemplateEngine: true,
        included,
        meta
      }))
    );
  }

  constructor({ location, match, data }) {
    super({ location, match, data });

    this.data = data;

    this.isExoPlayerOrPS4 = or(
      pathEq(["query", "player"], "exoplayer", location),
      pathEq(["query", "deviceType"], "ps4", location)
    );

    if (this.isExoPlayerOrPS4) {
      this.bodyBackground = document.body.style.background;
    }
  }

  render() {
    enableNavigation(false);
    sidebarVisible(false);

    return <div />;
  }

  restore() {}

  beforeUnmount() {
    if (this.isExoPlayerOrPS4) {
      document.body.style.background = this.bodyBackground;
    }

    document.getElementById("app").style.display = "block";
    document.getElementById("np2").style.display = "none";
  }

  afterMount() {
    if (this.isExoPlayerOrPS4) {
      document.body.style.background = "rgba(0, 0, 0, 0)";
    }

    document.getElementById("app").style.display = "none";
    document.getElementById("np2").style.display = "block";

    addMedia({
      id: path(["page", "primaryContent", "id"], this.data),
      type: "sonicChannel"
    });
  }
}
