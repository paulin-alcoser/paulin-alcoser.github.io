import React, {useState} from 'react'
import './Header.css'
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
    const [active, setActive] = useState(false) 

    const activateToggle = () => {
        setActive(!active)
    }
    console.log('active: ', active)
    return (
        <div className="header">
            <div className="header__left">
                <h1>{'Paulin '} <span>Alcoser</span></h1>
            </div>
            <div className="header__toggle" onClick={activateToggle}>
                <span className="header__bar"></span>
                <span className="header__bar"></span>
                <span className="header__bar"></span>
            </div>
            <div className={"header__right"+(active?' active':'')}>
                <div className="header__button">
                        <button id="button"><Link activeClass="active" to="section__home" 
                    spy={true} smooth={true} offset={-90} duration={500}>Home </Link></button>
                </div>
                <div className="header__button">
                    <button id="button"><Link activeClass="active" to="section__about" 
                        spy={true} smooth={true} offset={-90} duration={500}>About </Link></button>
                </div>
                <div className="header__button">
                    <button id="button"><Link activeClass="active" to="section__skills" 
                        spy={true} smooth={true} offset={-90} duration={500}>Skills </Link></button>
                </div>
                <div className="header__button">
                    <button id="button"><Link activeClass="active" to="section__work" 
                        spy={true} smooth={true} offset={-90} duration={500}>Projects </Link></button>
                </div>
                <div className="header__button">
                    <button id="button"><Link activeClass="active" to="section__contact" 
                        spy={true} smooth={true} offset={-40} duration={500}>Contact </Link></button>
                </div>
            </div>
        </div>
    )
}

export default Header
