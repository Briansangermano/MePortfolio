import React from "react";
import './about.css'
import ME from '../../assets/about-me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return  (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>5+ Years Working</small>
                        </article>

                        <article className="about_card">
                            <FiUsers className="about_icon"/>
                            <h5>Clients</h5>
                            <small>20+ Worlwide</small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className="about_icon"/>
                            <h5>Projects</h5>
                            <small>8+ Complete Projects</small>
                        </article>
                    </div>

                    <p>
                        I am a system engineer with 5+ years of experience. I have been focused on mastering mobile development while being involved in different projects by using the state of the art JavaScript frameworks such as React Native and Redux.
                    </p>

                    <p>
                    I am knowledgeable in user interface. I am capable of building dynamic, high performing, and responsive UI for web and mobile applications.
                    </p>

                    <p>
                    I am equipped with a diverse and promising skill-set. I am also able to effectively self-manage during independent projects, as well as collaborate in a team setting.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About