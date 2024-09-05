import './slider.css';
import ProjectCard from '../Projectcard';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const cards = [<ProjectCard />, <ProjectCard />, <ProjectCard />, <ProjectCard />];

function SliderComponent() {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [crdIndex, setCardIndex] = useState(0);

    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3, // Adjust this based on your need
      slidesToScroll: 1,
      centerMode: false, // Change this to false temporarily to test
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setCardIndex(next),
  }  

    return (
        <div className="main">
            <Slider {...settings}>
                {cards.map((crd, idx) => (
                    <div key={idx} className={idx === crdIndex ? "slide activeSlide" : "slide"}>
                        {crd} {/* Use the element directly from the array */}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderComponent;
