import { ScrollManager } from "@discovery-dni/cd-tv.template-engine";
import { Card } from "../Card";
import style from "./Basic.css";

export class Basic {
  static height({ attributes }) {
    let height = 19.5036458333 + 1.5; // height + margin
    height += attributes.heading ? 3.1354166667 : 0;
    return height;
  }

  constructor(data) {
    const { attributes, items } = data;

    this.attributes = attributes;

    const cards = items.map(item => ({
      Component: Card,
      data: item
    }));

    this.scrollManager = new ScrollManager(cards, {
      horizontal: true
    });
  }

  render() {
    const { heading } = this.attributes;

    const smContainer = <div classNames={[style["scroll-manager"]]} />;

    return (
      <div classNames={[style.container]}>
        {heading && <div classNames={[style.heading]}>{heading}</div>}

        {this.scrollManager.render(smContainer)}
      </div>
    );
  }

  afterMount() {
    this.scrollManager.mount();
  }
}

export { Card };
