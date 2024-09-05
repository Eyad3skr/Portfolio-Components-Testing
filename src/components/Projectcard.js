import React from "react";
import "./projectcard.css";
import PropTypes from "prop-types";
import borderBottom from "../Assets/ProjectCardDownBorder.svg";
// style={{ backgroundImage: `url(${props.img})` }}

const Projectcard = (props) => {
  return (
    <div className="main">
      <div className="card">
        <div className="overlay">
          <div className="content">
            <div className="publishDate">
              <span>{props.publish}</span>
            </div>
            <img
              src={
                props.img
                  ? props.img
                  : "https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg"
              }
              alt="Project mockup"
            />
            <div className="viewLive">
              <a href={props.read}>More Info</a>
            </div>
          </div>
        </div>
      </div>
      <div className="data">
        <h3>{props.title ? props.title.slice(0, 30) : "No Title"}</h3>
        <span>
          {props.author ? props.author.slice(0, 20) + "..." : "No Author"}
        </span>
        <p>
          {props.description
            ? props.description.slice(0, 60) + "..."
            : "No Description"}
        </p>
      </div>
      <img
        className="borderBottom"
        src={borderBottom}
        alt="border bottom"
      ></img>
    </div>
  );
};

export default Projectcard;
