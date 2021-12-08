import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Carousel from "../Components/Carousel/Carousel";
import CubeCarousel from "../Components/CubeCarousel/CubeCarousel";
import Landing from "../Components/Landing/Landing";

 const Home = () => {
    return (
        <div>
            <Navbar />
            <Landing />
            {/*<Carousel />*/}
        </div>
    )
}

export default Home;
