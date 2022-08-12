import React, { useState, useEffect, useRef } from 'react'
import './Contact.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import Aos from 'aos';
import "aos/dist/aos.css"
import emailjs from '@emailjs/browser';

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loader, setLoader] = useState(false)
    const form = useRef();

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    const handleSubmit = (e) => {
        console.log("Submitting...")
        e.preventDefault();
        setLoader(true);
        emailjs.sendForm('service_u77wwqy', 'template_0iowr16', form.current, 'SY_LCGri0AM_EYC9x')
            .then((result) => {
                console.log(result.text);
                setLoader(false)
            }, (error) => {
                console.log(error.text);
                setLoader(false)
            });
        //Reset form
        setName('')
        setEmail('')
        setMessage('')
    };

    return (
        <div className="contact" id="section__contact">
            <div className="contact__box">
                <h1>LET'S TALK!</h1>
                <form ref={form} className="contact__form" data-aos="fade" onSubmit={handleSubmit}>
                    <label>Your Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name="user_name" placeholder="Name" />

                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name="user_email" placeholder="email" />

                    <label>Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" placeholder="message" />
                    <button style={{ background: loader ? "#ccc" : "#FC4445" }} type="submit"> SUBMIT </button>
                </form>
                <div class="contact__bottom">
                    <div class="contact__invisible">

                    </div>
                    <p> alternatively, email me at paulin.alcoser@nyu.edu</p>
                    <div className="contact__icons">
                        <a href="https://www.linkedin.com/in/paulin-alcoser-chong-824597197/" target="_blank">
                            <IconButton ><LinkedInIcon className="contact__icon" id="linkedIn" fontSize="Large" /></IconButton>
                        </a>
                        <a href="https://github.com/pac469?tab=overview&from=2021-03-01&to=2021-03-31" target="_blank">
                            <IconButton ><GitHubIcon className="contact__icon" id="gitHub" fontSize="Large" /></IconButton>
                        </a>

                        {/* <IconButton ><FacebookIcon className="contact__icon" id="faceBook" fontSize="Large"/></IconButton> */}
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Contact
