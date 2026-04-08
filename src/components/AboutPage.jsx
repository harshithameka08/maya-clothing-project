import React from 'react';
import about1 from '../assets/about_1.png';
import about2 from '../assets/about_2.png';
import about3 from '../assets/about_3.png';
import about4 from '../assets/about_4.png';
import about5 from '../assets/about_5.png';
import about6 from '../assets/about_6.png';
import { ArrowLeft } from 'lucide-react';

const AboutPage = ({ onNavigate }) => {
    const sections = [
        {
            title: "OUR STORY",
            description: "At Maya, our journey is rooted in a profound passion for quality, a relentless drive for innovation, and an unwavering commitment to social responsibility.",
            highlight: "Our story begins with a simple belief: fashion should not only adorn, but it should empower.",
            image: about1,
            reverse: false
        },
        {
            title: "THE SPARK OF INSPIRATION",
            description: "The spark that ignited our venture was a blend of two elements: the rich tapestry of heirloom textiles and the desire to make a difference.",
            description2: "As someone who appreciates the intricate artistry of handwoven fabrics, I found myself drawn to the world of hand looms. These age-old techniques, passed down through generations, represented not just a craft, but a way of life.",
            image: about2,
            reverse: true
        },
        {
            title: "A MISSION WITH HEART",
            description: "Innovation is our guiding star. We believe that traditions can evolve, and we infuse contemporary elements into our designs while respecting the heritage of handloom.",
            description2: "This fusion brings forth collections that are both timeless and contemporary.",
            image: about3,
            reverse: false
        },
        {
            title: "QUALITY AS OUR CORNERSTONE",
            description: "Every thread, every design, and every stitch speaks volumes about my commitment to quality.",
            description2: "We understand that fashion should be a reflection of your values, and that's why I go to great lengths to ensure my products are made to last, not just in terms of durability but also in style and relevance.",
            image: about4,
            reverse: true
        },
        {
            title: "INNOVATION WITH TRADITION",
            description: "Innovation is our guiding star. We believe that traditions can evolve, and we infuse contemporary elements into our designs while respecting the heritage of handloom.",
            description2: "This fusion brings forth collections that are both timeless and contemporary.",
            image: about5,
            reverse: false
        },
        {
            title: "A PROMISE TO SOCIETY",
            description: "Our commitment to social responsibility is embedded in our DNA. We work closely with artisan communities, providing fair wages, supporting education, and promoting sustainable practices.",
            description2: "We believe that by investing in people and the planet, we can create a brighter future for all.",
            image: about6,
            reverse: true
        }
    ];

    return (
        <div className="about-page-wrapper">
            <div className="about-page-container">
                <div className="about-back-box">
                    <div className="back-btn-global" onClick={() => onNavigate('back')}>
                        <ArrowLeft size={18} />
                    </div>
                </div>
                {sections.map((section, index) => (
                    <div key={index} className={`about-section-block animate-${section.reverse ? 'left' : 'right'} opacity-0 delay-${(index % 3) + 1}`}>
                        <div className={`about-flex-layout ${section.reverse ? 'flex-reverse' : ''}`}>
                            <div className="about-visual-column">
                                <div className="about-img-frame">
                                    <img src={section.image} alt={section.title} className="about-section-img" />
                                </div>
                            </div>
                            <div className="about-content-column">
                                <div className="about-text-box">
                                    <h2 className="about-block-title">{section.title}</h2>
                                    <div className="about-block-paragraphs">
                                        <p className="about-para-text">{section.description}</p>
                                        {section.description2 && <p className="about-para-text">{section.description2}</p>}
                                        {section.highlight && (
                                            <p className="about-para-text highlight-para">
                                                <strong>{section.highlight.split(':')[0]}:</strong>
                                                {section.highlight.split(':')[1]}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {index < sections.length - 1 && <div className="about-section-divider"></div>}
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .about-page-wrapper {
                    background-color: #f2ebe1;
                    padding: 2rem 0;
                    min-height: 100vh;
                }
                .about-page-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 4rem;
                    position: relative;
                }
                .about-back-box {
                    position: absolute;
                    left: 2rem;
                    top: 1rem;
                    z-index: 10;
                }
                .back-btn-global {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    border: 1px solid #1a2433;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: #1a2433;
                    transition: all 0.3s ease;
                }
                .back-btn-global:hover {
                    background: #1a2433;
                    color: white;
                }
                .about-section-block {
                    margin-bottom: 0;
                }
                .about-flex-layout {
                    display: flex;
                    align-items: center;
                    gap: 6rem;
                    padding: 5rem 0;
                }
                .flex-reverse {
                    flex-direction: row-reverse;
                }
                .about-visual-column {
                    flex: 1.1;
                    display: flex;
                    justify-content: center;
                }
                .about-content-column {
                    flex: 1;
                }
                .about-img-frame {
                    width: 100%;
                    max-width: 600px;
                    border-radius: 12px;
                    overflow: hidden;
                }
                .about-section-img {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.5s ease;
                }
                .about-text-box {
                    max-width: 550px;
                }
                .about-block-title {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 600;
                    letter-spacing: 0.15em;
                    color: #1a2433;
                    margin-bottom: 1.5rem;
                    text-transform: uppercase;
                }
                .about-block-paragraphs {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                }
                .about-para-text {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1rem;
                    line-height: 1.6;
                    color: #4a4a4a;
                    font-weight: 300;
                    letter-spacing: 0.01em;
                }
                .highlight-para {
                    color: #1a2433;
                    font-weight: 400;
                }
                .highlight-para strong {
                    font-weight: 700;
                }
                .about-section-divider {
                    height: 1px;
                    background-color: #d1cbc0;
                    width: 100%;
                }
                @media (max-width: 1200px) {
                    .about-flex-layout {
                        gap: 3rem;
                    }
                    .about-page-container {
                        padding: 0 2rem;
                    }
                }
                @media (max-width: 768px) {
                    .about-flex-layout {
                        flex-direction: column;
                        text-align: center;
                        padding: 3rem 0;
                        gap: 2rem;
                    }
                    .flex-reverse {
                        flex-direction: column;
                    }
                    .about-text-box {
                        max-width: 100%;
                    }
                    .about-visual-column {
                        width: 100%;
                    }
                    .about-section-img {
                        height: 300px;
                    }
                    .about-block-title {
                        font-size: 1.3rem;
                    }
                }
            `}} />
        </div>
    );
};


export default AboutPage;
