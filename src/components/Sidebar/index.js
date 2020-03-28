import { path } from "ramda";
import { first, flatMap, map } from "rxjs/operators";
import { forkJoin } from "rxjs";

import { vw } from "@discovery-dni/cd-tv.dom";
import { getCollections } from "@discovery-dni/cd-tv.sonic";
import { resolveMenubar } from "@discovery-dni/cd-tv.template-engine";
import { Sidebar, Subnav } from "@discovery-dni/cd-tv.ui-components";

import { getConfig } from "../../utils";
import style from "./Sidebar.css";

const resolveMenubarAlias = path([
  "data",
  "attributes",
  "config",
  "config",
  "menu"
]);

const resolveSubnavAlias = path([
  "data",
  "attributes",
  "config",
  "config",
  "settingsMenu"
]);

const getMenuItems = () =>
  getConfig().pipe(
    first(),
    map(config => resolveMenubarAlias(config)),
    flatMap(alias => getCollections(alias)),
    map(({ data, included }) => resolveMenubar(included, data))
  );

const getSettingsSubnavItems = () =>
  getConfig().pipe(
    first(),
    map(config => resolveSubnavAlias(config))
  );

const imageCropSize = Math.ceil(vw(2.3958333333));

export const createSidebar = () =>
  forkJoin(getMenuItems(), getSettingsSubnavItems()).pipe(
    map(([menuItems = [], subnavItems = []]) => {
      const login = {
        text: "Login",
        route: "/login",
        image: {
          attributes: {
            src: "https://www.fillmurray.com/50/50",
            width: 50,
            height: 50
          }
        }
      };

      const settings = {
        text: "Settings",
        hasSubnav: true,
        subnav: new Subnav(subnavItems),
        image: {
          attributes: {
            src: "https://www.fillmurray.com/g/150/150",
            width: 150,
            height: 150
          }
        }
      };

      const favChannels = {
        text: "favorite",
        route: "/favorite",
        hasSubnav: false,
        image: {
          attributes: {
            src: "https://image.flaticon.com/icons/svg/2001/2001388.svg",
            width: 150,
            height: 150
          }
        }
      };

      const footerItems = [login, settings, favChannels];

      const logo = <div classNames={[style.logo]} />;

      const customSidebar = {
        text: "favorite",
        image: {
          attributes: {
            alias: "tv-home-icon",
            height: 64,
            kind: "default",
            name: "tv-home-icon",
            published: "2019-12-16T11:45:53.335010Z",
            revision: 0,
            src:
              "https://eu1-test-images.disco-api.com/2019/12/16/6426357c-df9c-4ea8-aa94-1876e7138ca6.png",
            state: "published",
            width: 68
          },
          id: "185081294489534290202886016248095547289",
          type: "image"
        },
        route: "/tv-home"
      };
      const customMenu = [...menuItems, customSidebar];
      console.log("menuItems", customMenu);
      return new Sidebar({
        menuItems,
        footerItems,
        logo,
        imageCropSize,
        containerClassName: style["sidebar-container"],
        menuClassName: style.sidebar,
        overlayClassName: style.cover,
        selectedClassName: style.selected,
        menuItemClassName: style["nav-item"]
      }).render();
    })
  );
