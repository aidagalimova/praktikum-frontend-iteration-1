/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import SliderElement from "../slider-element";
import { ReactComponent as Dot } from "../../assets/svg/dot.svg";
import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import slider1 from "../../assets/image/sliderImg1.png";
import slider2 from "../../assets/image/sliderImg2.png";
import slider3 from "../../assets/image/sliderImg3.png";
import slider4 from "../../assets/image/sliderImg4.png";
import "./index.scss";

const sliderElements = [
  {
    id: 1,
    name: "Бесплатная парковка",
    discription: `Оставляйте машину на платных городских парковках и разрешенных местах, 
      не нарушая ПДД, а также в аэропортах`,
    img: slider1,
  },
  {
    id: 2,
    name: "Страховка",
    discription: `Полная страховка страховка автомобиля`,
    img: slider2,
  },
  {
    id: 3,
    name: "Бензин",
    discription: `Полный бак на любой заправке города за наш счёт`,
    img: slider3,
  },
  {
    id: 4,
    name: "Обслуживание",
    discription: `Автомобиль проходит еженедельное ТО`,
    img: slider4,
  },
];

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
