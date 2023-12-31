import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import "./ImgSlider.css";

// img Import
import rectangle from "../assets/Rectangle.png";
import arrowForward from "../assets/arrow_forward_noTail.svg";
import arrowBackward from "../assets/arrow_backward_noTail.svg";

const sliders = [
  {
    id: 1,
    title: "first Img",
    imagePath: "/assets/img1.png",
  },
  {
    id: 2,
    title: "Second Img",
    imagePath: "/assets/img2.png",
  },
];

const delay = 2500;

export default function ImgSlider() {
  const [imgCount, setImgCount] = useState(0);
  const imgCountRef = useRef();

  // Auto Slide function
  // reset timeout function
  function resetTimeout() {
    if (imgCountRef.current) {
      clearTimeout(imgCountRef.current);
    }
  }
  useEffect(() => {
    resetTimeout(); //reset the current state
    imgCountRef.current = setTimeout(
      () =>
        setImgCount((prevImgCount) =>
          prevImgCount === sliders.length - 1 ? 0 : prevImgCount + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [imgCount]);

  return (
    <>
      <div className="imgCanvas">
        <div
          className="imgWrapper"
          style={{
            background:
              "linear-gradient(90deg, grey 0%,  rgba(128, 128, 128, 0.548) 30%)",
          }}
          onClick={() => {
            setImgCount((prevImgCount) =>
              prevImgCount === sliders.length - 1
                ? prevImgCount - 1
                : sliders.length - 1
            );
          }}
        >
          <img src={arrowBackward} alt="" />
        </div>
        <div className="imgContainer">
          <div
            className="images"
            style={{ transform: `translate3d(${-imgCount * 100}%, 0, 0)` }}
          >
            {sliders.map((slider, i) => (
              <img
                key={slider.id}
                src={slider.imagePath}
                alt=""
                className="slide"
              />
            ))}
          </div>
        </div>
        <div
          className="imgWrapper"
          style={{
            background:
              "linear-gradient(270deg, grey 0%,  rgba(128, 128, 128, 0.548) 30%)",
          }}
          onClick={() => {
            setImgCount((prevImgCount) =>
              prevImgCount === sliders.length - 1 ? 0 : prevImgCount + 1
            );
          }}
        >
          <img src={arrowForward} alt="" />
        </div>
      </div>
      <div className="sliderIndicator">
        {sliders.map((sliders, i) => (
          <img
            src={rectangle}
            alt=""
            className={`slideshowDot${imgCount === i ? " active" : ""}`}
            onClick={() => {
              setImgCount(i);
            }}
          />
        ))}
      </div>
    </>
  );
}
