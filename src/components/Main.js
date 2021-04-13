import React, { useState } from 'react';
import {Spring, animated} from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import { IoLogoGithub, IoIosLink } from 'react-icons/io';
import barbershop from '../Media/barbershopedit.png';
import contactmanager from '../Media/contactmanager.png';
import tictactoe from '../Media/tictactoe.png';
import playlistGenerator from '../Media/playlistgenerator.png';
import chessGameplay from '../Media/chessGameplay.png';
import chirperImage from '../Media/chirperMobile.png';
import goldnhour from '../Media/goldnhour.png';
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
        marginBottom: '20%',
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
                        config={{duration: 1500}}
                    >
                        {(props) => (
                            <animated.div style={props}>
                                <div style={styles.homePage} className="homepage">
                                        <p><span style={{fontSize: '24px', color: '#2BD9FF'}}>Hi, my name is</span><br/>
                                        <span style={{fontSize: '64px', color: '#C7C7C7', fontWeight: 'bolder'}}>Raymond Chu</span> <br/>
                                        <span style={{fontSize: '64px', color: '#8C8C8C', fontWeight: 'bolder'}}>I like to build websites.</span><br/>
                                        I'm a software developer with a passion for building websites, applications, and games. </p>
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
                        config={{duration: 1500}}
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
                                                I am a scientist with a curiousity for technology. I was always 
                                                fascinated in how technology can be implemented into our lives in so many different ways. 
                                                Recently I decided to get up and stop watching the evolution of technology, and dive in to be apart of the change. 
                                                I enrolled in many computer science courses and instantly fell in love with the field. 
                                                Since discovering the tech industry, I have been learning and developing my skills with a passion every single day.
                                            </p>
                                            <p>
                                                Shortly after graduating the University of Waterloo, I decided to attend Seneca College at their school of information and communications technology to start my journey into software development.
                                                I enjoy programming games and developing meaningful web applications, but passion lies in web development.
                                            </p>
                                            <p>Currently I am looking for full time opportunities. Here are a couple of technologies that I have experience using:</p>
                                            <ul className="technology">
                                                <li>C/C++</li>
                                                <li>JavaScript</li>
                                                <li>Java</li>
                                                <li>SQL</li>
                                                <li>Linux/Unix</li>
                                                <li>ReactJS</li>
                                                <li>ExpressJS</li>
                                                <li>HTML & CSS</li>
                                                <li>PostgreSQL</li>
                                                <li>MongoDB</li>
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
                        config={{duration: 1500}}
                    >
                        {(props) => (
                            <animated.div style={props}>
                                <div id="experience" style={styles.experience} >
                                <div style={{width: '100%', borderBottom: '1px solid white', paddingBottom: '0', marginBottom: '5%',}}>
                                    <div style={styles.subtitles}>My Work</div>
                                </div>

                                <div className="project-block">
                                    <div className="left-column-image">
                                        <div className="project-image-container">
                                            <a href="https://playchessonline.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                                <img src={chessGameplay} className="image" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="right-column-text">
                                        <p>Online Multiplayer Chess</p>
                                            <div className="text-right">
                                                This game was designed so that clients can play chess with friends online in the comfort of their own homes.
                                                ReactJs was implemented in the front end that communicated with a back end server using NodeJS, Express, and SocketIO.
                                            </div>
                                            <a href="https://github.com/raymondchuu/multiplayer-chess" target="_blank" rel="noopener noreferrer" style={{float: 'right', marginTop: '5%'}}><IoLogoGithub style={{ height: '25px', width: '25px',}}/></a>                                        
                                    </div>
                                </div>
                                <div className="project-block">
                                <div className="right-column-image">
                                        <a href="https://chirper1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <img src={chirperImage} className="image" width="100%" height="100%"/>
                                        </a>
                                    </div>
                                    <div className="left-column-text">
                                        <p>Chirper - Twitter Clone</p>
                                            <div className="text-left">
                                                A website that imitates the functionality of Twitter that's coded in ExpressJS and Express Handlebars. Client-sessions library was utilized to handle an authentication system and both MongoDB and PostgreSQL was used to handle storage of user accounts, as well as user chirps!
                                            </div>
                                            <a className="spotifygithubicon" href="https://github.com/raymondchuu/chirper" target="_blank" rel="noopener noreferrer" style={{float: 'left', marginTop: '5%'}}><IoLogoGithub style={{ height: '25px', width: '25px',}}/></a>                                        
                                        </div>
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
                                <p style={{textAlign: 'center', fontSize: '30px', margin: '0'}}>See more of my work <a href="https://github.com/raymondchuu" style={{color: '#2BD9FF'}}>here!</a></p>
                                </div>
                            </animated.div>
                        )}
                    </Spring>
                )}
                </VisibilitySensor>

{/*                 <VisibilitySensor partialVisibility>
                {({isVisible}) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 1 : 0,
                            //marginLeft: isVisible ? '0px' : '-30px',
                        }}
                        config={{duration: 1500}}
                    >
                        {(props) => (
                            <animated.div style={props}>
                                <div style={{width: '100%', borderBottom: '1px solid white', paddingBottom: '0', marginBottom: '0',}}>
                                    <div style={styles.subtitles}>Other Work</div>
                                </div>
                                <div style={styles.contact} id="other-work">
                                    <div className="other-work-container">
                                        <div className="other-work-row">
                                            <div>
                                                <span>goldnhour</span> <br/>
                                                <img src={goldnhour} className="other-work-img" />
                                            </div>
                                            <div>
                                                <span>TicTacToe</span>
                                                <img src={tictactoe} className="other-work-img" />
                                            </div>
                                        </div>
                                        <div className="other-work-row">
                                            <img src={contactmanager} className="other-work-img" />
                                            <img src={tictactoe} className="other-work-img" />

                                        </div>
                                    </div>
                                </div>
                            </animated.div>
                        )}
                    </Spring>
                )}
                </VisibilitySensor> */}

                <VisibilitySensor partialVisibility>
                {({isVisible}) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 1 : 0,
                            //marginLeft: isVisible ? '0px' : '-30px',
                        }}
                        config={{duration: 1500}}
                    >
                        {(props) => (
                            <animated.div style={props}>
                                <div style={styles.contact} id="contact">
                                    <div style={{width: '100%', borderBottom: '1px solid white', paddingBottom: '0'}}>
                                        <div style={styles.subtitles}>Contact</div>
                                    </div>
                                    <p style={{fontSize: '64px', color: '#C7C7C7', fontWeight: 'bolder'}}>Let's Connect!</p>
                                    <p>I am currently seeking for full time positions. Send me an email if you have any inquiries or opportunities!</p>
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

