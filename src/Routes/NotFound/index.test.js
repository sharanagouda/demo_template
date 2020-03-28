import { NotFound } from "./index";

jest.mock("@discovery-dni/cd-tv.platform", () => ({
  androidKeyboardVisible$: jest.fn()
}));

test("returns correct data", () => {
  const component = new NotFound().render();

  expect(component).toMatchSnapshot();
});
