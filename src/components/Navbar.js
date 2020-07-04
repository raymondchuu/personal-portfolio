import React, { Component, useState, useEffect } from "react";
import '../Navbar.css';
import { IoIosMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { Spring } from 'react-spring/renderprops';
import { Link, animateScroll as scroll } from 'react-scroll';

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      visible: false
    };

    this.handleScroll = this.handleScroll.bind(this)
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  handleScroll(){
    let {visible} = this.state
    window.scrollY > this.prev?
    visible && this.setState({visible: false})
    :
    !visible && this.setState({visible: true})

    this.prev = window.scrollY;
  }

  componentDidMount(){
    this.setState({visible: true})
    window.addEventListener('scroll',this.handleScroll);
  }

  componentWillUnmount(){
    this.setState({visible: false})
    window.removeEventListener('scroll',this.handleScroll);
  }

  render(){
    let visibleClass = this.state.visible ? "" : "hide"
    return (
      <div className={"navbar "+ visibleClass}>
        <div style={{float: 'right'}}>
          <ul className="navlinks">
            <Spring
              from={{opacity: 0}}
              to={{opacity: 1}}
              config={{delay: 500}}
            >
              {props => (
                <li style={props}><Link
                  to='/'
                  onClick={this.scrollToTop}
                  ignoreCancelEvents={true}
                  spy={true}
                  smooth={true}
                  duration={500}
                >Home</Link></li>
              )}
            </Spring>
            <Spring
              from={{opacity: 0}}
              to={{opacity: 1}}
              config={{delay: 1000/7 + 500}}
            >
              {props => (
                <li style={props}><Link 
                  to="about"
                  ignoreCancelEvents={true}
                  spy={true}
                  smooth={true}
                  duration={500}
                >About</Link></li>
              )}
            </Spring>
            <Spring
              from={{opacity: 0}}
              to={{opacity: 1}}
              config={{delay: 2000/7 + 500}}
            >
              {props => (
                <li style={props}><Link
                  to="experience"
                  ignoreCancelEvents={true}
                  spy={true}
                  smooth={true}
                  duration={500}
                >Experience</Link></li>
              )}
            </Spring>
            <Spring
              from={{opacity: 0}}
              to={{opacity: 1}}
              config={{delay: 3000/7 + 500}}
            >
              {props => (
                <li style={props}><Link
                  to="contact"
                  ignoreCancelEvents={true}
                  spy={true}
                  smooth={true}
                  duration={500}
                >Contact</Link></li>
              )}
            </Spring>
            <Spring
              from={{opacity: 0}}
              to={{opacity: 1}}
              config={{delay: 4000/7 + 500}}
            >
              {props => (
                <li style={props}><a href="/resume" target="_blank" rel="noopener noreferrer">Resume</a></li>
              )}
            </Spring>
            <Spring
              from={{opacity: 0}}
              to={{opacity: 1}}
              config={{delay: 5000/7 + 500}}
            >
              {props => (
            <li style={props}><a href="mailto:raymondchu1996@gmail.com"><IoIosMail style={{height: '20px', width: '30px'}} /></a></li>
            )}
            </Spring>
            <Spring
              from={{opacity: 0}}
              to={{opacity: 1}}
              config={{delay: 6000/7 + 500}}
            >
              {props => (
            <li style={props}><a href="https://www.github.com/raymondchuu" target="_blank" rel="noopener noreferrer"><IoLogoGithub style={{height: '20px', width: '30px'}}/></a></li>
            )}
            </Spring>
            <Spring
              from={{opacity: 0}}
              to={{opacity: 1}}
              config={{delay: 1000 + 500}}
            >
              {props => (
            <li style={props}><a href="https://www.linkedin.com/in/raymondchuu" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin style={{height: '20px', width: '30px'}}/></a></li>
            )}
            </Spring>
          </ul>
          </div>
      </div>
    );
  }
}

export default Navbar;