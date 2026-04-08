import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';

const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item animate-up opacity-0 delay-${(index % 5) + 1}`}>
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer || "Our customer support team is here to help with any questions you may have about orders, shipping, and more."}</p>
                </div>
            )}
        </div>
    );
};

const FAQsPage = ({ onNavigate }) => {
    const faqs = [
        "How do I place an order?",
        "What payment methods do you accept?",
        "How can I track my order?",
        "What is your return policy?",
        "Do you offer international shipping?",
        "Are your products eco-friendly?",
        "How do I contact customer support?",
        "Can I customize my order?",
        "What is the delivery time for my order?",
        "Do you have a loyalty program or rewards system?"
    ];

    return (
        <div className="faqs-page-container">
            <div className="faqs-inner-content">
                <div className="back-btn-global" onClick={() => onNavigate('back')}>
                    <ArrowLeft size={18} />
                </div>
                <h1 className="faqs-main-heading animate-right opacity-0 delay-1">FREQUENTLY ASKED QUESTIONS</h1>
                
                <div className="faqs-list">
                    {faqs.map((q, idx) => (
                        <FAQItem key={idx} index={idx} question={q} />
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .faqs-page-container {
                    background-color: #f2ebe1;
                    padding: 4rem 0;
                    min-height: 100vh;
                }
                .faqs-inner-content {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 4rem;
                }
                .faqs-main-heading {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.8rem;
                    font-weight: 600;
                    color: #1a2433;
                    margin-bottom: 4rem;
                    letter-spacing: 0.05em;
                }
                .faqs-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }
                .faq-item {
                    background: transparent;
                    border: 1px solid #d1cfbc;
                    border-radius: 40px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                .faq-question {
                    padding: 1.5rem 3rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.15rem;
                    font-weight: 500;
                    color: #1a2433;
                }
                .faq-question:hover {
                    background: rgba(26, 36, 51, 0.02);
                }
                .faq-answer {
                    padding: 0 2.5rem 1.5rem 2.5rem;
                    font-family: 'Outfit', sans-serif;
                    font-size: 1rem;
                    color: #555;
                    line-height: 1.6;
                }
                @media (max-width: 768px) {
                    .faqs-inner-content { padding: 0 2rem; }
                    .faqs-main-heading { font-size: 1.4rem; }
                    .faq-question { padding: 1rem 1.5rem; font-size: 1rem; }
                    .faq-answer { padding: 0 1.5rem 1.25rem 1.5rem; }
                }
            `}} />
        </div>
    );
};

export default FAQsPage;
