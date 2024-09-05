import React from 'react';
import './contactcard.css';
import PropTypes from 'prop-types';

const Contactcard = (props) => {
  return (
    <div className="contact">
      <div className="text">
      <h4>{props.headline}</h4>
      <span>{props.bio}</span>
      </div>
    <div className="custom-border">
    <form id="survey-form">
    <label id="name-label" for="name">What Should I Call You? <input id="name" type="text" placeholder="Your name" required /></label>
    <label id="email-label" for="email">Sended From <input id="email" type="email" placeholder="Your.Name@domain.com" required /></label>
    <label class="comments">Transmitted Data
      <textarea type="textarea" placeholder="Hi, I write you about.."></textarea>
    </label>
  </form>
    </div>
    <div className="buttons">
      <a className="send" href="www.google.com">Send [Enter]</a>
      <a className="discard" href="www.google.com">Discard [ESC]</a>
    </div>
    </div>
  );
};

Contactcard.propTypes = {
  headline : PropTypes.string.isRequired,
}

export default Contactcard;
