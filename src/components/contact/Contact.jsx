import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x5o2ogb', 'template_z4jknju', form.current, 'HTSs12mb3pCGjZxNh')

        e.target.reset();
      };

    return  (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option-icon" />
                        <h4>Email</h4>
                        <h5>briansangermano@gmail.com</h5>
                        <a href="mailto:briansangermano@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine className="contact_option-icon" />
                        <h4>Messenger</h4>
                        <h5>briansangermano</h5>
                        <a href="https://m.me/briansangermano">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className="contact_option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>341-6849393</h5>
                        <a href="https://api.whatsapp.com/send?phone=+543413849393">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Emial" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact