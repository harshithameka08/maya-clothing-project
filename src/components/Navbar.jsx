import React from 'react';
import { ShoppingBag, Heart, User, Search } from 'lucide-react';
import profileImg from '../assets/c47f3524a171f0188fb010906a352fe0.png';

const Navbar = ({ onNavigate, cartCount, wishlistCount, currentView }) => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <ul className="nav-links">
          <li><a href="#" className={currentView === 'shop' || currentView === 'shop-description' ? 'active-nav' : ''} onClick={(e) => { e.preventDefault(); onNavigate('shop'); }}>Shop</a></li>
          <li><a href="#" className={currentView === 'blog' || currentView === 'blog-detail' ? 'active-nav' : ''} onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}>Blog</a></li>
          <li><a href="#" className={currentView === 'faqs' ? 'active-nav' : ''} onClick={(e) => { e.preventDefault(); onNavigate('faqs'); }}>FAQ'S</a></li>
          <li><a href="#" className={currentView === 'contact' ? 'active-nav' : ''} onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact Us</a></li>
        </ul>
        
        <div className="logo-section" onClick={() => onNavigate('home')} style={{cursor: 'pointer'}}>
          <div className="text-logo">
            <span className="logo-main">CLOTHING</span>
            <span className="logo-sub">MADE WITH LOVE</span>
          </div>
        </div>
        
        <div className="nav-actions">
          <button className="nav-icon-box" onClick={() => onNavigate('wishlist')}><Heart size={18} /></button>
          <button className="nav-icon-box basket-box" onClick={() => onNavigate('cart')}>
            <ShoppingBag size={18} />
            <span className="basket-badge">{cartCount || 0}</span>
          </button>
          <button className="nav-icon profile-wrapper">
             <img src={profileImg} alt="User Profile" />
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          padding: 1.5rem 0;
          background-color: #f2ebe1;
          border: none;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
        .logo-section {
          text-align: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .text-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1;
        }
        .logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem;
          font-weight: 300;
          letter-spacing: 0.15em;
          color: #1a2433;
        }
        .logo-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 0.5rem;
          letter-spacing: 0.4em;
          color: #1a2433;
          margin-top: 0.2rem;
          opacity: 0.8;
          font-weight: 500;
        }
        .nav-links {
          display: flex;
          gap: 2.2rem;
        }
        .nav-links a {
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          color: #1a1a1a;
          font-weight: 400;
          transition: all 0.3s ease;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
        }
        .nav-links a.active-nav {
          font-weight: 700;
          border-bottom-color: #1a1a1a;
        }
        .nav-actions {
          display: flex;
          gap: 1.2rem;
          align-items: center;
        }
        .nav-icon-box {
          background: white;
          border: 1px solid #ccc;
          border-radius: 4px;
          height: 36px;
          width: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .basket-box {
          border-left: 1px solid #ccc;
        }
        .basket-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          font-size: 0.6rem;
          font-weight: bold;
          color: #1a1a1a;
          line-height: 1;
        }
        .profile-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          overflow: hidden;
          background: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 0.5rem;
        }
        .profile-wrapper img {
           width: 100%;
           height: 100%;
           object-fit: cover;
        }
        @media (max-width: 992px) {
          .nav-links { gap: 1rem; }
          .logo-main { font-size: 2.2rem; }
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .logo-section { position: static; transform: none; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
