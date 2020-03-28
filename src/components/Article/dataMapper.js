import {
  resolveCollection,
  findInclude
} from "@discovery-dni/cd-tv.template-engine";
import { pathOr } from "ramda";

export const dataMapper = (data, included) => {
  const collection = resolveCollection(included, data);
  const id = pathOr(
    "",
    ["items", 0, "relationships", "body", "data", 0, "id"],
    collection
  );

  return {
    title: pathOr("", ["attributes", "title"], collection),
    articleBlocks: pathOr(
      [],
      ["attributes", "richTextContent", "blocks"],
      findInclude(included, "articleBodyRichText", id)
    )
  };
};
