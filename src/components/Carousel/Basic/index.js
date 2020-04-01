import React from "react";
import { ScrollManager } from "@discovery-dni/cd-tv.template-engine";
import { CarouselItem } from "../CarouselItem";
import style from "./Basic.css";
import { StepIndicator } from "../stepIndicator";

export class Basic extends React.Component {
  static height() {
    let height = 7.5036458333; // height + margin
    return height;
  }

  constructor(props) {
    super(props);
    const { attributes, items } = props;
    this.state = {
      currentStep: 1,
      translateValue: -100,
      transitionAnimation: "transform ease-out 0.45s"
      //   data:
      //     props.data.length > 0
      //       ? [props.data[props.data.length - 1], ...props.data, props.data[0]]
      //       : [],
      //   images:
      //     props.images.length > 0
      //       ? [
      //         props.images[props.images.length - 1],
      //         ...props.images,
      //         props.images[0]
      //       ]
      //       : []
    };
    this._timer = 0;
    this.attributes = attributes;
    this.items = items;
    const cards = items.map(item => ({
      Component: CarouselItem,
      data: item
    }));
    //console.log("length ", this.items.length);
    this.scrollManager = new ScrollManager(cards, {
      horizontal: true
    });
  }
  componentDidMount = () => {
    this.setTimer();
  };

  setTimer = () => {
    if (this.props.loop) {
      this._timer = window.setInterval(
        () => this.setCurrent(this.state.currentStep + 1),
        this.props.autoplay
      );
    }
  };

  resetTimer = () => {
    if (this.props.loop) {
      clearInterval(this._timer);
      this.setTimer();
    }
  };

  onSwipe = e => {
    if (this.props.data.length > 1) {
      if (e === "swiped-left") {
        this.addCurrent();
        this.resetTimer();
      } else if (e === "swiped-right") {
        this.subCurrent();
        this.resetTimer();
      }
    }
  };

  componentWillUnmount() {
    if (this._timer) clearInterval(this._timer);
  }

  addCurrent() {
    this.setCurrent(this.state.currentStep + 1);
  }

  subCurrent() {
    this.setCurrent(this.state.currentStep - 1);
  }

  setCurrent(id) {
    const images = this.state.data || [];
    if (this.props.loop) {
      id = (id + images.length) % images.length;
    }

    this.setState(
      {
        currentStep: id,
        translateValue: -(id * 100),
        transitionAnimation: "transform ease-out 0.45s"
      },
      () => {
        if (this.state.currentStep === images.length - 1) {
          //for circular right
          setTimeout(() => {
            this.setState({
              currentStep: 1,
              transitionAnimation: "none",
              translateValue: -100
            });
          }, 450);
        } else if (this.state.currentStep === 0) {
          //for circular left
          setTimeout(() => {
            this.setState({
              currentStep: images.length - 2,
              transitionAnimation: "none",
              translateValue: -((images.length - 2) * 100)
            });
          }, 450);
        }
      }
    );
  }
  onStepIndicatorClick = id => {
    this.setCurrent(id + 1);
    this.resetTimer();
  };

  onLeftClick = () => {
    this.subCurrent();
    this.resetTimer();
  };

  onRightClick = () => {
    this.addCurrent();
    this.resetTimer();
  };

  render() {
    // const { heading } = this.attributes;
    console.log(this.items.length);
    const smContainer = <div classNames={[style["scroll-manager"]]} />;
    return (
      <div classNames={[style.container]}>
        {this.scrollManager.render(smContainer)}
        {/* <div>
          {this.items.length > 1 && (
            <StepIndicator
              maxStep={this.items.length}
              currentStep={this.state.currentStep - 1}
              onClick={this.onStepIndicatorClick}
            />
          )}
        </div> */}
      </div>
    );
  }

  afterMount() {
    this.scrollManager.mount();
  }
}

export { CarouselItem };
