import React from "react";
import { ScrollManager } from "@discovery-dni/cd-tv.template-engine";
import { Card } from "../Card";
import style from "./Basic.css";

export class Basic extends React.Component {
  static height({ attributes }) {
    let height = 19.5036458333 + 1.5; //height + margin
    height += attributes.heading ? 3.1354166667 : 0;
    return height;
  }

  constructor(props) {
    super(props);
    const { attributes, items } = props;
    this.attributes = attributes;
    this.items = items;
    // console.log(this.attributes);
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
    // console.log(" heading ", heading);

    const smContainer = <div classNames={[style["scroll-manager"]]} />;
    const showContainer = (
      <div classNames={[style["scroll-manager-forShow"]]} />
    );

    return (
      <div classNames={[style.container]}>
        {heading === "Shows" ? (
          <div>
            {heading && <div classNames={[style.heading]}>{heading}</div>}
            {this.scrollManager.render(showContainer)}
          </div>
        ) : (
          <div>
            {heading && <div classNames={[style.heading]}>{heading}</div>}
            {this.scrollManager.render(smContainer)}
          </div>
        )}
      </div>
    );
  }

  afterMount() {
    this.scrollManager.mount();
  }
}

export { Card };
