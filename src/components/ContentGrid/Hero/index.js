import style from "./Hero.css";

export class Hero {
    static width() {
        // we need to set the width here for the scroll animation to work
        // width + margin in vw
        return 25.15 + 2;
    }
    static height({ attributes }) {
        let height = 19.5036458333 + 1.5; // height + margin
        height += attributes.heading ? 3.1354166667 : 0;
        return height;
    }

    constructor(attributes) {
        this.attributes = attributes;
        const slideIndex = 1;
        this.showSlides(slideIndex);
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }


    showSlides(n) {
        let i;
        console.log("hi")
        const slides = document.getElementsByClassName("subContainer");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) { this.slideIndex = 1 }
        if (n < 1) { this.slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        //slides[this.slideIndex - 1].style.display = "block";
        // dots[this.slideIndex - 1].className += " active";
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
            <div classNames={[style.container]}>
                <div>
                    <div
                        classNames={[style.subContainer]}
                        style={thumbnailStyle}>
                    </div>
                    <div
                        classNames={[style.subContainer]}
                        style={thumbnailStyle}>
                    </div>
                    <div
                        classNames={[style.subContainer]}
                        style={thumbnailStyle}>
                    </div>
                    <a classNames={[style.prev]} onClick="plusSlides(-1)">&#10094;</a>
                    <a classNames={[style.next]} onClick="plusSlides(1)">&#10095;</a>
                    <div style={{ textAlign: "center", backgroundColor: "#D0EC9D" }}>
                        <span classNames={[style.dot]} onClick="currentSlide(1)"></span>
                        <span classNames={[style.dot]} onClick="currentSlide(2)"></span>
                        <span classNames={[style.dot]} onClick="currentSlide(3)"></span>
                    </div>
                </div>
            </div>

        )
    }

}