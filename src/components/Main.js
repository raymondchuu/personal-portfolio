import React, { useState } from 'react';
import {Spring, animated} from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import { IoLogoGithub, IoIosLink } from 'react-icons/io';
import barbershop from '../Media/barbershopedit.png';
import contactmanager from '../Media/contactmanager.png';
import tictactoe from '../Media/tictactoe.png';
import playlistGenerator from '../Media/playlistgenerator.png';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { animateScroll as scroll } from 'react-scroll';
import Backdrop from './Backdrop';
import '../Main.css';

const styles = {
/*     container: {
        width: '70%',
        margin: 'auto',
        color: 'white',
        fontSize: '30px',
        height: '100%',
        paddingTop: '60px'
    }, */

    homePage: {
        paddingTop: '10%',
        marginBottom: '20%',
    },

    aboutMe: {
        marginBottom: '30%',
        paddingTop: '10%',
        width: '100%',
    },

    experience: {
        marginBottom: '20%',
        fontSize: '16px',
        display: 'table',
        paddingTop: '10%',
    },

    contact: {
        marginTop: '15%',
        paddingBottom: '20%',
    },

    projectImage: {
        width: '45%',
    },

    projectDescription: {
        backgroundColor: '#535353',
        paddingLeft: '8%',
        paddingRight: '8%',
        paddingTop: '3%',
        paddingBottom: '3%',
    },

    subtitles: {
        fontSize: '40px', 
        fontWeight: 'bold', 
        color: '#2BD9FF', 
        letterSpacing: '2px',
    }

}

