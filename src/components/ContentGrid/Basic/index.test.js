import { Basic } from ".";

const data = {
  attributes: { heading: "" },
  totalCount: 100,
  items: [
    {
      route: "goldrausch-in-alaska/1000-unzen",
      name: "1011 Unzen",
      secondaryTitle: "",
      image:
        "https://eu1-test-images.disco-api.com/2017/11/19/videoasset-16852-1511063653344.png?f=jpeg&p=true&q=75&w=316"
    }
  ]
};

test("render correct component markup", () => {
  const container = new Basic(data).render();

  expect(container.element).toMatchSnapshot();
});

test("contains scrollManager", () => {
  const container = new Basic(data);

  expect(container.scrollManager).toBeDefined();
});

test("contains items", () => {
  const container = new Basic(data);

  expect(container.items).toHaveLength(1);
});
