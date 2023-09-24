import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";

import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/2.jpeg'
import img3 from '../../../assets/3.jpg'

function Banner() {
  return (
    <>
      <AwesomeSlider
        animation="foldOutAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
        className="mb-12"
      >
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
      </AwesomeSlider>
    </>
  );
}

export default Banner;
