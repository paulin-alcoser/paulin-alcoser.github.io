import React, { useState, useEffect } from 'react'
import './Contact.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';
import Aos from 'aos';
import "aos/dist/aos.css"
import { db } from './firebase'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        //Send to Firebase database
        db.collection("contacts").add({
            name: name,
            email: email,
            message: message
        })
            .then(() => {
                alert("Your Message has been submitted")
                setLoader(false)
            })
            .catch((error) => {
                alert(error.message);
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
                <form className="contact__form" data-aos="fade">
                    <label>Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />

                    <label>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

                    <label>Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
                    <button onClick={handleSubmit} style={{ background: loader ? "#ccc" : "#FC4445" }} type="submit"> SUBMIT </button>
                </form>
                <div class="contact__bottom">
                    <div class="contact__invisible">

                    </div>
                    <p> alternatively, email me at pac469@nyu.edu</p>
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
