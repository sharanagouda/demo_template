import { Login } from "./index";

jest.mock("@discovery-dni/cd-tv.platform", () => ({
  androidKeyboardVisible$: {
    subscribe: jest.fn()
  }
}));

describe("user is logged in", () => {
  let onLogoutClickMock;

  beforeAll(() => {
    onLogoutClickMock = jest.fn();
  });

  test("snapshot matches", () => {
    const component = new Login();
    component.data = { loggedIn: true };
    component.render();

    expect(component).toMatchSnapshot();
  });

  test("signout click", () => {
    const component = new Login();
    component.data = { loggedIn: true };
    component.onLogoutClick = onLogoutClickMock;
    component.render();

    const logoutBtn = component.logoutButton.element;
    logoutBtn.click();

    expect(onLogoutClickMock).toHaveBeenCalled();
  });
});

describe("user is not logged in", () => {
  let onSigninButtonClickMock;

  beforeAll(() => {
    onSigninButtonClickMock = jest.fn();
    global.Headers = () => {};
  });

  test("snapshot matches", () => {
    const component = new Login();
    component.data = { loggedIn: false };
    component.render();

    expect(component).toMatchSnapshot();
  });

  test("login click", () => {
    const component = new Login();
    component.data = { loggedIn: false };
    component.onSigninButtonClick = onSigninButtonClickMock;
    component.render();

    const loginBtn = component.loginButton.element;
    loginBtn.click();

    expect(onSigninButtonClickMock).toHaveBeenCalled();
  });
});
