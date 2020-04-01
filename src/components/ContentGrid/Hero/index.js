import style from "./Hero.css";

export class Hero {
  static width() {
    return 25.15 + 2;
  }
  constructor(attributes) {
    console.log("attributes", attributes);
    this.attributes = attributes;
  }

  render() {
    const { image, name } = this.attributes;
    console.log("image ", image);
    const thumbnailStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    };
    return (
      <div classNames={[style.container]}>
        <div classNames={[style.subContainer]} style={thumbnailStyle}></div>
        <div classNames={[style.hitbox]}>
          <div classNames={[style.title]}>{name}</div>
        </div>
      </div>
    );
  }
}
