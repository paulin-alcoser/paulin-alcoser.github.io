import React,{useEffect} from 'react'
import './About.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import { requirePropFactory } from '@material-ui/core';
import photo from './PaulinProfile.jpg';

function About() {
    useEffect(()=>{
        Aos.init({duration:4000});
    },[])
    return (
        <div className="about" id="section__about">
            <div className="about__container">
                <h1>HI! I AM PAULIN <span>ALCOSER</span> AND I BUILD <br/> INTUITIVE RESPONSIVE <span>WEBSITES.</span></h1>
                <div className="about__content" data-aos="fade-up">
                    <img src={photo} alt="paulin"/>
                    <div className="about__text">
                        <p>
                        I am a Web Developer and a CS undergrad student, presently on my senior year at New York University Abu Dhabi. Although I am majoring in Computer Science, 
                        I gathered my first experiences building websites by taking classes in the Interactive Media Arts program of my university. 
                        This multidisciplinay background gave me a passion for the coding and storytelling components of web development. I enjoy building servers 
                        and interactive front-ends, as much as I enjoy designing websites as mediums for storytelling. I just finished a software engineer internship at the start up Dapi,
                        where I used puppeteer to reverse engineer the front-end of different websites to create bots.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About
