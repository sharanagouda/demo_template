import { Route } from "@discovery-dni/cd-tv.router";
import { sidebarVisible } from "@discovery-dni/cd-tv.ui-components";

import styles from "./Favorite.css";

export class FavoriteChannels extends Route {
  render() {
    sidebarVisible(false);

    return (
      <div classNames={[styles.container]}>
        <span classNames={[styles.text]}>Browse content</span>
      </div>
    );
  }
}
