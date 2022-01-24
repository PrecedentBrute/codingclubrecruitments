import React, { useEffect, useState } from "react";
import "./Landing.scss";
import Carousel from "../Carousel/Carousel";
import CubeCarousel from "../CubeCarousel/CubeCarousel";

const Landing = () => {
  const [render, setRender] = useState(false);
  const [border, setBorder] = useState(4);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
      setBorder(0);
    }, 200);
  });

  const styles = {
    border: `${border} solid white`,
    fontFamily:
      "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif",
  };

  // return (
  //   <div>
  //     <div className="z-10">

  <div className="w-screen flex justify-center">
    <h1 className="typing relative top-60  text-2xl md:text-3xl lg:text-4xl">
      {render ? <div className="type-text">BITS PILANI</div> : null}
    </h1>
  </div>;
  //  </div>
  //   </div>
  // );

  return (
    <div className="page">
      <div class="page-bg"></div>

      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
  </div>

      <div className="page-wrapper relative z-10">
        <div class="cc-title">
          <div className="w-screen flex justify-center">
            <h1 className="typing absolute top-60  text-white text-7xl">
              <div style={styles} className="type-text">
                CODING CLUB
              </div>
            </h1>
          </div>
          <div className="w-screen flex justify-center">
            <h1 className="typing absolute top-80  text-white text-4xl">
              {render ? <div className="type-text">BITS PILANI</div> : null}
            </h1>
          </div>
        </div>
        <Carousel />
        <CubeCarousel />
      </div>
    </div>
  );
};

export default Landing;
