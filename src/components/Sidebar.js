import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../Sidebar.css';

const scrollToTop = () => {
    scroll.scrollToTop();
}



const Sidebar = (props) => {
    let sideClass = props.show ? "show" : "";
    let close = props.setshow;

    const handleHome = () => {
        scrollToTop();
        close()
    }

    return (
        <nav className={"sidebar " + sideClass}>
            <ul>
                <li><Link
                    to="/"
                  onClick={props.setshow}
                  ignoreCancelEvents={true}
                  spy={true}
                  smooth={true}
                  duration={500}
                >Home</Link></li>

                <li>
                  <Link 
                  to="about"
                  onClick={props.setshow}
                  ignoreCancelEvents={true}
                  spy={true}
                  smooth={true}
                  duration={500}
                >About</Link></li>
                
                <li><Link
                  to="experience"
                  onClick={props.setshow}
                  ignoreCancelEvents={true}
                  spy={true}
                  smooth={true}
                  duration={500}
                >Experience</Link></li>
                            
                <li><Link
                  to="contact"
                  onClick={props.setshow}
                  ignoreCancelEvents={true}
                  spy={true}
                  smooth={true}
                  duration={500}
                >Contact</Link></li>  

                <li><a href="/resume" target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Sidebar