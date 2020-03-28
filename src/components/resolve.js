import { createComponentResolver } from "@discovery-dni/cd-tv.template-engine";
import { ContentGridBasic } from "./ContentGrid";
import { ArticleBasic } from "./Article";

export const resolve = createComponentResolver([
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
