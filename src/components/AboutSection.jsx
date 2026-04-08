import React from 'react';
import mainImage from '../assets/fbd17fba0ac365da5cb6e945d52ec98f.png';
import subImage from '../assets/6bd89ccdcbda7f2bae7305e4ea02a3c7.png';

const AboutSection = ({ onNavigate }) => {
  return (
    <section className="about-main-wrapper">
      <div className="about-layout-container">
        <div className="about-visual-grid animate-left opacity-0 delay-1">
          <div className="visual-frame frame-main">
            <img src={mainImage} alt="Elegance" className="visual-img" />
          </div>
          <div className="visual-frame frame-sub animate-scale opacity-0 delay-3">
            <img src={subImage} alt="Modern Style" className="visual-img" />
          </div>
          <div className="about-brand-tag animate-up opacity-0 delay-4">
            <h2 className="brand-logotype">maya</h2>
            <p className="brand-subtitle">BY CHINMAYA POLYARAPU</p>
          </div>
        </div>
        
        <div className="about-text-content animate-right opacity-0 delay-2">
          <h2 className="about-section-heading">
            DISCOVER TIMELESS <br /> ELEGANCE & MODERN STYLE
          </h2>
          <p className="about-description-text animate-up opacity-0 delay-3">
            At Maya, we bring you a world of exquisite fashion 
            that's as unique as you are. 
            Our curated collection is a harmonious blend of 
            tradition and innovation, offering you the perfect 
            balance between classic charm and contemporary 
            allure.
          </p>
          <button className="know-more-btn animate-up opacity-0 delay-4" onClick={() => onNavigate('about')}>KNOW MORE</button>
        </div>
      </div>



      
      <style dangerouslySetInnerHTML={{ __html: `
        .about-main-wrapper {
          padding: 2rem 2rem 2rem 2rem;
          background-color: #f2ebe1;
        }
        .about-layout-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 5rem;
        }
        .about-visual-grid {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
        }
        .visual-frame {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        .frame-main {
          width: 380px;
          height: 480px;
          z-index: 1;
          animation: smooth-float 6s ease-in-out infinite;
        }
        .frame-sub {
          position: absolute;
          width: 180px;
          height: 320px;
          right: 15%;
          bottom: 5%;
          z-index: 3;
          border: 4px solid #f2ebe1;
          animation: smooth-float 5s ease-in-out infinite reverse;
        }
        @keyframes smooth-float {
            0%, 100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(-15px) rotate(1deg); }
        }
        .about-visual-grid:hover .frame-main {
            transform: scale(1.02) translateX(-10px);
        }
        .about-visual-grid:hover .frame-sub {
            transform: scale(1.05) translate(10px, -10px);
        }
        .about-visual-grid:hover .visual-img {
            transform: scale(1.1);
        }
        .about-brand-tag {
          position: absolute;
          top: 15%;
          left: 45%;
          z-index: 2;
          text-align: center;
          animation: pulse-tag 4s ease-in-out infinite;
        }
        @keyframes pulse-tag {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
        }
        .brand-logotype {
          font-family: 'Cormorant Garamond', serif;
          font-size: 8rem;
          color: #1a2433;
          line-height: 0.8;
          margin: 0;
          font-weight: 300;
        }
        .brand-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          color: #1a2433;
          margin-top: 5px;
          font-weight: 500;
        }
        .about-text-content {
          padding-left: 2rem;
        }
        .about-section-heading {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 500;
          line-height: 1.2;
          color: #1a2433;
          margin-bottom: 2.5rem;
          letter-spacing: 0.02em;
        }
        .about-description-text {
          font-family: 'Outfit', sans-serif;
          font-size: 1.05rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 3rem;
          max-width: 520px;
          font-weight: 300;
        }
        .know-more-btn {
          background-color: #2c3e50;
          color: #fff;
          border: none;
          padding: 1.2rem 3.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        }
        .know-more-btn::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: 0.5s;
        }
        .know-more-btn:hover::after {
            left: 100%;
        }
        .know-more-btn:hover {
          background-color: #1a2433;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        @media (max-width: 1200px) {
          .about-layout-container { grid-template-columns: 1fr; gap: 4rem; }
          .about-text-content { padding-left: 0; text-align: center; }
          .about-description-text { margin-left: auto; margin-right: auto; }
          .about-visual-grid { justify-content: center; height: 500px; }
          .frame-sub { right: 20%; }
        }
        @media (max-width: 640px) {
          .about-section-heading { font-size: 1.8rem; }
          .brand-logotype { font-size: 5rem; }
          .frame-main { width: 300px; height: 400px; }
          .frame-sub { width: 140px; height: 240px; }
        }
      `}} />
    </section>
  );
};

import homeBanner from '../assets/home_banner.png';

const Gallery = () => {
    return (
        <section className="sustainable-style-banner animate-scale opacity-0">
            <div className="banner-wrapper">
                <img src={homeBanner} alt="Discover Sustainable Style" className="banner-img" />
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
                .sustainable-style-banner { 
                  padding: 4rem 0 2rem 0; 
                  background-color: #f2ebe1; 
                  overflow: hidden;
                }
                .banner-wrapper {
                  width: 100%;
                  max-width: 100%;
                  display: flex;
                  justify-content: center;
                }
                .banner-img {
                  width: 100%;
                  height: auto;
                  display: block;
                  object-fit: contain;
                }
                @media (max-width: 768px) {
                  .sustainable-style-banner { padding: 2rem 0; }
                }
            `}} />
        </section>
    );
};

export default AboutSection;
export { Gallery };
