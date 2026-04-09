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
                        <div className="text-logo-footer">
                            <span className="logo-main-footer">CLOTHING</span>
                            <span className="logo-sub-footer">MADE WITH LOVE</span>
                        </div>
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
            


            <style dangerouslySetInnerHTML={{ __html: `
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
                .text-logo-footer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    line-height: 1;
                }
                .logo-main-footer {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 3.5rem;
                    font-weight: 300;
                    letter-spacing: 0.15em;
                    color: #1a2433;
                }
                .logo-sub-footer {
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.6rem;
                    letter-spacing: 0.4em;
                    color: #1a2433;
                    margin-top: 0.2rem;
                    opacity: 0.8;
                    font-weight: 500;
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
