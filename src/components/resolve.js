import { createComponentResolver } from "@discovery-dni/cd-tv.template-engine";
import { ContentGridBasic } from "./ContentGrid";
import { ContentCarouselBasic } from "./Carousel";
import { ArticleBasic } from "./Article";

export const resolve = createComponentResolver([
  [
    "hero",
    [
      ["default", ContentCarouselBasic],
      ["basic", ContentCarouselBasic]
    ]
  ],
  [
    "content-grid",
    [
      ["default", ContentGridBasic],
      ["basic", ContentGridBasic]
    ]
  ],
  [
    "article",
    [
      ["default", ArticleBasic],
      ["basic", ArticleBasic]
    ]
  ]
]);
