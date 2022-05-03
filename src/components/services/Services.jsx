import React from "react";
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return  (
        <section id="services">
            <h5>Where I work</h5>
            <h2>Company</h2>

            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>Universidad Abierta Interamericana</h3>
                        <h5 className="subtitle-label">As Frontend Developer</h5>
                    </div>
                    <div className="subtitle">
                        <h5>Main responsibilities:</h5>
                    </div>
                    <ul className="service_list">
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Building responsive features using HTML, CSS, JavaScript based on mockups.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Building stable and maintainable codebases using React.js.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Compile and analyze data, processes, and codes to identify problems and areas for improvement.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Testing to identify bugs and technical issues.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Maintaining and updating the university website.</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service_head">
                        <h3>Dodwing</h3>
                        <h5 className="subtitle-label">As Frontend Developer</h5>
                    </div>
                    <div className="subtitle">
                        <h5>Main responsibilities:</h5>
                    </div>
                    <ul className="service_list">
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Writed application interface codes using JavaScript following React.js workflows.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Participated in my first mobile project, implementing mobile-first approach to existing websites using responsive design.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>First approach to features and components with Redux.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Identified web-based user interactions.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Troubleshooted interface software and debugged application codes.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Developed and implemented front-end architecture to support user interface concepts.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Built reusable code for future use.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Daily meetings with the client and the rest of the team, showing retrospectives of the work done.</p>
                        </li>
                    </ul>
                </article>
                
                <article className="service">
                    <div className="service_head">
                        <h3>Radium Rocket</h3>
                        <h5 className="subtitle-label">As Fullstack Developer</h5>
                    </div>
                    <div className="subtitle">
                        <h5>Main responsibilities:</h5>
                    </div>
                    <ul className="service_list">
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Development of mobile applications for Android and iOS with React Native.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Working along with the UI/UX designer to build pixel-perfect UIs across both mobile platforms.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Building and maintaining React Native applications with clean code, following industry best practices.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Integrating 3rd party libraries into different projects and documentation on newly developed features.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Collaborating with team members to establish objectives and deadlines through SCRUM methodologies, using JIRA.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Provide ongoing feedback to upper management on the current status of the projects.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Review pull requests made by projects teammates.</p>
                        </li>
                        <li>
                            <div><BiCheck className="service_list-icon" /></div>
                            <p>Creating Unit Tests to ensure developed apps quality.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services