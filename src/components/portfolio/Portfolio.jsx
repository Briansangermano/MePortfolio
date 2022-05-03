import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/qira.png'
import IMG2 from '../../assets/simpleQ.png'
import IMG3 from '../../assets/inmediata.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'QIRA',
        description: 'Company that specializes in bringing innovative solutions to the men and women who dedicate their lives to the countryside in this challenging 21st century. Involved in the creation of an e-commerce platform which allows the company to sell countryside-oriented products.',
        link: 'https://www.qiraglobal.com',
    },
    {
        id: 2,
        image: IMG2,
        title: 'SimpleQ',
        description: 'Mobile App to organize small and casual events with your friends or family. Developed with React Native for Android and iOS devices. Working with scrum in a team composed by 6 members.',
        link: 'https://play.google.com/store/apps/details?id=app.simpleq&hl=es_AR&gl=US',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Inmediata',
        description: 'Web and mobile application where it allows large companies to carry out surveys for the government, surveys for the market and analysis to make decisions or opinions for them.',
        link: 'https://inmediata.com.ar/',
    },
]

const Portfolio = () => {
    return  (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    data.map(({id, image, title, link, description}) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <h5>{description}</h5>
                                <div className="portfolio_item-cta">
                                    <a href={link} className="btn btn-primary" target="_blank">Link</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio