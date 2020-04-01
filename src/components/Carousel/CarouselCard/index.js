import style from "./CarouselCard.css";

export class CarouselCard {
  static width() {
    // we need to set the width here for the scroll animation to work
    // width + margin in vw
    return 25.15 + 2;
  }
  static height() {
    // we need to set the width here for the scroll animation to work
    // width + margin in vw
    return 65.15;
  }

  constructor(attributes) {
    this.attributes = attributes;
    // console.log("Header ", this.attributes);
  }

  render() {
    const { image, route, name } = this.attributes;

    const thumbnailStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    };

    return (
      <div classNames={[style.carouselcard]}>
        <a attr={{ href: route }} classNames={[style.link]}>
          <div classNames={[style.inner]}>
            <div
              classNames={[style["thumbnail-container"]]}
              style={thumbnailStyle}
            >
              <div classNames={[style.overlay]}></div>
            </div>
            <div classNames={[style.hitbox]}>
              <div classNames={[style.title]}>{name}</div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
