import React, { Component, useState, useEffect } from "react";
//import '../Navbar.css';
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { Spring } from 'react-spring/renderprops';
import { Link, animateScroll as scroll } from 'react-scroll';
import pdf from '../Media/Raymond-Chu-Resume.pdf';

class Test extends React.Component {

  render(){
    return (
      <embed src={pdf} width="100%" height="100%"/>
    );
  }
}

export default Test;