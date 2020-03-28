import { Card } from ".";

const data = {
  route: "goldrausch-in-alaska/1000-unzen",
  name: "1000 Unzen",
  image:
    "https://eu1-test-images.disco-api.com/2017/11/19/videoasset-16852-1511063653344.png?f=jpeg&p=true&q=75&w=316"
};

test("render correct component markup", () => {
  const container = new Card(data).render();

  expect(container.element).toMatchSnapshot();
});
