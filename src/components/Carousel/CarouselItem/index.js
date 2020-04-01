import style from "./CarouselItem.css";

export class CarouselItem {
  static width() {
    // we need to set the width here for the scroll animation to work
    // width + margin in vw
    return 55.15 + 2;
  }

  constructor(attributes) {
    this.attributes = attributes;
  }

  render() {
    const { image, route, name } = this.attributes;

    //console.log("Image ", image);
    const thumbnailStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };

    return (
      <div classNames={[style.carouselItem]}>
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
