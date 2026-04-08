import React from 'react';
import contactImage from '../assets/6bd89ccdcbda7f2bae7305e4ea02a3c7.png';
import { ArrowLeft } from 'lucide-react';

const ContactPage = ({ onNavigate }) => {
    return (
        <div className="contact-page-container">
            <div className="contact-inner-content">
                <div className="back-btn-global" onClick={() => onNavigate('back')}>
                    <ArrowLeft size={18} />
                </div>
                <div className="contact-grid">
                    <div className="contact-image-section">
                        <img src={contactImage} alt="Contact Maya" className="contact-main-img" />
                    </div>
                    
                    <div className="contact-form-section">
                        <h1 className="contact-heading">CONTACT US</h1>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group-full">
                                <input type="text" placeholder="Full Name:" className="form-input" />
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group-half">
                                    <input type="text" placeholder="Phone No.:" className="form-input" />
                                </div>
                                <div className="form-group-half">
                                    <input type="email" placeholder="Email:" className="form-input" />
                                </div>
                            </div>
                            
                            <div className="form-group-full">
                                <textarea placeholder="Message:" className="form-textarea" rows="4"></textarea>
                            </div>
                            
                            <button type="submit" className="submit-btn">SEND</button>
                        </form>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .contact-page-container {
                    background-color: #f2ebe1;
                    padding: 4rem 0;
                    min-height: calc(100vh - 80px);
                }
                .contact-inner-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 6rem;
                    align-items: center;
                }
                .contact-image-section {
                    width: 100%;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                    aspect-ratio: 4/5;
                }
                .contact-main-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .contact-form-section {
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                }
                .contact-heading {
                    font-family: 'Outfit', sans-serif;
                    font-size: 2.2rem;
                    font-weight: 500;
                    color: #1b2633;
                    margin-bottom: 2rem;
                    letter-spacing: 0.02em;
                    text-transform: uppercase;
                }
                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .form-row {
                    display: flex;
                    gap: 1.2rem;
                }
                .form-group-full {
                    width: 100%;
                }
                .form-group-half {
                    flex: 1;
                }
                .form-input, .form-textarea {
                    width: 100%;
                    background: transparent;
                    border: 1px solid #c2c0b3;
                    border-radius: 8px;
                    padding: 1.2rem 1.5rem;
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.95rem;
                    color: #1a2433;
                    outline: none;
                    transition: border-color 0.3s;
                }
                .form-input::placeholder, .form-textarea::placeholder {
                    color: #6a647d;
                    opacity: 0.8;
                    font-weight: 400;
                }
                .form-input:focus, .form-textarea:focus {
                    border-color: #1a2433;
                }
                .form-textarea {
                    resize: none;
                }
                .submit-btn {
                    background: #233645;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    padding: 1.1rem 3.5rem;
                    font-family: 'Outfit', sans-serif;
                    font-weight: 600;
                    font-size: 1.1rem;
                    letter-spacing: 0.05em;
                    cursor: pointer;
                    margin-top: 0.5rem;
                    align-self: center;
                    transition: all 0.3s ease;
                }
                .submit-btn:hover {
                    background: #1a2433;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(26, 36, 51, 0.2);
                }

                @media (max-width: 1024px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .submit-btn {
                        align-self: stretch;
                        text-align: center;
                    }
                }
                @media (max-width: 768px) {
                    .contact-inner-content {
                        padding: 0 2rem;
                    }
                    .form-row {
                        flex-direction: column;
                    }
                }
            `}} />
        </div>
    );
};

export default ContactPage;
