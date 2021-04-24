import React, { useEffect } from 'react'
import './Skills.css'
import Aos from 'aos';
import "aos/dist/aos.css"
import resume from './PaulinAlcoserResume.pdf'
import { RestaurantMenuSharp } from '@material-ui/icons';

function Skills() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <div className="skills" id="section__skills">
            <div className="skills__row" >
                <h1>For Web Development, I use my profficiency in: </h1>
                <div className="skills__logos" data-aos="slide-right">
                    <div className="skills__leftColumn">
                        <div className="skills__logo">
                            <h1>HTML</h1>
                        </div>
                        <div className="skills__logo">
                            <h1>CSS</h1>
                        </div>
                        <div className="skills__logo">
                            <h1>JS</h1>
                        </div>
                        <div className="skills__logo">
                            <h1>React</h1>
                        </div>
                    </div>
                    <div className="skills__rightColumn">
                        <div className="skills__logo">
                            <h1>MongoDB</h1>
                        </div>
                        <div className="skills__logo">
                            <h1>Express</h1>
                        </div>
                        <div className="skills__logo">
                            <h1>Firebase</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills__row">
                <h1>But I am also skillful in: </h1>
                <div className="skills__logos" data-aos="slide-right">
                    <div className="skills__leftColumn">
                        <div className="skills__logo">
                            <h1>Java</h1>
                        </div>
                        <div className="skills__logo">
                            <h1>Python</h1>
                        </div>
                    </div>
                    <div className="skills__rightColumn">
                        <div className="skills__logo">
                            <h1>C++</h1>
                        </div>
                        <div className="skills__logo">
                            <h1>Puppeteer</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills__button">
                <a href={resume} download="PaulinAlcoserResume.pdf">
                    <button>Download Resume</button>
                </a>
            </div>
        </div>
    );
}

export default Skills
