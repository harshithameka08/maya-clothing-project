import React from 'react';

const CraftsmanshipIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 14L14 10L18 14L22 10L26 14L30 10L34 14L38 10V38L34 34L30 38L26 34L22 38L18 34L14 38L10 34V14Z" fill="#1a2433" />
        <path d="M16 18L20 14L24 18L28 14L32 18L36 14L40 18V46L36 42L32 46L28 42L24 46L20 42L16 46V18Z" fill="#1a2433" fillOpacity="0.4" />
    </svg>
);

const MoleculeIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="18" r="4" fill="#1a2433" />
        <circle cx="28" cy="14" r="5" fill="#1a2433" />
        <circle cx="34" cy="28" r="4" fill="#1a2433" />
        <circle cx="20" cy="34" r="5" fill="#1a2433" />
        <path d="M14 18L28 14M28 14L34 28M34 28L20 34M20 34L14 18" stroke="#1a2433" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" fill="#1a2433" />
    </svg>
);

const SpoolIcon = () => (
    <svg width="48" height="48" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8H32M12 36H32" stroke="#1a2433" strokeWidth="4" strokeLinecap="round"/>
        <rect x="15" y="11" width="14" height="22" fill="#1a2433"/>
        <path d="M15 15H29M15 19H29M15 23H29M15 27H29M15 31H29" stroke="#EBE8E2" strokeWidth="1.5"/>
        <path d="M11 22C11 22 7 22 7 18C7 14 11 14 11 14" stroke="#1a2433" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const SustainabilityIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12C24 12 20 8 16 8C12 8 8 12 8 16C8 22 16 26 24 26M24 12C24 12 28 8 32 8C36 8 40 12 40 16C40 22 32 26 24 26M24 40C24 40 28 44 32 44C36 44 40 40 40 36C40 30 32 26 24 26" stroke="#1a2433" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 12L24 26" stroke="#1a2433" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const FeatureItem = ({ Icon, title, description, index }) => (
    <div className={`feature-item-box animate-up opacity-0 delay-${index + 1}`}>
        <div className="feature-icon-container">
            <Icon />
        </div>
        <h3 className="feature-item-heading">{title}</h3>
        <p className="feature-item-text">{description}</p>
    </div>
);

const Features = () => {
    const featuresList = [
        {
            Icon: CraftsmanshipIcon,
            title: "UNPARALLELED CRAFTSMANSHIP",
            description: "Each piece is meticulously crafted to perfection, a testament to our unwavering commitment to quality."
        },
        {
            Icon: MoleculeIcon,
            title: "DISTINCTIVE DESIGNS",
            description: "Our fashion is more than clothing; it's an expression of your individuality."
        },
        {
            Icon: SpoolIcon,
            title: "AUTHENTIC LUXURY",
            description: "Immerse yourself in a world of luxury that's accessible to all."
        },
        {
            Icon: SustainabilityIcon,
            title: "SUSTAINABLE ELEGANCE",
            description: "We take pride in our eco-friendly practices, ensuring a better future for all."
        }
    ];

    return (
        <section className="features-main-section">
            <div className="features-inner-container">
                <h2 className="features-section-title animate-fade opacity-0">WHY CHOOSE MAYA?</h2>
                <div className="features-items-grid">
                    {featuresList.map((feature, idx) => (
                        <FeatureItem key={idx} index={idx} {...feature} />
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .features-main-section {
                    padding: 3rem 2rem 4rem 2rem;
                    background-color: #f2efe1;
                    overflow: hidden;
                }
                .features-inner-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    text-align: center;
                }
                .features-section-title {
                    color: #2FB52F;
                    font-family: 'Outfit', sans-serif;
                    font-weight: 500;
                    font-size: 1.8rem;
                    letter-spacing: 0.08em;
                    margin-bottom: 3.5rem;
                    text-transform: uppercase;
                }
                .features-items-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.2rem;
                }
                .feature-item-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transition: transform 0.4s ease;
                }
                .feature-item-box:hover {
                    transform: translateY(-5px);
                }
                .feature-icon-container {
                    width: 100%;
                    max-width: 240px;
                    height: 140px;
                    background-color: #EBE8E2;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: relative;
                    overflow: hidden;
                }
                .feature-icon-container::after {
                    content: '';
                    position: absolute;
                    top: 0; left: -100%;
                    width: 100%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: 0.5s;
                }
                .feature-item-box:hover .feature-icon-container::after {
                    left: 100%;
                }
                .feature-item-box:hover .feature-icon-container {
                    background-color: #e8e5de;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                }
                .feature-icon-container svg {
                    width: 50px;
                    height: 50px;
                    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .feature-item-box:hover .feature-icon-container svg {
                    transform: scale(1.1) rotate(5deg);
                }
                .feature-item-heading {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 500;
                    font-size: 0.95rem;
                    color: #1a2433;
                    letter-spacing: 0.05em;
                    margin-bottom: 0.8rem;
                    line-height: 1.3;
                    max-width: 200px;
                    text-transform: uppercase;
                }
                .feature-item-text {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 300;
                    font-size: 0.85rem;
                    color: #555;
                    line-height: 1.5;
                    max-width: 240px;
                    margin: 0 auto;
                }
                @media (max-width: 1100px) {
                    .features-items-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 3rem 1.5rem;
                    }
                    .feature-icon-container {
                        height: 130px;
                    }
                }
                @media (max-width: 640px) {
                    .features-items-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                    .features-section-title {
                        font-size: 1.5rem;
                        margin-bottom: 2.5rem;
                    }
                    .features-main-section {
                        padding: 3rem 1rem;
                    }
                }
            `}} />
        </section>
    );
};

export default Features;
