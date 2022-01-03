import React, { useEffect, useState } from "react";
import "./Landing.css";

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
  };

  return (
    <div>
      <div className="z-10">
        <div className="w-screen flex justify-center">
          <h1 className="typing relative top-52 font-bold text-5xl md:text-6xl lg:text-7xl">
            <div style={styles} className="type-text">
              CODING CLUB
            </div>
          </h1>
        </div>
        <div className="w-screen flex justify-center">
          <h1 className="typing relative top-60  text-2xl md:text-3xl lg:text-4xl">
            {render ? <div className="type-text">BITS PILANI</div> : null}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
