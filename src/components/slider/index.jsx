import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import SliderElement from "../slider-element";
import { ReactComponent as Dot } from "../../assets/svg/dot.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import sliderElements from "./consts";
import "./index.scss";

function Slider() {
  const carousel = useRef();
  const [slideNum, setSlideNum] = useState(1);

  const goTo = (num) => {
    if (slideNum !== num) {
      setSlideNum(num);
      carousel.current.goTo(num - 1);
    }
  };

  const next = () => {
    if (slideNum === 4) {
      setSlideNum(1);
    } else {
      setSlideNum((p) => p + 1);
    }
    carousel.current.next();
  };
  const prev = () => {
    if (slideNum === 1) {
      setSlideNum(4);
    } else {
      setSlideNum((p) => p - 1);
    }
    carousel.current.prev();
  };

  const DotEl = ({ num }) => (
    <Dot
      className={`dot ${slideNum === num ? `dot-${num}` : ""}`}
      onClick={() => goTo(num)}
    />
  );

  const appendDots = () => (
    <ul>
      <DotEl num={1} />
      <DotEl num={2} />
      <DotEl num={3} />
      <DotEl num={4} />
    </ul>
  );

  const NextArrow = (props) => {
    const { className } = props;
    return (
      <div className={`${className} next`} onClick={next} aria-hidden="true">
        <Arrow className="next-icon" transform="scale(-1, 1)" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className } = props;
    return (
      <div className={`${className} prev`} onClick={prev} aria-hidden="true">
        <Arrow className="prev-icon" />
      </div>
    );
  };

  return (
    <div className="slider">
      <Carousel
        appendDots={appendDots}
        ref={carousel}
        swipe={false}
        accessibility={false}
        arrows
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        <SliderElement el={sliderElements[0]} next={next} prev={prev} />
        <SliderElement el={sliderElements[1]} next={next} prev={prev} />
        <SliderElement el={sliderElements[2]} next={next} prev={prev} />
        <SliderElement el={sliderElements[3]} next={next} prev={prev} />
      </Carousel>
    </div>
  );
}

export default Slider;
