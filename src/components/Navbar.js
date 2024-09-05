import React from 'react'
import "./style.css"
import logo from "../Assets/1.png"
import burgerMenuOpen from "../Assets/menu.png"
import burgerMenuClose from "../Assets/cross.png"
import PropTypes from 'prop-types';
const Navbar = (props) => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="pages">
          <ul>
            <a><li>{props.home}</li></a>
            <a><li>{props.about}</li></a>
            <a><li>{props.pg}</li></a>
            <a><li>{props.feedback}</li></a>
            <a><li>{props.cu}</li></a>
          </ul>
        </div>
        <div className="burgerMenu">
          <img src={burgerMenuOpen}></img>
          <img src={burgerMenuClose}></img>
        </div>
      </nav>
   
    </div>
  )
}

export default Navbar

Navbar.propTypes = {
  home : PropTypes.string.isRequired, /* isRequired is used to make sure that our value is not null */

}
