import style from "./Card.css";

export class Card {
  static width() {
    // we need to set the width here for the scroll animation to work
    // width + margin in vw
    return 25.15 + 2;
  }
  static height() {
    // we need to set the width here for the scroll animation to work
    // width + margin in vw
    return 50.15 + 2;
  }

  constructor(attributes) {
    this.attributes = attributes;
    // console.log("Header ", this.attributes.heading);
  }

  render() {
    const { image, route, name, heading, episodeCount } = this.attributes;
    console.log(" eCount", episodeCount);
    const thumbnailStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    };

    return (
      <div classNames={[style.card]}>
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
              <div classNames={[style.epCount]}>{episodeCount}</div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
