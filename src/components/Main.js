import React  from 'react';
import '../Main.css';
import {Spring, animated} from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import { IoLogoGithub } from 'react-icons/io';
import barbershop from '../Media/barbershop.png';
import contactmanager from '../Media/contactmanager.png';
import tictactoe from '../Media/tictactoe.png';
import profilepic from '../Media/profile.png';
import Navbar from './Navbar';

const styles = {
    container: {
        width: '70%',
        margin: 'auto',
        color: 'white',
        fontSize: '30px',
        height: '100%',
        paddingTop: '60px'
    },

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
}

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div style={styles.container}>

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
                        config={{duration: 1000}}
                    >
                        {(props) => (
                            <animated.div style={props}>


                                <div style={styles.aboutMe} id='about'>
                                    <div style={{ width: '100%', borderBottom: '1px solid white', paddingBottom: '0', marginBottom: '5%',}}>
                                        <p style={{fontSize: '24px', fontWeight: 'bold', color: '#2BD9FF'}}>About Me</p>
                                    </div>
                                    <div style={{width: '100%'}}>
                                        <div style={{fontSize: '16px', width: '45%', float: 'left'}}>
                                            <p>Hey! My name is Raymond and I'm currently studying software development in Toronto, Ontario!</p>
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

                                        <div style={{marginLeft: '50%', paddingLeft: '10%'}}>
                                            <img src={profilepic} height="300px" width="300px" />
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
                        config={{duration: 1000}}
                    >
                        {(props) => (
                            <animated.div style={props}>

                                <div style={styles.experience} id='experience'>
                                    <div style={{width: '100%', borderBottom: '1px solid white', paddingBottom: '0', marginBottom: '5%',}}>
                                        <p style={{fontSize: '24px', fontWeight: 'bold', color: '#2BD9FF'}}>My Projects</p>
                                    </div>
                                    <div style={{width: '100%', height: '306px', marginBottom: '10%',}}>
                                        <div style={styles.projectImage}>
                                            <img src={barbershop} height="306px" width="100%" style={{float: 'left'}}/>
                                        </div>
                                        <div style={{marginLeft: '50%'}}>
                                            <p style={{textAlign: 'right', color: '#2BD9FF', fontSize: '20px'}}>Full Stack Website</p>
                                            <br/>
                                            <div style={styles.projectDescription}>
                                                <p>
                                                    A website designed so that customers may book appointments online.
                                                    Developed front end using React which communicates to a back end express API.
                                                    The booked appointments are then stored in a MongoDB database and the customers get 
                                                    a friendly confirmation email upon booking. 
                                                </p>
                                            </div>
                                            <a href="https://github.com/raymondchuu/fullstack-barbershop-website" target="_blank" rel="noopener noreferrer" style={{float: 'right', marginTop: '5%'}}><IoLogoGithub style={{ height: '25px', width: '25px',}}/></a>
                                        </div>
                                    </div>

                                    <div style={{width: '100%', height: '306px', marginBottom: '10%',}}>
                                        <div style={styles.projectImage}>
                                            <img src={contactmanager} height="306px" width="100%" style={{float: 'left'}}/>
                                        </div>
                                        <div style={{marginLeft: '50%'}}>
                                            <p style={{textAlign: 'right', color: '#2BD9FF', fontSize: '20px'}}>Contact Management System</p>
                                            <br/>
                                            <div style={styles.projectDescription}>
                                                <p>
                                                    Developed a contact management system in C to allow users to add, remove, edit, and delete
                                                    contacts.
                                                </p>
                                            </div>
                                            <a href="https://github.com/raymondchuu/Contact-Manager-System" target="_blank" rel="noopener noreferrer" style={{float: 'right', marginTop: '5%'}}><IoLogoGithub style={{ height: '25px', width: '25px',}}/></a>
                                        </div>
                                    </div>

                                    <div style={{width: '100%', height: '306px',}}>
                                        <div style={styles.projectImage}>
                                            <img src={tictactoe} height="306px" width="100%" style={{float: 'left'}}/>
                                        </div>
                                        <div style={{marginLeft: '50%'}}>
                                            <p style={{textAlign: 'right', color: '#2BD9FF', fontSize: '20px'}}>Tic Tac Toe</p>
                                            <br/>
                                            <div style={styles.projectDescription}>
                                                <p>
                                                    A command line game that allows two users to play Tic Tac Toe. 
                                                </p>
                                            </div>
                                            <a href="https://github.com/raymondchuu/TicTacToe" target="_blank" rel="noopener noreferrer" style={{float: 'right', marginTop: '5%'}}><IoLogoGithub style={{ height: '25px', width: '25px',}}/></a>
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
                        config={{duration: 1000}}
                    >
                        {(props) => (
                            <animated.div style={props}>
                                <div style={styles.contact} id="contact">
                                    <div style={{width: '100%', borderBottom: '1px solid white', paddingBottom: '0'}}>
                                        <p style={{fontSize: '24px', fontWeight: 'bold', color: '#2BD9FF'}}>Contact</p>
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