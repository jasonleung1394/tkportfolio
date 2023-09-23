import React from "react";
import { render } from "react-dom";
import "./ImgSlider.css";

// img Import
import rectangle from "../assets/Rectangle.png";
import arrowForward from "../assets/arrow_forward_noTail.svg";
import arrowBackward from "../assets/arrow_backward_noTail.svg";

export default function ImgSlider() {
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

  return (
    <>
      <p>Img Slider</p>
      <div className="imgCanvas">
        <div
          className="imgWrapper"
          style={{
            background:
              "linear-gradient(90deg, grey 0%,  rgba(128, 128, 128, 0.548) 30%)",
          }}
        >
          <img src={arrowBackward} alt="" />
        </div>
        <div className="images">
          <img src={sliders[0].imagePath} alt="" />
        </div>
        <div
          className="imgWrapper"
          style={{
            background:
              "linear-gradient(270deg, grey 0%,  rgba(128, 128, 128, 0.548) 30%)",
          }}
        >
          <img src={arrowForward} alt="" />
        </div>
      </div>
      <div className="sliderIndicator">
        {sliders.map((sliders, i) => (
          <img src={rectangle} alt="" />
        ))}
      </div>
    </>
  );
}