const Main = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(true);
    }

    const handleBackdrop = () => {
        setToggle(false);
    }

    return (
        <div>
            <Navbar toggle={handleClick} />
            <Sidebar show={toggle} setshow={handleBackdrop}/>
            {toggle ? <Backdrop click={handleBackdrop}/> : ""}
            <div className="container">
                    <Spring
                        from={{opacity: 0, 
                            marginLeft: '-40px'
                        }}
                        to={{
                            opacity: 1,
                            marginLeft: '0px'
                        }}
                        delay={1000}
                        config={{duration: 1000}}
                    >
                        {(props) => (
                            <animated.div style={props}>
                                <div style={styles.homePage} className="homepage">
                                        <p><span style={{fontSize: '24px', color: '#2BD9FF'}}>Hi, my name is</span><br/>
                                        <span style={{fontSize: '64px', color: '#C7C7C7', fontWeight: 'bolder'}}>Raymond Chu</span> <br/>
                                        <span style={{fontSize: '64px', color: '#8C8C8C', fontWeight: 'bolder'}}>I like to build websites.</span><br/>
                                        I'm a student studying software development with a passion for building websites, applications, and games. </p>
                                        <a className="workButton" href="https://www.github.com/raymondchuu?tab=repositories" target="_blank" rel="noopener noreferrer">View my work</a>
                                        <a className="inTouchButton" href="mailto:raymondchu1996@gmail.com">Get in touch</a>
                                </div> 
                            </animated.div>
                        )}
                    </Spring>

                <VisibilitySensor partialVisibility>
                {({isVisible}) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 1 : 0,
                            //marginLeft: isVisible ? '0px' : '-30px',
                        }}
                        config={{duration: 2000}}
                    >
                        {(props) => (
                            <animated.div style={props}>


                                <div style={styles.aboutMe} id='about'>
                                    <div style={{ width: '100%', borderBottom: '1px solid white', paddingBottom: '0', marginBottom: '5%',}}>
                                        <div style={styles.subtitles}>About Me</div>
                                    </div>
                                    <div style={{width: '100%'}}>
                                        <div className="profile-image-container" >
                                            <a href="http://www.linkedin.com/in/raymondchuu" target="_blank" rel="noopener noreferrer">
                                            <img src="https://i.ibb.co/NNH5HfL/profile.png" height="100%"
                                                className="profile-pic"
                                            />
                                            </a>
                                        </div>

                                        <div className="profile-text">
                                            <p style={{marginTop: 0}}>Hey! My name is Raymond and I'm currently studying software development in Toronto, Ontario!</p>
                                            <p>
                                                I enjoy programming games and developing meaningful web applications, but passion lies in web development.
                                                Shorty after graduating the University of Waterloo, I decided to attend Seneca College at their school of information and communications technology to start my journey into software development.
                                            </p>
                                            <p>Currently I am looking for internship opportunities for summer of 2021. Here are a couple of technologies that I have experience using:</p>
                                            <ul className="technology">
                                                <li>HTML & CSS</li>
                                                <li>JavaScript</li>
                                                <li>React</li>
                                                <li>Express.js</li>
                                                <li>C/C++</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </animated.div>
                        )}
                    </Spring>
                )}
                </VisibilitySensor>

                <VisibilitySensor partialVisibility>
                {({isVisible}) => (
                    <Spring

                        to={{
                            opacity: isVisible ? 1 : 0,
                            //marginLeft: isVisible ? '0px' : '-30px',
                        }}
                        config={{duration: 2000}}
                    >
                        {(props) => (
                            <animated.div style={props}>
                                <div id="experience" style={styles.experience} >
                                <div style={{width: '100%', borderBottom: '1px solid white', paddingBottom: '0', marginBottom: '5%',}}>
                                    <div style={styles.subtitles}>My Projects</div>
                                </div>
                                <div className="project-block">
                                    <div className="left-column-image">
                                        <div>
                                            <a href="https://desolate-fjord-85157.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                                <img src={barbershop} className="image" width="100%" height="100%"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="right-column-text">
                                        <p>Barbershop Website</p>
                                            <div className="text-right">
                                                A website designed so that customers may book appointments online.
                                                Developed front-end using React which communicates to a back-end Express API connected
                                                to a MongoDB database.
                                            </div>
                                            <a href="https://github.com/raymondchuu/fullstack-barbershop-website" target="_blank" rel="noopener noreferrer" style={{float: 'right', marginTop: '5%'}}><IoLogoGithub style={{ height: '25px', width: '25px',}}/></a>                                        
                                    </div>
                                </div>
                                <div className="project-block">
                                <div className="right-column-image">
                                        <a href="https://spotify-playlist-generator-f.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <img src={playlistGenerator} className="image" width="100%" height="100%"/>
                                        </a>
                                    </div>
                                    <div className="left-column-text">
                                        <p>Spotify Playlist Generator</p>
                                            <div className="text-left">
                                                Web application that generates a playlist by entering names of artists and adds the playlist on the user's Spotify account.
                                                Implemented React in the front end which communicates to the spotify API backend.
                                            </div>
                                            <a className="spotifygithubicon" href="https://github.com/raymondchuu/spotify-playlist-generator" target="_blank" rel="noopener noreferrer" style={{float: 'left', marginTop: '5%'}}><IoLogoGithub style={{ height: '25px', width: '25px',}}/></a>                                        
                                        </div>
                                </div>
                                <div className="project-block">
                                    <div className="left-column-image">
                                        <div>
                                            <a href="https://github.com/raymondchuu/Contact-Manager-System" target="_blank" rel="noopener noreferrer">
                                                <img src={contactmanager} className="image" width="100%" height="100%"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="right-column-text">
                                        <p>Contact Management System</p>
                                            <div className="text-right">
                                                Built a contact management system to allow users to add, remove, edit, and delete
                                                contacts. Designed in C using structures, pointers, arrays, and I/O functions.
                                            </div>
                                            <a href="https://github.com/raymondchuu/Contact-Manager-System" target="_blank" rel="noopener noreferrer" style={{float: 'right', marginTop: '5%'}}><IoLogoGithub style={{ height: '25px', width: '25px',}}/></a>
                                    </div>
                                </div>
                                <div className="project-block">
                                <div className="right-column-image">
                                        <a href="https://github.com/raymondchuu/TicTacToe" target="_blank" rel="noopener noreferrer">
                                            <img src={tictactoe} className="image" style={{width: '100%'}}width="100%" height="100%"/>
                                        </a>
                                    </div>
                                    <div className="left-column-text">
                                        <p>TicTacToe</p>
                                        <div className="text-left">
                                            Designed a two-player command-line Tictactoe game where players can keep track of the score.
                                            Developed in C using 2D arrays, pointers, structures and storing the score in a text file.
                                        </div>
                                        <a href="https://github.com/raymondchuu/TicTacToe" target="_blank" rel="noopener noreferrer" style={{float: 'left', marginTop: '5%'}}><IoLogoGithub style={{ height: '25px', width: '25px'}}/></a>
                                    </div>

                                </div>
                                </div>
                            </animated.div>
                        )}
                    </Spring>
                )}
                </VisibilitySensor>

                <VisibilitySensor partialVisibility>
                {({isVisible}) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 1 : 0,
                            //marginLeft: isVisible ? '0px' : '-30px',
                        }}
                        config={{duration: 2000}}
                    >
                        {(props) => (
                            <animated.div style={props}>
                                <div style={styles.contact} id="contact">
                                    <div style={{width: '100%', borderBottom: '1px solid white', paddingBottom: '0'}}>
                                        <div style={styles.subtitles}>Contact</div>
                                    </div>
                                    <p style={{fontSize: '64px', color: '#C7C7C7', fontWeight: 'bolder'}}>Let's Connect!</p>
                                    <p>I am currently seeking internships for summer of 2021. Send me an email if you have any inquiries or opportunities!</p>
                                    <a className="workButton" href="mailto:raymondchu1996@gmail.com">Get in touch</a>
                                </div>
                            </animated.div>
                        )}
                    </Spring>
                )}
                </VisibilitySensor>
            </div>
        </div>

    );
}



export default Main;

