import { TERoute } from "./index";
import { collection } from "../../mocks/collection-mock";
import { included } from "../../mocks/included-mock";

jest.mock("@discovery-dni/cd-tv.template-engine"); // this happens automatically with automocking
const Route = require("@discovery-dni/cd-tv.template-engine");

const resolveComponentMock = jest.fn();
TERoute.mockImplementation(() => {
  resolveComponent: resolveComponentMock;
});

test("returns correct data", () => {
  const component = new TERoute(collection);
  // console.log(component);

  // expect(resolveComponentMock).toHaveBeenCalled();
  // expect(component.attributes.title).toBe('Latest videos');
  // expect(component.scrollManager).not.toBeNull();
});
