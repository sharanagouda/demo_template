import { Component } from "preact";
import * as M from "@discovery/prelude/data/maybe";
import { Swiper, EventType } from "../../../utils/guesture";
import * as styles from "./styles.css";
import {
  CarouselItem,
  Props as CarouselItemProps
} from "../../organisms/carousel-item";
import { StepIndicator } from "../../atoms/step-indicator";
import { Icon, Icons } from "../../atoms/icon";
import { cn } from "@discovery/classnames";
import { getIsMobile } from "../../../utils/isMobile";

export type Props = {
  data: CarouselItemProps[];
  images: CarouselItemProps[];
  autoplay: number;
  loop?: boolean;
  templateIdM: M.Maybe<string>;
};

export enum HeroType {
  Basic
}

export type State = {
  currentStep: number;
  translateValue: number;
  data: CarouselItemProps[];
  images: CarouselItemProps[];
  transitionAnimation: string;
};

export class Carousel extends Component<Props, State> {
  _timer: number;
  constructor(props: Props) {
    super(props);

    this.setState({
      currentStep: 1,
      translateValue: -100,
      transitionAnimation: "transform ease-out 0.45s",
      data:
        props.data.length > 0
          ? [props.data[props.data.length - 1], ...props.data, props.data[0]]
          : [],
      images:
        props.images.length > 0
          ? [
              props.images[props.images.length - 1],
              ...props.images,
              props.images[0]
            ]
          : []
    });
    this._timer = 0;
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

  onSwipe = (e: EventType) => {
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

  setCurrent(id: number) {
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

  onStepIndicatorClick = (id: number) => {
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

  renderItems = () => {
    const { data, images } = this.state;
    if (getIsMobile()) {
      const res = data.map(item => {
        return <CarouselItem {...item} />;
      });
      return res;
    } else {
      const resImg = images.map(item => {
        return <CarouselItem {...item} />;
      });
      return resImg;
    }
  };

  mastheadType = (template: string) => {
    switch (template) {
      case "basic":
        return HeroType.Basic;
      default:
        return HeroType.Basic;
    }
  };

  render() {
    const type = M.fromMaybe(this.props.templateIdM, "");

    return (
      this.mastheadType(type) == HeroType.Basic && (
        <Swiper onSwipe={this.onSwipe}>
          <div className={styles.carouselContainer}>
            <div
              className={cn(styles.arrow, styles.leftArrow)}
              onClick={this.onLeftClick}
            >
              <Icon
                type={Icons.AngleLeftIcon}
                color="#FFF"
                className={styles.arrowIcon}
              />
            </div>
            <div
              className={styles.carouselItemWrapper}
              style={{
                transform: `translateX(${this.state.translateValue}%)`,
                transition: this.state.transitionAnimation
              }}
            >
              {this.renderItems()}
            </div>
            {this.props.data.length > 1 && (
              <StepIndicator
                maxStep={this.props.data.length}
                currentStep={this.state.currentStep - 1}
                onClick={this.onStepIndicatorClick}
              />
            )}
            <div
              className={cn(styles.arrow, styles.rightArrow)}
              onClick={this.onRightClick}
            >
              <Icon
                type={Icons.AngleRightIcon}
                color="#FFF"
                className={styles.arrowIcon}
              />
            </div>
          </div>
        </Swiper>
      )
    );
  }
}
