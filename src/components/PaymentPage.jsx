import React, { useEffect } from 'react';
import { ChevronLeft, ShoppingBag } from 'lucide-react';

const PaymentPage = ({ onNavigate, cart = [], selectedMethod, setSelectedMethod }) => {
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

  const paymentMethods = [
    {
      id: 'paypal',
      name: 'Paypal',
      desc: 'PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.',
      logo: <span style={{ color: '#003087', fontWeight: 'bold', fontStyle: 'italic', fontSize: '0.8rem' }}>PayPal</span>
    },
    {
      id: 'mastercard',
      name: 'Mastercard',
      desc: 'PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.',
      logo: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#EB001B', marginRight: -4, opacity: 0.8 }}></div>
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#F79E1B', opacity: 0.8 }}></div>
        </div>
      )
    },
    {
      id: 'upi',
      name: 'UPI',
      desc: 'Simplify your payments with UPI! Just link your bank account, and voila! Send money, split bills, and shop securely, making transactions as easy as sending a text.',
      logo: <div style={{ border: '1px solid #999', padding: '2px 4px', fontSize: '0.5rem', fontWeight: 'bold', color: '#555' }}>UPI</div>
    },
    {
      id: 'cod',
      name: 'Cash On Delivery',
      desc: 'Delivery time: 14-21 days\nShipping cost: Free',
      logo: <span style={{ fontSize: '1.2rem' }}>💵</span>
    }
  ];

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-header">
           <div className="header-nav-box">
             <button className="payment-back-btn" onClick={() => onNavigate('checkout')}>
               <ChevronLeft size={24} strokeWidth={1} />
             </button>
             <span className="pay-nav-label">Cart/Customer Info/<br/>Shipping/Payment Mode</span>
           </div>
           <h1 className="payment-title">PAYMENT MODE</h1>
        </div>

        <div className="payment-main-layout">
          {/* Methods Grid */}
          <div className="methods-wrapper">
             <div className="payment-intro">
               <h3 className="pay-subtitle">Payment</h3>
               <p className="pay-hint">choose a payment metod</p>
             </div>
             
             <div className="methods-grid">
                {paymentMethods.map((m) => {
                  const isSelected = m.id === selectedMethod;
                  return (
                  <div key={m.id} className={`method-card ${isSelected ? 'method-active' : ''}`} onClick={() => setSelectedMethod(m.id)} style={{ cursor: 'pointer' }}>
                    <div className="method-header-row">
                       <div className={`radio-outer ${isSelected ? 'radio-active' : ''}`}>
                         {isSelected && <div className="radio-inner" />}
                       </div>
                       <span className="method-name">{m.name}</span>
                       <div className="method-logo-box">{m.logo}</div>
                    </div>
                    {isSelected && <p className="method-desc animate-down">{m.desc}</p>}
                  </div>
                )})}
             </div>
          </div>

          {/* Sidebar */}
          <div className="pay-summary-sidebar">
            <div className="sum-card">
              <h2 className="sum-header">ORDER SUMMARY</h2>
              
              <div className="sum-row">
                <span>Price</span>
                <span>Rs. {subtotal.toFixed(2)}</span>
              </div>
              <div className="sum-row">
                <span>Shipping</span>
                <span>$0</span>
              </div>
              <div className="sum-row">
                <span>Tax</span>
                <span>$0</span>
              </div>

              <div className="sum-discount-section">
                <span className="disc-label">Discount Price</span>
                <div className="sum-alert">
                  <span className="alert-icon">ⓘ</span>
                  You must log in to use the discount code
                </div>
                <div className="sum-coupon-row">
                   <input type="text" placeholder="Enter Coupon Code" className="sum-input" />
                   <button className="sum-btn">LOGIN & APPLY CODE</button>
                </div>
              </div>


              <div className="sum-total-row">
                <span className="sum-total-label">Total Price</span>
                <span className="sum-total-val">Rs. {finalTotal.toFixed(2)}</span>
              </div>

              <button className="pay-now-btn" onClick={() => onNavigate('confirmation')}>
                <ShoppingBag size={18} />
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .payment-page {
          background-color: #f2ebe1;
          padding: 3rem 0;
          min-height: 100vh;
        }
        .payment-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }
        .payment-header {
          display: flex;
          align-items: center;
          position: relative;
          justify-content: center;
          margin-bottom: 5rem;
        }
        .header-nav-box {
          position: absolute;
          left: 0;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .payment-back-btn {
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
        .pay-nav-label {
          font-size: 0.75rem;
          color: #1a2433;
          font-weight: 500;
          line-height: 1.3;
        }
        .payment-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #1a2433;
        }

        .payment-main-layout {
           display: grid;
           grid-template-columns: 1fr 340px;
           gap: 4rem;
           align-items: start;
        }

        .payment-intro { margin-bottom: 2.5rem; }
        .pay-subtitle { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.3rem; }
        .pay-hint { font-size: 0.75rem; color: #666; }

        .methods-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .method-card {
           background: white;
           border-radius: 6px;
           padding: 1.5rem;
           border: 1px solid transparent;
           transition: all 0.3s ease;
        }
        .method-active {
           border-color: #1a2433;
        }
        .method-header-row {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          gap: 0.8rem;
        }
        .radio-outer {
          width: 16px;
          height: 16px;
          border: 1px solid #ccc;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .radio-active { border-color: #3b82f6; }
        .radio-inner {
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border-radius: 50%;
        }
        .method-name { font-weight: 700; font-size: 0.85rem; }
        .method-logo-box { margin-left: auto; }
        .method-desc {
          font-size: 0.7rem;
          color: #555;
          line-height: 1.5;
          white-space: pre-line;
        }

        /* Sidebar - Summary */
        .sum-card {
           background: #fdfaf3;
           border: 1px solid #d1cfc5;
           border-radius: 12px;
           padding: 2.2rem 1.8rem;
        }
        .sum-header { font-size: 1.05rem; font-weight: 600; margin-bottom: 2rem; color: #1a2433; }
        .sum-row { display: flex; justify-content: space-between; margin-bottom: 1.2rem; font-size: 0.8rem; color: #555; }
        .sum-discount-section { margin-top: 1.8rem; padding-top: 1.5rem; border-top: 1px dashed #d1cfc5; }
        .disc-label { display: block; font-size: 0.8rem; margin-bottom: 0.7rem; color: #1a2433; }
        .sum-alert { font-size: 0.65rem; color: #d24e1d; display: flex; gap: 0.4rem; margin-bottom: 1rem; }
        .sum-coupon-row { display: flex; border: 1px solid #ccc; border-radius: 4px; overflow: hidden; background: white; height: 34px; }
        .sum-input { flex: 1; border: none; padding: 0 0.8rem; font-size: 0.7rem; outline: none; }
        .sum-btn { background: #222; color: white; font-size: 0.6rem; padding: 0 0.8rem; font-weight: 600; }
        .sum-total-row { display: flex; justify-content: space-between; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #d1cfc5; align-items: center; }
        .sum-total-label { font-weight: 700; font-size: 1.1rem; }
        .sum-total-val { font-weight: 800; font-size: 1.2rem; }
        .pay-now-btn { width: 100%; background: #2a3a4c; color: white; border-radius: 6px; margin-top: 1.8rem; padding: 1.2rem; font-weight: 700; letter-spacing: 0.1em; display: flex; align-items: center; justify-content: center; gap: 0.8rem; }

        @media (max-width: 1200px) {
           .payment-main-layout { grid-template-columns: 1fr; }
           .pay-summary-sidebar { max-width: 400px; }
        }
        @media (max-width: 768px) {
           .methods-grid { grid-template-columns: 1fr; }
           .payment-header { flex-direction: column; align-items: flex-start; gap: 2rem; }
           .header-nav-box { position: static; }
        }
      `}} />
    </div>
  );
};

export default PaymentPage;
