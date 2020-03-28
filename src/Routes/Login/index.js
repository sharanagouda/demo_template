import { parse } from "qs";
import { path, pathOr, pathSatisfies } from "ramda";
import { combineLatest, noop } from "rxjs";
import { map } from "rxjs/operators";
import { Fragment } from "@discovery-dni/cd-tv.dom";

import { getHistory } from "@discovery-dni/cd-tv.history";
import { Route } from "@discovery-dni/cd-tv.router";
import { getCurrentUser, login, logout } from "@discovery-dni/cd-tv.sonic";
import { sidebarVisible } from "@discovery-dni/cd-tv.ui-components";

import { HOME_PATH } from "../../bootstrapSonic";
import { getConfig } from "../../utils";
import styles from "./Login.css";

const resolveHomeRoute = pathOr(HOME_PATH, [
  "data",
  "attributes",
  "config",
  "collectionConfiguration",
  "homePage"
]);

const urlParams = parse(window.location.search, {
  ignoreQueryPrefix: true
});
const { deviceType } = urlParams;

export class Login extends Route {
  static fetchData() {
    return combineLatest(getConfig(), getCurrentUser()).pipe(
      map(([config, user]) => ({
        homeRoute: resolveHomeRoute(config),
        loggedIn: pathSatisfies(
          a => !a,
          ["data", "attributes", "anonymous"],
          user
        )
      }))
    );
  }

  constructor(props) {
    super(props);

    this.loginContainer = null;
    this.emailInput = null;
    this.passwordInput = null;
    this.passwordInputError = null;
    this.continueBrowsing = null;
    this.emailContainer = null;
    this.emailInputError = null;
    this.logoutButton = null;
    this.passwordContainer = null;
    this.emailContainer = null;

    this.onSigninButtonClick = this.onSigninButtonClick.bind(this);
  }

  onLogoutClick() {
    logout().subscribe({
      next: () => {
        getHistory().replace("/login");
      },
      error: error => {
        console.error(error);
      }
    });
  }

  onSigninButtonClick(username, password) {
    login(username, password).subscribe({
      next: () => {
        getHistory().replace(this.data.homeRoute);
      },
      error: e => {
        if (e.status == 401) {
          if (
            e.code === "unauthorized" ||
            e.code === "unauthorized.username.unknown"
          ) {
            this.emailInputError.addClass([styles["error-visible"]]);
            this.emailInputError.appendTo(this.emailContainer);
          } else if (e.code === "password.needs.reset") {
            this.passwordInputError.addClass([styles["error-visible"]]);
            this.passwordInputError.appendTo(this.passwordContainer);
          }
        } else if (e.status == 403) {
          if (e.code === "unauthorized.account.locked") {
            this.passwordInputError.addClass([styles["error-visible"]]);
            this.passwordInputError.appendTo(this.passwordContainer);
          }
        } else {
          this.emailInputError.addClass([styles["error-visible"]]);
          this.emailInputError.appendTo(this.passwordContainer);
        }
      }
    });
  }

  moveFocus(evt) {
    const { target } = evt;
    const { parentElement } = target;

    const moveToPassword =
      (target === this.emailInput.element ||
        parentElement === this.emailInput.element) &&
      path(["element", "firstChild", "value"], this.emailInput);

    const moveToLogin =
      (target === this.passwordInput.element ||
        parentElement === this.passwordInput.element) &&
      path(["element", "firstChild", "value"], this.passwordInput);

    // move focus to next input element after entering text
    if (moveToPassword) {
      this.passwordInput.element.focus();
    } else if (moveToLogin) {
      this.signInButton.element.focus();
    }
  }

  render() {
    sidebarVisible(false);

    return (
      <div classNames={[styles["login-container"]]}>
        <div
          classNames={[styles["login-logo"]]}
          ref={el => (this.loginContainer = el)}
        ></div>
        {!this.data.loggedIn && (
          <Fragment>
            <div
              classNames={[styles["login-input"]]}
              ref={el => (this.emailContainer = el)}
            >
              <span classNames={[styles["login-label"]]}>Email</span>
              <input
                ref={el => (this.emailInput = el)}
                classNames={[styles.input]}
                focusable={true}
                inputAttr={{
                  type: "email",
                  placeholder: "EMAIL"
                }}
                inputListeners={{
                  keydown:
                    deviceType === "android" ? this.onAndroidFocusChange : noop
                }}
                height="5.729"
                width="34.89"
              />
              <span
                ref={el => (this.emailInputError = el)}
                classNames={[styles.error]}
              >
                Something went wrong
              </span>
            </div>
            <div
              classNames={[styles["login-input"]]}
              ref={el => (this.passwordContainer = el)}
            >
              <span classNames={[styles["login-label"]]}>Password</span>
              <input
                ref={el => (this.passwordInput = el)}
                classNames={[styles.input]}
                focusable={true}
                inputAttr={{ type: "password", placeholder: "PASSWORD" }}
                inputListeners={{
                  keydown:
                    deviceType === "android" ? this.onAndroidFocusChange : noop
                }}
                height="5.729"
                width="34.89"
              />
              <span
                ref={el => (this.passwordInputError = el)}
                classNames={[styles.error]}
              >
                To reset your password, please go to the website.
              </span>
            </div>
            <div
              ref={el => (this.loginButton = el)}
              classNames={[styles.button]}
              focusable={true}
              listeners={{
                click: () => {
                  this.onSigninButtonClick(
                    this.emailInput.element.firstElementChild.value,
                    this.passwordInput.element.firstElementChild.value
                  );
                }
              }}
            >
              Login
            </div>
          </Fragment>
        )}

        {this.data.loggedIn && (
          <Fragment>
            <div classNames={[styles["welcome-text"]]}>You are logged in</div>
            <div
              ref={el => (this.logoutButton = el)}
              classNames={[styles.button]}
              focusable={true}
              listeners={{
                click: () => {
                  this.onLogoutClick();
                }
              }}
            >
              Sign out
            </div>
          </Fragment>
        )}
        <a
          ref={el => (this.continueBrowsing = el)}
          classNames={[styles.button, styles["no-login"]]}
          attr={{ href: this.data.homeRoute, replace: true }}
        >
          Browse content
        </a>
      </div>
    );
  }

  afterMount() {
    if (!this.data.loggedIn) {
      this.emailInput.element.focus();
    } else {
      this.continueBrowsing.element.focus();
    }
  }
}
