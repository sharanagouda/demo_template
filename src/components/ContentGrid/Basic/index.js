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
    //console.log(" heading ", heading);

    const smContainer = <div classNames={[style["scroll-manager"]]} />;

    return (
      <div classNames={[style.container]}>
        {heading && <div classNames={[style.heading]}>{heading}</div>}
        {/* {heading === "On Now" ? (
          <div classNames={[style.heading]}>
            {" "}
            {new Hero(this.items).render()}{" "}
          </div>
        ) : (
            <div></div>
          )}
        {heading === "On Now" ? (
          <div classNames={[style.heading]}>On Now!!!</div>
        ) : (
            <div></div>
          )} */}
        {this.scrollManager.render(smContainer)}
      </div>
    );
  }

  afterMount() {
    this.scrollManager.mount();
  }
}

export { Card };
