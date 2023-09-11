import React from "react";
import Slider from "react-slick";
import "./styles.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const DateSlider = () => {
  const mode = {
    infinte: false,
    slidesToShow: 3,
    slidestoScroll: 1,
    centerMode: true,
    focusOnSelect: false,
    centerPadding: "0",
    arrows: true,
  };

  const generateDates = () => {
    const dates = [];
    const startDate = new Date();
    for (let i = 0; i < 10; i++) {
      const date = new Date();
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  return (
    <div className="date-slider">
      <Slider
        {...mode}
        prevArrow={
          <button className="noStyleBtn">
            <PrevSliderArrow />
          </button>
        }
        nextArrow={
          <button className="noStyleBtn">
            <NextSliderArrow />
          </button>
        }
      >
        {generateDates().map((date, index) => (
          <div
            key={index}
            className={index === 0 ? "date-item active-date-item" : "date-item"}
          >
            <span className="day">{"Mon"}</span>
            <span className="date">{date.getDate()}</span>
            <span className="month">{"May"}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DateSlider;

const PrevSliderArrow = () => {
  return (
    <div className="circle-div prevSliderArrow">
      <FaAngleLeft />
    </div>
  );
};

const NextSliderArrow = () => {
  return (
    <div className="circle-div nextSliderArrow">
      <FaAngleRight />
    </div>
  );
};
