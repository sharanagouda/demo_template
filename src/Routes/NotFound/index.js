import { getHistory } from "@discovery-dni/cd-tv.history";
import { Route } from "@discovery-dni/cd-tv.router";
import style from "./NotFound.css";

export class NotFound extends Route {
  constructor(props) {
    super(props);

    this.back = null;
  }

  onClick() {
    getHistory().goBack();
  }

  render() {
    return (
      <div>
        <span classNames={[style.heading]}>404</span>

        <span classNames={[style.text]}>Oops something went wrong</span>

        <div
          ref={el => (this.back = el)}
          classNames={[style.back]}
          focusable
          listeners={{
            click: this.onClick
          }}
        >
          Back
        </div>
      </div>
    );
  }

  afterMount() {
    this.back.element.focus();
  }
}
