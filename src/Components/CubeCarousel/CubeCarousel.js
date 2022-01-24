import React, { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import "./CubeCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination, Scrollbar, A11y,EffectCube } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/effect-cube/effect-cube.min.css"
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";

const CubeCarousel = () => {
  const [clicked, setClicked] = useState(false);

  const expandImage = () => {
    console.log("Clicked");
    setClicked(!clicked);
  };

  return (
    <div
      className="cube-carousel-position w-screen relative z-10"
      style={{ marginBottom: "100px" }}
    >
      <h1 className="achievement pl-8 text-7xl text-center mb-10">EVENTS</h1>
      {!clicked ? (
        <div className="cube-carousel-display scene m-auto pt-40 scene w-20 h-20">
          <div className="cube cube-animation relative">
            <div className="face a absolute  text-center  bg-red-500 text-white front">
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </div>
            <div className="face b absolute text-center  bg-purple-500 text-white back">
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </div>
            <div
              className="face c absolute text-center  bg-pink-500 text-white right"
              style={{ width: "16rem" }}
            >
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
              />
            </div>
            <div
              className="face d absolute text-center bg-green-500 text-white left"
              style={{ width: "16rem" }}
            >
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
              />
            </div>
            <div className="face e absolute text-center bg-blue-500 text-white top">
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </div>
            <div className="face f absolute text-center  bg-yellow-500 text-white bottom">
              <img
                onClick={expandImage}
                src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt="wall"
                style={{ height: "16rem", width: "32rem" }}
              />
            </div>
          </div>
        </div>
      ) : null}
      {clicked ? (
        <div>
          <Zoom>
            <img
              onClick={() => {
                setClicked(false);
              }}
              className="relative m-auto -ml-8 z-10 -mt-20 modal"
              src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="wall"
            />
          </Zoom>
        </div>
      ) : null}
      <div className="cube-swiper-display">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y,EffectCube]}
          effect="cube"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              onClick={expandImage}
              src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="wall"
              style={{ height: "16rem", width: "32rem" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={expandImage}
              src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="wall"
              style={{ height: "16rem", width: "32rem" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={expandImage}
              src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="wall"
              style={{ height: "16rem", width: "32rem" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={expandImage}
              src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="wall"
              style={{ height: "16rem", width: "32rem" }}
            />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default CubeCarousel;
