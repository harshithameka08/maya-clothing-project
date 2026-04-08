import { Instagram, Facebook, Send, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer = ({ onNavigate }) => {
    return (
        <footer className="footer-section-main">
            <div className="container footer-grid-layout">
                <div className="footer-links-column">
                    <ul className="footer-link-list">
                        <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('shop'); }}>Shop</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}>Blog</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact Us</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
                </div>
                
                <div className="footer-links-column">
                    <ul className="footer-link-list">
                        <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('faqs'); }}>FAQ'S</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Shipping & Returns</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-brand-column">
                    <div className="footer-logo-box">
                        <h2 className="footer-logo-text">maya</h2>
                        <span className="footer-logo-tagline">BY CHINMAYA POLYARAPU</span>
                    </div>
                    <div className="footer-social-box">
                        <a href="#"><Send size={20} /></a>
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><MessageCircle size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-contact-column">
                    <h3 className="footer-contact-heading">QUICK CONTACT</h3>
                    <div className="contact-item">
                        <span>Phone number</span>
                        <Phone size={18} />
                    </div>
                    <div className="contact-item">
                        <span>Email ID</span>
                        <Mail size={18} />
                    </div>
                    <div className="contact-item">
                        <span>Address</span>
                        <MapPin size={18} />
                    </div>
                </div>
            </div>
            
            <div className="sub-footer-social">
                <div className="sub-footer-inner">
                    <Send size={18} />
                    <Facebook size={18} />
                    <MessageCircle size={18} />
                    <Instagram size={18} />
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .sub-footer-social {
                    padding-top: 3rem;
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }
                .sub-footer-inner {
                    display: flex;
                    gap: 1.5rem;
                    color: #1a2433;
                    opacity: 0.8;
                }
                .footer-section-main {
                    padding: 2rem 2rem 4rem;
                    background-color: #f2ebe1;
                }
                .footer-grid-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1.5fr 1.5fr;
                    gap: 2rem;
                    align-items: flex-start;
                }
                .footer-link-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .footer-link-list li {
                    margin-bottom: 1.2rem;
                }
                .footer-link-list a {
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.9rem;
                    color: #1a2433;
                    text-decoration: none;
                    font-weight: 400;
                    opacity: 0.8;
                    transition: opacity 0.3s;
                }
                .footer-link-list a:hover { opacity: 1; }
                
                .footer-brand-column {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                }
                .footer-logo-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .footer-logo-text {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 3.5rem;
                    color: #1a2433;
                    margin: 0;
                    line-height: 1;
                }
                .footer-logo-tagline {
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.5rem;
                    color: #1a2433;
                    letter-spacing: 0.3em;
                    margin-top: -5px;
                }
                .footer-social-box {
                    display: flex;
                    gap: 1.5rem;
                }
                .footer-social-box a {
                    color: #1a2433;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                }
                .footer-social-box a:hover {
                    transform: scale(1.1);
                }

                .footer-contact-column {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 1.5rem;
                }
                .footer-contact-heading {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #1a2433;
                    margin-bottom: 1.5rem;
                    letter-spacing: 0.05em;
                }
                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.9rem;
                    color: #1a2433;
                    opacity: 0.8;
                }
                
                @media (max-width: 992px) {
                    .footer-grid-layout { grid-template-columns: repeat(2, 1fr); gap: 4rem; }
                    .footer-contact-column { align-items: flex-start; }
                }
                @media (max-width: 640px) {
                    .footer-grid-layout { grid-template-columns: 1fr; }
                    .footer-brand-column { order: -1; }
                }
            `}} />
        </footer>
    );
};

export default Footer;
