import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ProductCard } from './ProductGrid';

import sareeImg from '../assets/silk_saree.png';
import earringsImg from '../assets/earrings.png';
import dressImg from '../assets/dress.png';

const WishlistPage = ({ onBack, items = [], onAddToCart, onRemove }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        <div className="wishlist-header animate-down opacity-0">
          <div className="wishlist-back-btn" onClick={() => onBack('back')}>
             <ArrowLeft size={18} />
          </div>
          <h1 className="wishlist-title">WISHLIST</h1>
        </div>
        
        <div className="wishlist-grid animate-up opacity-0 delay-1">
          {items.map((item, index) => (
            <ProductCard 
                key={index} 
                {...item} 
                heartFill="#ff0000" 
                heartStroke="#ff0000" 
                onAddToCart={() => onAddToCart && onAddToCart(item)}
                onWishlist={() => onRemove && onRemove(item)}
            />
          ))}
          {items.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: '#666' }}>
              Your wishlist is empty.
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .wishlist-page {
          background-color: #f2ebe1;
          padding: 3rem 2rem 10rem 2rem;
          min-height: 80vh;
        }
        .wishlist-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        .wishlist-header {
          display: flex;
          align-items: center;
          position: relative;
          margin-bottom: 4rem;
          justify-content: center;
        }
        .wishlist-back-btn {
          position: absolute;
          left: 0;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid #1a2433;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #1a2433;
          transition: all 0.3s ease;
        }
        .wishlist-back-btn:hover {
          background: #1a2433;
          color: white;
        }
        .wishlist-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 500;
          color: #2b3a4c;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .wishlist-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 1024px) {
          .wishlist-grid {
             grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .wishlist-grid {
             grid-template-columns: 1fr;
          }
          .wishlist-header {
             flex-direction: column;
             align-items: flex-start;
             gap: 1.5rem;
          }
          .wishlist-back-btn {
             position: static;
          }
          .wishlist-title {
             margin: 0;
          }
        }
      `}} />
    </div>
  );
};

export default WishlistPage;
