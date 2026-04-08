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
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="8" width="24" height="4" rx="2" fill="#1a2433" />
        <rect x="12" y="36" width="24" height="4" rx="2" fill="#1a2433" />
        <rect x="16" y="12" width="16" height="24" fill="#1a2433" />
        <path d="M16 16H32M16 20H32M16 24H32M16 28H32M16 32H32" stroke="#eeede7" strokeWidth="1" />
        <path d="M12 24C12 24 8 24 8 20" stroke="#1a2433" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const SustainabilityIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 10C24 10 20 6 16 6C12 6 8 10 8 14C8 20 16 24 24 24M24 10C24 10 28 6 32 6C36 6 40 10 40 14C40 20 32 24 24 24M24 38C24 38 28 42 32 42C36 42 40 38 40 34C40 28 32 24 24 24" stroke="#1a2433" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 10L24 24M16 8L20 12M32 8L28 12M32 40L28 36" stroke="#1a2433" strokeWidth="2" strokeLinecap="round" />
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
                    padding: 2rem 2rem 2rem 2rem;
                    background-color: #f2ebe1;
                }
                .features-inner-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    text-align: center;
                }
                .features-section-title {
                    color: #2fb52f;
                    font-family: 'Outfit', sans-serif;
                    font-weight: 500;
                    font-size: 1.8rem;
                    letter-spacing: 0.08em;
                    margin-bottom: 4rem;
                    text-transform: uppercase;
                }
                .features-items-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                }
                .feature-item-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .feature-icon-container {
                    width: 140px;
                    height: 120px;
                    background-color: #eeede7;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 2rem;
                    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    animation: float 4s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .feature-item-box:nth-child(even) .feature-icon-container {
                    animation-delay: 1s;
                }
                .feature-icon-container:hover {
                    transform: scale(1.1) rotate(3deg);
                    background-color: #1a2433;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
                }
                .feature-icon-container:hover svg path,
                .feature-icon-container:hover svg rect,
                .feature-icon-container:hover svg circle {
                    fill: #fff;
                    stroke: #fff;
                }
                .feature-item-heading {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 600;
                    font-size: 1rem;
                    color: #1a2433;
                    letter-spacing: 0.05em;
                    margin-bottom: 1.2rem;
                    line-height: 1.4;
                    max-width: 180px;
                }
                .feature-item-text {
                    font-family: 'Outfit', sans-serif;
                    font-weight: 300;
                    font-size: 0.85rem;
                    color: #555;
                    line-height: 1.6;
                    max-width: 250px;
                }
                @media (max-width: 992px) {
                    .features-items-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 3rem 2rem;
                    }
                }
                @media (max-width: 640px) {
                    .features-items-grid {
                        grid-template-columns: 1fr;
                    }
                    .features-section-title {
                        font-size: 1.4rem;
                    }
                }
            `}} />
        </section>
    );
};

export default Features;
