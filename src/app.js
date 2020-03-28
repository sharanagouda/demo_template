import {
  sidebarVisible$,
  subnavVisible$
} from "@discovery-dni/cd-tv.ui-components";
import { map } from "rxjs/operators";
import { createSidebar } from "./components/Sidebar";
import style from "./app.css";

const app = document.getElementById("app");

export const createApp = () =>
  createSidebar().pipe(
    map(sidebar => {
      const contentArea = <div classNames={[style["content-area"]]} />;

      sidebarVisible$.subscribe(isVisible => {
        if (isVisible) {
          contentArea.element.style.width = "92.5vw";
        } else {
          contentArea.element.style.width = "100%";
        }
      });

      subnavVisible$.subscribe(isVisible => {
        if (isVisible) {
          contentArea.element.style.width = "77.5vw";
        } else {
          contentArea.element.style.width = "92.5vw";
        }
      });

      const page = (
        <div className={[style.page]}>
          {contentArea}
          {sidebar}
        </div>
      );

      page.appendTo(app);

      return contentArea;
    })
  );
