import React from 'react';
import mainImage from '../assets/fbd17fba0ac365da5cb6e945d52ec98f.png';
import subImage from '../assets/towel.png';

const AboutSection = ({ onNavigate }) => {
  return (
    <section className="about-main-wrapper">
      <div className="about-layout-container">
        <div className="about-visual-grid">
          <div className="visual-frame frame-main">
            <img src={mainImage} alt="Brand Story" className="visual-img" />
          </div>
          <div className="visual-frame frame-sub">
            <img src={subImage} alt="Artisan Details" className="visual-img" />
          </div>
          <div className="about-brand-tag">
            <div className="text-logo-brand">
              <span className="logo-main-brand">clothing</span>
              <span className="logo-sub-brand">MADE WITH LOVE</span>
            </div>
          </div>
        </div>
        
        <div className="about-text-content animate-right opacity-0 delay-2">
          <h2 className="about-section-heading">
            DISCOVER TIMELESS <br /> ELEGANCE & MODERN STYLE
          </h2>
          <p className="about-description-text animate-up opacity-0 delay-3">
            At Clothing, we bring you a world of exquisite fashion 
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
          padding: 6rem 2rem;
          background-color: #f5f1eb;
        }
        .about-layout-container {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 6rem;
        }
        .about-visual-grid {
          position: relative;
          height: 700px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 2rem;
        }
        .visual-frame {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }
        .frame-main {
          width: 520px;
          height: 680px;
          z-index: 1;
          animation: smooth-float 8s ease-in-out infinite;
        }
        .frame-sub {
          position: absolute;
          width: 320px;
          height: 460px;
          left: 320px;
          top: 220px;
          z-index: 3;
          animation: smooth-float 7s ease-in-out infinite reverse;
        }
        @keyframes smooth-float {
            0%, 100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(-25px) rotate(0.5deg); }
        }
        .about-visual-grid:hover .visual-img {
            transform: scale(1.08);
        }
        .about-brand-tag {
          position: absolute;
          top: 15%;
          left: 340px;
          z-index: 10;
          text-align: center;
          animation: pulse-tag 5s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes pulse-tag {
            0%, 100% { transform: scale(1); opacity: 0.95; }
            50% { transform: scale(1.02); opacity: 1; }
        }
        .text-logo-brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 0.85;
          text-align: center;
        }
        .logo-main-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5.8rem;
          font-weight: 300;
          letter-spacing: 0.02em;
          color: #1a2433;
          text-transform: lowercase;
        }
        .logo-sub-brand {
          font-family: 'Outfit', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.5em;
          color: #1a2433;
          margin-top: 0.5rem;
          opacity: 0.8;
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
          font-size: 1rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 3.5rem;
          max-width: 480px;
          font-weight: 300;
          letter-spacing: 0.01em;
        }
        .know-more-btn {
          background-color: #1d2d3c;
          color: #fff;
          border: none;
          padding: 1.25rem 3.8rem;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
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
          .logo-main-brand { font-size: 5rem; }
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
