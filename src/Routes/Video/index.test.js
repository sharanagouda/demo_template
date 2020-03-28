import Video from "./index";

jest.mock("@discovery-dni/np2", () => ({
  addMedia: {}
}));

const location = {
  pathname: "/video/goldrausch-in-alaska/1000-unzen"
};

const data = {
  page: {
    primaryContent: {
      type: "video"
    }
  }
};

test("renders div", () => {
  const component = new Video({ location, data }).render();

  expect(component).toMatchSnapshot();
});
