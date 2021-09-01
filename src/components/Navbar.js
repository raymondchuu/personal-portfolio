import React from "react";
import '../Navbar.css';
import { IoIosMail, IoLogoGithub, IoLogoLinkedin, IoIosLink } from 'react-icons/io';
import { Spring } from 'react-spring/renderprops';
import { Link, animateScroll as scroll } from 'react-scroll';
import ToggleButton from './ToggleButton';

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
    window.scrollY > this.prev ?
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
    let visibleTop = this.state.visible ? "" : "hide"
    return (
      <nav className={'navbar ' + visibleTop}>
        <div className="toggle">
          <ToggleButton toggle={this.props.toggle} />
        </div>
        <div style={{float: 'right'}}>
          <ul className="navlinks">
            <Spring
              from={{opacity: 0}}
              to={{opacity: 1}}
              config={{delay: 500}}
            >
              {props => (
                <li style={props}><Link
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

                <li style={props}>
                  <Link 
                  to="about"
                  href='/about'
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
                  to="work"
                  ignoreCancelEvents={true}
                  spy={true}
                  smooth={true}
                  duration={500}
                >Work</Link></li>
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
            <li style={props}><a href="mailto:r3chu@uwaterloo.ca"><IoIosMail style={{height: '20px', width: '30px'}} /></a></li>
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
      </nav>
    );
  }
}

export default Navbar;