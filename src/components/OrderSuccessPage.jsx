import React, { useEffect } from 'react';
import { Check } from 'lucide-react';

const OrderSuccessPage = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="order-success-page">
      <div className="success-container">
        <div className="success-card">
          <div className="check-circle">
            <Check size={48} color="white" strokeWidth={3} />
          </div>
          <h1 className="success-title">Order Confirmed!</h1>
          <h2 className="success-subtitle">Thank you for choosing Clothing!</h2>
          <p className="success-message">
            Your order is confirmed and on its way to being processed. 
            We're thrilled to be a part of your shopping experience.
          </p>
        </div>
        
        <button className="continue-shopping-btn" onClick={() => onNavigate('shop')}>
          CONTINUE SHOPPING
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .order-success-page {
          background-color: #f2ebe1;
          padding: 6rem 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .success-container {
          max-width: 600px;
          width: 90%;
          text-align: center;
        }
        .success-card {
           background: #e1ddd2;
           padding: 5rem 3rem;
           border-radius: 24px;
           display: flex;
           flex-direction: column;
           align-items: center;
           margin-bottom: 2rem;
           box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .check-circle {
          width: 96px;
          height: 96px;
          background-color: #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2.5rem;
          box-shadow: 0 8px 16px rgba(16, 185, 129, 0.2);
        }
        .success-title {
          font-family: 'Outfit', sans-serif;
          font-size: 2.2rem;
          font-weight: 600;
          color: #1a2433;
          margin-bottom: 1rem;
        }
        .success-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a2433;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        .success-message {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          color: #444;
          max-width: 420px;
        }
        .continue-shopping-btn {
          width: 100%;
          background: #2a3a4c;
          color: white;
          border-radius: 6px;
          padding: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
        }
        .continue-shopping-btn:hover {
          background: #1a2433;
        }

        @media (max-width: 480px) {
           .success-card { padding: 3rem 1.5rem; }
           .success-title { font-size: 1.8rem; }
        }
      `}} />
    </div>
  );
};

export default OrderSuccessPage;
