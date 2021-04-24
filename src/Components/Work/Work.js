import React, { useEffect, useState } from 'react'
import './Work.css'
import { IconButton } from '@material-ui/core';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Aos from 'aos';
import "aos/dist/aos.css"
import photoTinder from './tinder-clone.png'
import photoKokoro from './kokoro.png'
import movieTinder from './tinder-clone.mov'
import movieKokoro from './kokoro.mov'

function Work() {
    const [video, setVideo] = useState(false)
    const [tinderVideo, setTinderVideo] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    const activateVideo = () => {
        setVideo(!video)
    }

    const activateTinderVideo = () => {
        setTinderVideo(!tinderVideo)
    }


    return (
        <div className="work" id="section__work">
            <div className="work__container">
                <div className="work__projectContainer">
                    <div className="work__project">
                        {video ?
                            (<video src={movieKokoro} controls autoPlay/>) :
                            (<img src={photoKokoro} />)
                        }
                        <div className="work__projectInfo" data-aos="fade-right">
                            <div className="work__projectText" >
                                <h1>Kokoro Chats</h1>
                                <p>Kokoro Chats is a web app that allow users to have chats with each other.
                                it contains the following features: User Registration and Authentication,
                                Real-time databases, Chat Rooms, Time Zone Handler. Try it and send me a Message!
                                    </p>
                            </div>
                            <div className="work__projectBottom">
                                <li>
                                    <ul>HTML</ul>
                                    <ul>CSS</ul>
                                    <ul>ReactJS</ul>
                                    <ul>Express</ul>
                                    <ul>MongoDB</ul>
                                </li>
                                <div className="work__projectButtons">

                                    <IconButton onClick={activateVideo}><VideoLibraryIcon className="work__playButton" fontSize="large" /></IconButton>
                                    <a href="https://github.com/pac469/MERN-Kokoro-Chats" target="_blank">
                                        <IconButton><GitHubIcon className="work__codeButton" fontSize="large" /></IconButton>
                                    </a>
                                    <a href="https://kokoro-chats.herokuapp.com/" target="_blank">
                                        <IconButton><VisibilityIcon className="work__demoButton" fontSize="large" /></IconButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work__projectContainer" id="work__projectContainerCenter">
                    <div className="work__project" id="work__projectCenter">
                        <div className="work__projectInfo" data-aos="fade-left">
                            <div className="work__projectText">
                                <h1>Tinder-Clone </h1>
                                <p>Tinder-Clone is web app the recreates the front-end of Tinder.</p>
                            </div>
                            <div className="work__projectBottom">
                                <li>
                                    <ul>HTML</ul>
                                    <ul>CSS</ul>
                                    <ul>ReactJS</ul>
                                    <ul>Firebase</ul>
                                </li>
                                <div className="work__projectButtons">
                                    <IconButton onClick={activateTinderVideo}><VideoLibraryIcon className="work__playButton" fontSize="large" /></IconButton>
                                    <a href="https://github.com/pac469/tinder-clone" target="_blank">
                                        <IconButton><GitHubIcon className="work__codeButton" fontSize="large" /></IconButton>
                                    </a>
                                    <a href="https://tinder-clone-890c3.web.app" target="_blank">
                                        <IconButton><VisibilityIcon className="work__demoButton" fontSize="large" /></IconButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {tinderVideo ?
                            (<video src={movieTinder} controls autoPlay/>) :
                            (<img src={photoTinder} />)
                        }

                    </div>
                </div>
                {/* <div className="work__projectContainer">
                    <div className="work__project">
                        <img src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2016/05/whatsapp-desktop-windows.jpg"/>
                        <div className="work__projectInfo" data-aos="fade-right">
                            <div className="work__projectText">
                                    <h1>Chat With Me</h1>
                                    <p>Chat with Me is a web app that permit users to have text conversations with each other. Try it and send me a message! </p>
                                </div>
                                <div className="work__projectBottom">
                                    <li>
                                        <ul>HTML</ul>
                                        <ul>CSS</ul>
                                        <ul>ReactJS</ul>
                                        <ul>Express</ul>
                                        <ul>MongoDB</ul>
                                    </li>
                                    <div className="work__projectButtons">
                                        <IconButton ><VideoLibraryIcon className="work__playButton" fontSize="large"/></IconButton>
                                        <IconButton><GitHubIcon className="work__codeButton" fontSize="large"/></IconButton>
                                        <IconButton><VisibilityIcon className="work__demoButton" fontSize="large"/></IconButton> 
                                    </div>
                                </div>
                        </div>
                    </div>
             </div> */}
            </div>

        </div>
    )
}

export default Work
