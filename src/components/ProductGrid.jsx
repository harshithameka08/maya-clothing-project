import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ image, title, price, oldPrice, heartFill = "transparent", heartStroke = "#1a2433", onClick, onAddToCart, onWishlist, index }) => (
  <div className={`product-card animate-up opacity-0 delay-${(index % 4) + 1}`} onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
    <div className="product-visual">
      <img src={image} alt={title} className="product-img-element" />
    </div>
    <div className="product-info-panel">
      <h3 className="product-item-title">{title}</h3>
      <div className="product-pricing">
        {oldPrice && (
          <>
            <span className="old-price-value">Rs. {oldPrice}</span>
            <span className="price-bar">|</span>
          </>
        )}
        <span className="current-price-value">Rs. {price}</span>
      </div>
      <div className="product-footer-actions">
        <button className="cart-add-btn" onClick={(e) => { e.stopPropagation(); onAddToCart && onAddToCart(); }}>ADD TO CART</button>
        <div className="wishlist-btn-box" onClick={(e) => { e.stopPropagation(); onWishlist && onWishlist(); }} style={{ cursor: 'pointer' }}>
          <Heart 
            size={18} 
            fill={heartFill} 
            stroke={heartStroke} 
            style={{ transition: 'all 0.2s ease' }} 
          />
        </div>
      </div>
    </div>
  </div>
);

const ProductGrid = ({ title, products, onShopAll, onAddToCart, onWishlist, onProductClick, isScroll = false }) => {
  return (
    <section className="product-grid-section">
      <div className="grid-container-layout">
        <div className="grid-top-header animate-fade opacity-0">
          <h2 className="grid-section-heading">{title}</h2>
          <div className="header-nav-box">
             <a href="#" className="shop-link-btn" onClick={(e) => { e.preventDefault(); onShopAll(); }}>SHOP ALL -- &gt;</a>
          </div>
        </div>
        <div className={`grid-tiles-layout ${isScroll ? 'scroll-layout' : ''}`}>
          {products.map((p, i) => <ProductCard key={i} index={i} {...p} onClick={() => p.onClick ? p.onClick() : (onProductClick && onProductClick(p.title))} onAddToCart={() => onAddToCart && onAddToCart(p)} onWishlist={() => onWishlist && onWishlist(p)} />)}
          {isScroll && products.map((p, i) => <ProductCard key={i + products.length} index={i} {...p} onClick={() => p.onClick ? p.onClick() : (onProductClick && onProductClick(p.title))} onAddToCart={() => onAddToCart && onAddToCart(p)} onWishlist={() => onWishlist && onWishlist(p)} />)}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .product-grid-section {
          padding: 2rem 2rem 2rem 2rem;
          background-color: #f2ebe1;
          overflow: hidden;
        }
        .grid-container-layout {
          max-width: 1400px;
          margin: 0 auto;
        }
        .grid-top-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }
        .grid-section-heading {
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 1.8rem;
          color: #1a2433;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .shop-link-btn {
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #1a2433;
          text-decoration: none;
          text-transform: uppercase;
          transition: opacity 0.3s;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .shop-link-btn:hover { opacity: 0.7; }

        .grid-tiles-layout {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }

        .scroll-layout {
          display: flex !important;
          animation: marquee 40s linear infinite;
          width: max-content;
          gap: 2rem;
        }

        .scroll-layout:hover {
          animation-play-state: paused;
        }

        .scroll-layout .product-card {
          width: 260px;
          flex-shrink: 0;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 1200px) {
          .grid-tiles-layout:not(.scroll-layout) { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 992px) {
          .grid-tiles-layout:not(.scroll-layout) { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .grid-tiles-layout:not(.scroll-layout) { grid-template-columns: 1fr; }
          .grid-section-heading { font-size: 1.4rem; }
          .scroll-layout .product-card { width: 280px; }
        }
      `}} />
    </section>
  );
};


export default ProductGrid;
export { ProductCard };

