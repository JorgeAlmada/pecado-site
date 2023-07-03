import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import img1 from "../public/images/slide.png";
import img2 from "../public/images/slide-2.png";
import img3 from "../public/images/slide-3.png";
import worm from "../public/images/pinkworm.png";
import Image from "next/image";

function ImageSlider() {
  const slides = [img1, img2, img3];
  const bgStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="relative overflow-hidden">
      <Image src={worm} alt="first-worm" className="absolute top-10 -right-5 w-[15%] z-10" />
      <Image src={worm} alt="first-worm" className="absolute bottom-10 -left-5 w-[15%] z-20" />
      <Slider className="slider" autoplay={2000}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-16"
            style={{ backgroundImage: "url(" + slide.src + ")", ...bgStyle }}
          >
            {/* <Image
              src={slide}
              alt={`slide-${index + 1}`}
              className="w-100 h-100"
            /> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
