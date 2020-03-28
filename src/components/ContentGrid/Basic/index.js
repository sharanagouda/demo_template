import React from "react";
import { ScrollManager } from "@discovery-dni/cd-tv.template-engine";
import { Card } from "../Card";
import style from "./Basic.css";

const IMG_WIDTH = 800;
const IMG_HEIGHT = 500;

export class Basic extends React.Component {
  wheelTimeout;
  transitionTimeout;
  lastTouch = 0;
  constructor(props) {
    super(props);
    const { attributes, items } = props;

    this.attributes = attributes;

    const cards = items.map(item => ({
      Component: Card,
      data: item
    }));

    this.scrollManager = new ScrollManager(cards, {
      horizontal: true
    });
    this.state = {
      imgs: [
        `https://wallpapercave.com/wp/wp1877575.jpg`,
        `https://i.pinimg.com/originals/dd/71/bb/dd71bb759f840b42ef64ed22832342ad.jpg`,
        `https://bwregency.bc.ca/wp-content/uploads/2017/06/FreeGreatPicture.com-24621-hd-women-shopping.jpg`
      ],
      currentIndex: 0,
      movement: 0,
      transitionDuration: "0s"
    };
  }
  static height({ attributes }) {
    let height = 19.5036458333 + 1.5; // height + margin
    height += attributes.heading ? 3.1354166667 : 0;
    return height;
  }

  componentWillUnmount = () => {
    clearTimeout(this.transitionTimeout);
  };
  handleTouchStart = e => {
    this.lastTouch = e.nativeEvent.touches[0].clientX;
  };
  handleTouchMove = e => {
    const delta = this.lastTouch - e.nativeEvent.touches[0].clientX;
    this.lastTouch = e.nativeEvent.touches[0].clientX;

    this.handleMovement(delta);
  };
  handleTouchEnd = () => {
    this.handleMovementEnd();
    this.lastTouch = 0;
  };
  handleWheel = e => {
    clearTimeout(this.wheelTimeout);
    this.handleMovement(e.deltaX);
    this.wheelTimeout = setTimeout(() => this.handleMovementEnd(), 100);
  };
  handleMovement = delta => {
    clearTimeout(this.transitionTimeout);

    this.setState(state => {
      const maxLength = state.imgs.length - 1;

      let nextMovement = state.movement + delta;

      if (nextMovement < 0) {
        nextMovement = 0;
      }

      if (nextMovement > maxLength * IMG_WIDTH) {
        nextMovement = maxLength * IMG_WIDTH;
      }

      return {
        movement: nextMovement,
        transitionDuration: "0s"
      };
    });
  };

  handleMovementEnd = () => {
    const { movement, currentIndex } = this.state;

    const endPosition = movement / IMG_WIDTH;
    const endPartial = endPosition % 1;
    const endingIndex = endPosition - endPartial;
    const deltaInteger = endingIndex - currentIndex;

    let nextIndex = endingIndex;

    if (deltaInteger >= 0) {
      if (endPartial >= 0.1) {
        nextIndex += 1;
      }
    } else if (deltaInteger < 0) {
      nextIndex = currentIndex - Math.abs(deltaInteger);
      if (endPartial > 0.9) {
        nextIndex += 1;
      }
    }

    this.transitionTo(nextIndex, Math.min(0.5, 1 - Math.abs(endPartial)));
  };
  transitionTo = (index, duration) => {
    this.setState({
      currentIndex: index,
      movement: index * IMG_WIDTH,
      transitionDuration: `${duration}s`
    });

    this.transitionTimeout = setTimeout(() => {
      this.setState({ transitionDuration: "0s" });
    }, duration * 100);
  };

  render() {
    const { heading } = this.attributes;
    console.log(" heading ", heading);

    const smContainer = <div classNames={[style["scroll-manager"]]} />;
    const { currentIndex, movement, transitionDuration, imgs } = this.state;
    const maxLength = imgs.length - 1;
    const maxMovement = maxLength * IMG_WIDTH;
    return (
      <div classNames={[style.container]}>
        {/* {heading && <div classNames={[style.heading]}>{heading}</div>}

        {this.scrollManager.render(smContainer)} */}
        {/* <div
          className={[style.main]}
          style={{
            width: `${IMG_WIDTH}px`,
            height: `${IMG_HEIGHT}px`,
          }}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          onWheel={this.handleWheel}
        >
          <div
            className={[style.swiper]}
            style={{
              transform: `translateX(${movement * -1}px)`,
              transitionDuration: transitionDuration,
            }}
          >
            {imgs.map(src => {
              return <img key={src} src={src} width="100%" height="100%" />;
            })}
          </div>
          {movement !== 0 && (
            <button
              className={[style.back]}
              onClick={() => {
                this.transitionTo(currentIndex - 1, 0.5);
              }}
            >
              ←
            </button>
          )}
          {movement !== maxMovement && (
            <button
              className={[style.next]}
              onClick={() => {
                this.transitionTo(currentIndex + 1, 0.5);
              }}
            >
              →
            </button>
          )}
        </div> */}
        {imgs.map(src => {
          return <img key={src} src={src} width="100%" height="100%" />;
        })}
        <div>section One</div>
      </div>
    );
  }

  afterMount() {
    this.scrollManager.mount();
  }
}

export { Card };
