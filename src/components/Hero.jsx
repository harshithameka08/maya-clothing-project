import React from 'react';
import heroImage from '../assets/home.image.png';

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero-section">
      <div className="hero-layout-container">
        <div className="vertical-text side-left animate-fade opacity-0 delay-3">EXPERIENCE THE DIFFERENCE</div>
        
        <div className="hero-main-banner animate-scale opacity-0">
          <img src={heroImage} alt="Artistry in Every Thread" className="banner-visual" />
          <div className="hero-text-overlay">
            <h1 className="hero-heading animate-up opacity-0 delay-1">
              ARTISTRY IN<br />EVERY THREAD
            </h1>
            <button 
              className="shop-cta-btn animate-up opacity-0 delay-2"
              onClick={() => onNavigate('shop')}
            >
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="vertical-text side-right animate-fade opacity-0 delay-3">EXPERIENCE THE DIFFERENCE</div>
      </div>


      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          background-color: #f2ebe1;
          padding: 0 0 4rem;
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .hero-layout-container {
          width: 100%;
          max-width: 1400px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          position: relative;
        }
        .hero-main-banner {
          flex: 1;
          position: relative;
          height: 550px;
          border-radius: 30px;
          overflow: hidden;
          margin: 0 1rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .banner-visual {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-text-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 0 4rem;
          text-align: left;
          background: transparent;
        }
        .hero-heading {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 4.5rem;
          color: white;
          line-height: 1.05;
          text-shadow: 0 10px 30px rgba(0,0,0,0.4);
          margin-bottom: 2.5rem;
          letter-spacing: -0.01em;
        }
        .shop-cta-btn {
          background: #fdfaf3;
          color: #1a1a1a;
          border: none;
          padding: 1.2rem 3.5rem;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .shop-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.2);
        }
        .vertical-text {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          letter-spacing: 0.4em;
          color: #888;
          white-space: nowrap;
          height: 20px;
          display: flex;
          align-items: center;
        }
        .side-left {
          transform: rotate(-90deg) translateX(-50%);
          transform-origin: left center;
          position: absolute;
          left: 3rem;
          top: 50%;
        }
        .side-right {
          transform: rotate(90deg) translateX(50%);
          transform-origin: right center;
          position: absolute;
          right: 3rem;
          top: 50%;
        }
        @media (max-width: 1200px) {
          .hero-heading { font-size: 3.8rem; }
          .hero-main-banner { height: 500px; }
        }
        @media (max-width: 992px) {
          .vertical-text { display: none; }
          .hero-layout-container { padding: 0 1rem; }
          .hero-heading { font-size: 3rem; }
          .hero-main-banner { height: 450px; margin: 0; }
        }
        @media (max-width: 640px) {
          .hero-heading { font-size: 2.2rem; }
          .hero-main-banner { height: 350px; }
          .shop-cta-btn { padding: 1rem 2.5rem; font-size: 0.8rem; }
        }
      `}} />
    </section>
  );
};

export default Hero;
