import React, { useEffect } from 'react';
import { ArrowLeft, X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { ProductCard } from './ProductGrid';

import silkSaree from '../assets/silk_saree.png';
import blissSaree from '../assets/bliss_saree.png';
import cottonDress from '../assets/cotton_dress.png';
import earringsImg from '../assets/earrings.png';

const CartPage = ({ onNavigate, cart = [], updateQty, removeFromCart, onAddToCart, onWishlist, wishlist = [] }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newArrivals = [
    { image: silkSaree, title: "Silk Elegance Saree", price: "2680.00", oldPrice: "3000" },
    { image: blissSaree, title: "Contemporary Bliss Saree", price: "1500.00", oldPrice: "2000" },
    { image: cottonDress, title: "Embroidery Cotton Kurta Set", price: "2680.00", oldPrice: "3000" }
  ];

    const calculateTotal = () => {
      return cart.reduce((total, item) => {
        const priceStr = String(item.price).replace(/,/g, '').replace(/[^\d.]/g, '');
        const price = parseFloat(priceStr) || 0;
        return total + (price * (item.qty !== undefined ? item.qty : 1));
      }, 0);
    };

  const subtotal = calculateTotal();
  const finalTotal = subtotal;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header animate-down opacity-0">
          <div className="cart-back-btn-box">
            <div className="cart-back-btn" onClick={() => onNavigate('back')}>
              <ArrowLeft size={20} strokeWidth={1.2} />
            </div>
          </div>
          <h1 className="cart-title">CART</h1>
        </div>

        <div className="cart-content-layout animate-up opacity-0 delay-1">
          {/* Cart Items List */}
          <div className="cart-items-section">
            {cart.map((item, index) => {
              const priceStr = String(item.price).replace(/,/g, '').replace(/[^\d.]/g, '');
              const price = parseFloat(priceStr) || 0;
              const lineTotal = price * (item.qty !== undefined ? item.qty : 1);
              
              return (
                <div key={index} className={`cart-item-card animate-up opacity-0 delay-${(index % 4) + 1}`}>
                  <button className="remove-item-btn" onClick={() => removeFromCart(item.cartId || item.title)}><X size={14} /></button>
                  <div className="cart-item-info">
                    <div className="item-img-box">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <span className="item-name" style={{ display: 'flex', flexDirection: 'column' }}>
                       {item.title}
                       {item.size && <span style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.3rem' }}>Size: {item.size}</span>}
                    </span>
                  </div>
                  <div className="item-price-label">Rs. {item.price}</div>
                  <div className="qty-control-box">
                    <button className="qty-btn" onClick={() => updateQty(item.cartId || item.title, -1)}><Minus size={14} /></button>
                    <span className="qty-value">{item.qty !== undefined ? item.qty : 1}</span>
                    <button className="qty-btn" onClick={() => updateQty(item.cartId || item.title, 1)}><Plus size={14} /></button>
                  </div>
                  <div className="item-total-price">Rs. {lineTotal.toFixed(2)}</div>
                </div>
              );
            })}
            {cart.length === 0 && (
               <div style={{ textAlign: 'center', padding: '3rem 0', color: '#666' }}>Your cart is empty.</div>
            )}
          </div>

          {/* Order Summary */}
          <div className="order-summary-card">
            <h2 className="summary-title">ORDER SUMMARY</h2>
            
            <div className="summary-line-item">
              <span>Price</span>
              <span>Rs. {subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-line-item">
              <span>Shipping</span>
              <span>$0</span>
            </div>
            <div className="summary-line-item">
              <span>Tax</span>
              <span>$0</span>
            </div>
            
            <div className="discount-info-box">
              <span className="discount-price-label">Discount Price</span>
              <div className="discount-warning">
                <span className="warning-icon">ⓘ</span>
                You must log in to use the discount code
              </div>
              <div className="coupon-row">
                <input type="text" placeholder="Enter Coupon Code" className="coupon-input" />
                <button className="apply-coupon-btn">LOGIN & APPLY CODE</button>
              </div>
            </div>


            <div className="final-total-row">
              <span className="total-label">Total Price</span>
              <span className="total-value">Rs. {finalTotal.toFixed(2)}</span>
            </div>

            <button className="checkout-btn" onClick={() => onNavigate('checkout')} disabled={cart.length === 0} style={{ opacity: cart.length === 0 ? 0.5 : 1 }}>
              <ShoppingBag size={18} />
              CHECKOUT
            </button>
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="cart-new-arrivals animate-scale opacity-0 delay-2">
          <h2 className="section-title-alt">NEW ARRIVALS</h2>
          <div className="arrivals-grid-3">
             {newArrivals.map((p, i) => {
               const inWishlist = wishlist.some(w => w.title === p.title);
               return (
                 <ProductCard 
                   key={i} 
                   {...p} 
                   heartFill={inWishlist ? '#ff0000' : p.heartFill || 'transparent'}
                   heartStroke={inWishlist ? '#ff0000' : p.heartStroke || '#1a2433'}
                   onAddToCart={() => onAddToCart && onAddToCart(p)}
                   onWishlist={() => onWishlist && onWishlist(p)}
                 />
               );
             })}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cart-page {
          background-color: #f2ebe1;
          padding: 3rem 0;
          min-height: 100vh;
        }
        .cart-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }
        .cart-header {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 4rem;
        }
        .cart-back-btn-box {
          position: absolute;
          left: 0;
          display: flex;
          align-items: center;
        }
        .cart-back-btn {
          width: 45px;
          height: 45px;
          border: 1px solid #1a2433;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #1a2433;
          transition: all 0.3s ease;
        }
        .cart-back-btn:hover {
          background: #1a2433;
          color: #fff;
        }
        .cart-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: #1a2433;
        }

        .cart-content-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 2rem;
          margin-bottom: 8rem;
          align-items: start;
        }

        .cart-items-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .cart-item-card {
          background: #fdfaf3;
          border: 1px solid #d1cfc5;
          border-radius: 8px;
          padding: 1.2rem;
          display: grid;
          grid-template-columns: 40px 1fr 100px 120px 100px;
          align-items: center;
          position: relative;
        }
        .remove-item-btn {
          width: 24px;
          height: 24px;
          background: #666;
          color: white;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cart-item-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .item-img-box {
          width: 60px;
          height: 45px;
          border-radius: 4px;
          overflow: hidden;
        }
        .item-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .item-name {
          font-weight: 600;
          font-size: 0.95rem;
          color: #1a2433;
        }
        .item-price-label, .item-total-price {
          font-size: 0.9rem;
          color: #1a2433;
          text-align: center;
        }
        .item-total-price {
          font-weight: 700;
        }
        .qty-control-box {
          background: #1a2433;
          color: white;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem 0.8rem;
          height: 36px;
        }
        .qty-btn {
          color: white;
          opacity: 0.7;
          display: flex;
          align-items: center;
        }
        .qty-value {
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* Summary */
        .order-summary-card {
           background: #fdfaf3;
           border: 1px solid #d1cfc5;
           border-radius: 12px;
           padding: 2rem 1.5rem;
        }
        .summary-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #1a2433;
        }
        .summary-line-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          color: #555;
        }
        .discount-info-box {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px dashed #d1cfc5;
        }
        .discount-price-label {
           display: block;
           font-size: 0.85rem;
           margin-bottom: 0.5rem;
           color: #1a2433;
        }
        .discount-warning {
          font-size: 0.7rem;
          color: #d24e1d;
          display: flex;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }
        .coupon-row {
          display: flex;
          border: 1px solid #ccc;
          border-radius: 4px;
          overflow: hidden;
          background: white;
        }
        .coupon-input {
          flex: 1;
          border: none;
          padding: 0.6rem;
          font-size: 0.75rem;
          outline: none;
        }
        .apply-coupon-btn {
          background: #222;
          color: white;
          font-size: 0.65rem;
          padding: 0 0.8rem;
          font-weight: 600;
        }

        .final-total-row {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #d1cfc5;
          align-items: center;
        }
        .total-label {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a2433;
        }
        .total-value {
          font-size: 1.25rem;
          font-weight: 800;
          color: #1a2433;
        }
        .checkout-btn {
          width: 100%;
          background: #2a3a4c;
          color: white;
          border-radius: 6px;
          margin-top: 1.5rem;
          padding: 1rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
        }

        /* New Arrivals */
        .cart-new-arrivals {
          margin-top: 4rem;
        }
        .section-title-alt {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a2433;
          margin-bottom: 3rem;
        }
        .arrivals-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1100px) {
          .cart-content-layout { grid-template-columns: 1fr; }
          .order-summary-card { max-width: 400px; }
        }
        @media (max-width: 768px) {
           .cart-item-card {
              grid-template-columns: 30px 1fr 1fr;
              gap: 1rem;
           }
           .item-price-label, .qty-control-box { display: none; }
        }
      `}} />
    </div>
  );
};

export default CartPage;
