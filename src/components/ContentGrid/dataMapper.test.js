import { dataMapper, cardDataMapper } from "./dataMapper";
import included from "../../mocks/included-mock";
import { collection, collectionItem } from "../../mocks/collection-mock";

test("dataMapper for content grid", () => {
  const result = dataMapper(collection, included);

  expect(result.items.length).toBe(3);
  expect(result.attributes.heading).toBe("Latest videos");
});

test("cardDataMapper", () => {
  const result = cardDataMapper(included)(collectionItem);

  expect(result.route).toBe("/video/dmax-doku/die-stubers");
  expect(result.name).toBe("Die Stubers");
  expect(result.image).toBe(
    "https://eu1-test-images.disco-api.com/2018/04/02/videoasset-22244-1522338384485.jpg?f=jpeg&p=true&q=75&w=197"
  );
});
