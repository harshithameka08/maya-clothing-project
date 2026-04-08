import React, { useEffect } from 'react';
import { ChevronLeft, X, Minus, Plus } from 'lucide-react';

import silkSaree from '../assets/silk_saree.png';
import blissSaree from '../assets/bliss_saree.png';

const ConfirmationPage = ({ onNavigate, cart = [], updateQty, removeFromCart, paymentMethod }) => {
  const [upiId, setUpiId] = React.useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const priceStr = String(item.price).replace(/,/g, '').replace(/[^\d.]/g, '');
      const price = parseFloat(priceStr) || 0;
      return total + (price * (item.qty || 1));
    }, 0);
  };

  const subtotal = calculateTotal();
  const finalTotal = subtotal;

  const getPaymentDetails = (method) => {
    switch(method) {
      case 'paypal':
        return { name: 'Paypal', logo: <span style={{ color: '#003087', fontWeight: 'bold', fontStyle: 'italic', fontSize: '0.65rem' }}>PayPal</span> };
      case 'mastercard':
        return { 
          name: 'Mastercard', 
          logo: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#EB001B', marginRight: -3, opacity: 0.8 }}></div>
              <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#F79E1B', opacity: 0.8 }}></div>
            </div>
          )
        };
      case 'upi':
        return { name: 'UPI', logo: <div style={{ border: '1px solid #999', padding: '1px 3px', fontSize: '0.45rem', fontWeight: 'bold', color: '#555' }}>UPI</div> };
      case 'cod':
      default:
        return { name: 'Cash On Delivery', logo: <span style={{ fontSize: '1rem' }}>💵</span> };
    }
  };

  const selectedPay = getPaymentDetails(paymentMethod);

  return (
    <div className="confirm-page">
      <div className="confirm-container">
        <div className="confirm-header">
           <div className="header-nav-group">
             <button className="confirm-back-btn" onClick={() => onNavigate('payment')}>
               <ChevronLeft size={24} strokeWidth={1} />
             </button>
             <span className="confirm-nav-label">Cart/Customer Info/Shipping/<br/>Payment Mode/Confirmation</span>
           </div>
           <h1 className="confirm-title">CONFIRMATION</h1>
        </div>

        <div className="confirm-content">
           <h3 className="confirm-section-title">Shopping Items</h3>
           
           <div className="items-list">
              {cart.map((item, idx) => {
                const priceStr = String(item.price).replace(/,/g, '').replace(/[^\d.]/g, '');
                const price = parseFloat(priceStr) || 0;
                const lineTotal = price * (item.qty || 1);
                
                return (
                  <div key={idx} className={`confirm-item-card animate-up opacity-0 delay-${(idx % 4) + 1}`}>
                    <button className="item-remove-small" onClick={() => removeFromCart(item.title)}><X size={12} /></button>
                    <div className="item-main-info">
                      <img src={item.image} alt={item.title} className="item-confirm-img" />
                      <span className="item-confirm-name">{item.title}</span>
                    </div>
                    <div className="item-confirm-unit-price">Rs. {item.price}</div>
                    <div className="item-confirm-qty">
                      <button className="confirm-qty-btn" onClick={() => updateQty(item.title, -1)}><Minus size={12} /></button>
                      <span>{item.qty}</span>
                      <button className="confirm-qty-btn" onClick={() => updateQty(item.title, 1)}><Plus size={12} /></button>
                    </div>
                    <div className="item-confirm-total">Rs. {lineTotal.toFixed(2)}</div>
                  </div>
                );
              })}
           </div>

           <div className="confirm-meta-section">
              <div className="meta-col">
                 <h4 className="meta-heading">Payment Method</h4>
                 <div className="meta-box animate-scale opacity-0 delay-1">
                    <span>{selectedPay.name}</span>
                    <div className="meta-logo-placeholder">
                       {selectedPay.logo}
                    </div>
                 </div>
                 {paymentMethod === 'upi' && (
                   <div className="upi-input-box animate-down">
                      <input 
                        type="text" 
                        placeholder="Enter UPI ID (e.g. name@okaxis)" 
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className="upi-id-input"
                      />
                   </div>
                 )}
              </div>
              <div className="meta-col">
                 <h4 className="meta-heading">Shipping Company</h4>
                 <div className="meta-box animate-scale opacity-0 delay-2">
                    <span>RaceCouriers</span>
                    <div className="meta-logo-placeholder">
                       <div style={{ backgroundColor: '#eb001b', color: 'white', fontSize: '0.4rem', fontWeight: '900', padding: '2px 4px', fontStyle: 'italic' }}>RACE COURIERS</div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="confirm-footer-cta">
              <button className="confirm-pay-btn" onClick={() => onNavigate('order-success')} disabled={cart.length === 0} style={{ opacity: cart.length === 0 ? 0.5 : 1 }}>
                PAY <span>Rs. {finalTotal.toFixed(2)}</span>
              </button>
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .confirm-page {
          background-color: #f2ebe1;
          padding: 3rem 0;
          min-height: 100vh;
        }
        .confirm-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }
        .confirm-header {
          display: flex;
          align-items: center;
          position: relative;
          justify-content: center;
          margin-bottom: 5rem;
        }
        .header-nav-group {
          position: absolute;
          left: 0;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .confirm-back-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid #1a2433;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .confirm-nav-label {
          font-size: 0.75rem;
          color: #1a2433;
          font-weight: 500;
          line-height: 1.3;
        }
        .confirm-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #1a2433;
        }

        .confirm-content {
          max-width: 1000px;
          margin: 0 auto;
        }
        .confirm-section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a2433;
          margin-bottom: 2rem;
        }

        .items-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .confirm-item-card {
           background: #fdfaf3;
           border: 1px solid #d1cfc5;
           border-radius: 8px;
           padding: 1.2rem;
           display: grid;
           grid-template-columns: 36px 1fr 120px 100px 120px;
           align-items: center;
        }
        .item-remove-small {
          width: 22px;
          height: 22px;
          background: #666;
          color: white;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item-main-info {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .item-confirm-img {
          width: 65px;
          height: 48px;
          border-radius: 4px;
          object-fit: cover;
        }
        .item-confirm-name { font-weight: 600; font-size: 0.95rem; }
        .item-confirm-unit-price, .item-confirm-total { font-size: 0.9rem; text-align: center; font-weight: 500; }
        .item-confirm-total { font-weight: 700; }
        .item-confirm-qty {
           background: #1a2433;
           color: white;
           border-radius: 4px;
           display: flex;
           align-items: center;
           justify-content: space-between;
           padding: 0.3rem 0.6rem;
           font-size: 0.85rem;
        }
        .confirm-qty-btn { color: white; display: flex; align-items: center; }

        .confirm-meta-section {
          padding-top: 2.5rem;
          border-top: 1px solid #d1cfc5;
          display: flex;
          gap: 6rem;
          justify-content: center;
          margin-bottom: 5rem;
        }
        .meta-col { flex: 0 0 280px; }
        .meta-heading {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1a2433;
          text-align: center;
        }
        .meta-box {
           background: #fdfaf3;
           border: 1px solid #d1cfc5;
           border-radius: 4px;
           padding: 0.8rem 1.2rem;
           display: flex;
           align-items: center;
           justify-content: space-between;
           font-size: 0.8rem;
        }
        .meta-logo-placeholder {
          height: 20px;
          display: flex;
          align-items: center;
        }

        .confirm-footer-cta {
           display: flex;
           justify-content: center;
        }
        .confirm-pay-btn {
           background: #1a2433;
           color: white;
           padding: 1.2rem 4rem;
           border-radius: 8px;
           font-family: 'Outfit', sans-serif;
           font-weight: 500;
           font-size: 1.2rem;
           letter-spacing: 0.05em;
           cursor: pointer;
        }
        .confirm-pay-btn span { font-weight: 700; margin-left: 0.5rem; }
        
        .upi-input-box {
          margin-top: 1rem;
        }
        .upi-id-input {
          width: 100%;
          height: 45px;
          border: 1px solid #d1cfc5;
          border-radius: 6px;
          padding: 0 1.2rem;
          font-size: 0.85rem;
          outline: none;
          background: #fdfaf3;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .upi-id-input:focus {
          border-color: #1a2433;
          box-shadow: 0 0 0 2px rgba(26, 36, 51, 0.1);
        }

        @media (max-width: 900px) {
           .confirm-item-card { grid-template-columns: 1fr; gap: 1rem; }
           .confirm-meta-section { flex-direction: column; align-items: center; gap: 2rem; }
           .confirm-header { flex-direction: column; align-items: flex-start; gap: 2rem; }
           .header-nav-group { position: static; }
        }
      `}} />
    </div>
  );
};

export default ConfirmationPage;
