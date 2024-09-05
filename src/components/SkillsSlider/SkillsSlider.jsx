import './skillsSlider.css';
import React from 'react';
import { Slide } from 'react-slideshow-image';

const SkillsSlider = () => {
    const images = [
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
};

export default SkillsSlider;