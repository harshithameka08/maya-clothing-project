import React, { useEffect } from 'react';
import { Star, StarHalf, ChevronUp, ChevronDown, Heart, ArrowLeft } from 'lucide-react';
import { ProductCard } from './ProductGrid';

import mainSareeImg from '../assets/silk_saree.png';
import thumb1 from '../assets/silk_saree.png'; 
import thumb2 from '../assets/silk_saree.png';
import thumb3 from '../assets/silk_saree.png';
import thumb4 from '../assets/silk_saree.png';

// Similar products assets
import blissSaree from '../assets/bliss_saree.png';
import modernDress from '../assets/86ba3fe0e15b5ea6f9c5a2ee70100958.png';
import ethnicDress from '../assets/dress.png';
import cottonDress from '../assets/cotton_dress.png'; // 4th item
import lounge1 from '../assets/towel.png';
import blossomEarrings from '../assets/1cb7be1228669bc62398632533bd1d87.png';
import lounge2 from '../assets/4efaf9972a120c416092913a9865e1a4.png';
import earrings from '../assets/earrings.png';
import necklace from '../assets/necklace.png';
import silkKurta from '../assets/53eb08a11816095cc7482f0173617fba.png';
import twistCollar from '../assets/fbd17fba0ac365da5cb6e945d52ec98f.png';

const ShopDescription = ({ productTitle, onNavigate, onAddToCart, onWishlist, wishlist = [] }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productTitle]);

  const productsData = {
    "Silk Elegance Saree": {
      title: "SILK ELEGANCE SAREE",
      desc: "Dive into traditional charm with our Silk Elegance Saree, intricately handwoven for a touch of modern elegance with a Western flair. Perfect for cultural celebrations or modern events.",
      price: "Rs 8,999.00",
      image: mainSareeImg,
      thumbnails: [thumb1, thumb2, thumb3, thumb4],
      details: [
        "Material: Pure Handwoven Silk",
        "Design: Intricate Patterns",
        "Design: Intricate Patterns",
        "Occasion: Cultural and Modern",
        "Length: 6.5 meters"
      ],
      similar: [
        { title: "Contemporary Bliss Saree", price: "1500.00", oldPrice: "2000", image: blissSaree },
        { title: "Modern Fusion Handloom Dress", price: "1500.00", oldPrice: "2000", image: modernDress },
        { title: "Traditional Motif Inspired Ethnic Dress", price: "1680.00", oldPrice: "2000", image: ethnicDress },
        { title: "Embroidery Cotton Kurta Set", price: "1680.00", oldPrice: "2000", image: cottonDress }
      ]
    },
    "Embroidery Cotton Kurta Set": {
      title: "EMBROIDERY COTTON KURTA SET",
      desc: "Elevate your style fusion with our Embroidery Cotton Kurta Set, blending traditional Indian charm with Western comfort. The intricate embroidery adds cultural elegance to casual and semi-formal occasions.",
      price: "Rs 8,999.00",
      image: cottonDress,
      thumbnails: [cottonDress, cottonDress, cottonDress, cottonDress],
      details: [
        "Material: Pure Cotton",
        "Design: Embroidery Details",
        "Occasion: Casual and Semi-Formal",
        "Length: Kurta and Bottom"
      ],
      similar: [
        { title: "Embroidery Cotton Kurta Set", price: "1680.00", oldPrice: "2000", image: cottonDress },
        { title: "Traditional Motif Inspired Ethnic Dress", price: "1680.00", oldPrice: "2000", image: ethnicDress },
        { title: "Cozy Comfort Organic Cotton Loungewear", price: "2680.00", oldPrice: "3000", image: lounge1 },
        { title: "Silk Elegance Saree", price: "2680.00", oldPrice: "3000", image: mainSareeImg }
      ]
    },
    "Modern Fusion Handloom Dress": {
      title: "MODERN FUSION HANDLOOM DRESS",
      desc: "Make a cross-cultural statement with our Modern Fusion Handloom Dress, blending vibrant Indian colors with Western design. Perfect for cultural events with a touch of modern aesthetics.",
      price: "Rs 8,999.00",
      image: modernDress,
      thumbnails: [modernDress, modernDress, modernDress, modernDress],
      details: [
        "Material: Handwoven Fabric",
        "Design: Modern Fusion",
        "Occasion: Cultural Events",
        "Length: Knee-Length"
      ],
      similar: [
        { title: "Modern Fusion Handloom Dress", price: "1500.00", oldPrice: "2000", image: modernDress },
        { title: "Contemporary Bliss Saree", price: "1500.00", oldPrice: "2000", image: blissSaree },
        { title: "Embroidery Cotton Kurta Set", price: "1680.00", oldPrice: "2000", image: cottonDress },
        { title: "Blossom Earrings", price: "1500.00", oldPrice: "2000", image: blossomEarrings }
      ]
    },
    "Cozy Comfort Organic Cotton Loungewear": {
      title: "COZY COMFORT ORGANIC COTTON LOUNGEWEAR",
      desc: "Relax in style with a fusion of Indian and Western comfort in our Cozy Comfort Organic Cotton Loungewear. Crafted from organic cotton, it's perfect for unwinding with a touch of sustainable flair, ideal for laid-back days.",
      price: "Rs 8,999.00",
      image: lounge1,
      thumbnails: [lounge1, lounge1, lounge1, lounge1],
      details: [
        "Material: Organic Cotton",
        "Style: Loungewear Set",
        "Comfort: Relaxed Fit",
        "Colors: Neutral Tones"
      ],
      similar: [
        { title: "Versatile Neutral Tones Loungewear Set", price: "1500.00", oldPrice: "2000", image: lounge2 },
        { title: "Contemporary Bliss Saree", price: "1500.00", oldPrice: "2000", image: blissSaree },
        { title: "Blossom Earrings", price: "1500.00", oldPrice: "2000", image: blossomEarrings },
        { title: "Celestia Drops", price: "1680.00", oldPrice: "2000", image: earrings }
      ]
    },
    "Blossom Earrings": {
      title: "BLOSSOM EARRINGS",
      desc: "Embrace floral elegance with a blend of Indian and Western motifs in our Blossom Earrings. The delicate design and quality craftsmanship make them the perfect accessory to enhance your everyday fusion style.",
      price: "Rs 8,999.00",
      image: blossomEarrings,
      thumbnails: [blossomEarrings, necklace, necklace, necklace],
      details: [
        "Material: Silver Plated",
        "Style: Stud Earrings",
        "Design: Floral Motif",
        "Occasion: Everyday Wear"
      ],
      similar: [
        { title: "Celestia Drops", price: "1680.00", oldPrice: "2000", image: earrings },
        { title: "Blossom Earrings", price: "1500.00", oldPrice: "2000", image: blossomEarrings },
        { title: "Samanjasya Necklace", price: "2680.00", oldPrice: "3000", image: necklace }
      ]
    }
  };

  const productDb = [
    { title: "Silk Elegance Saree", price: "Rs 2,680.00", image: mainSareeImg, desc: "Dive into traditional charm with our Silk Elegance Saree, intricately handwoven for a touch of modern elegance with a Western flair. Perfect for cultural celebrations or modern events." },
    { title: "Contemporary Bliss Saree", price: "Rs 1,500.00", image: blissSaree, desc: "Dive into traditional charm with this intricately handwoven saree for a touch of modern elegance. Perfect for cultural celebrations or modern events." },
    { title: "Embroidery Cotton Kurta Set", price: "Rs 1,680.00", image: cottonDress, desc: "Elevate your style fusion with our Embroidery Cotton Kurta Set, blending traditional Indian charm with Western comfort. The intricate embroidery adds cultural elegance." },
    { title: "Embroidery cotton tunic set", price: "Rs 1,800.00", image: cottonDress, desc: "Elevate your style fusion with our Embroidery Cotton Tunic Set, blending traditional Indian charm with Western comfort. The intricate embroidery adds cultural elegance." },
    { title: "Silk Kurta Ensemble", price: "Rs 2,680.00", image: silkKurta, desc: "Elevate your style fusion with our Silk Kurta Ensemble, blending traditional Indian charm with Western comfort." },
    { title: "Modern Fusion Handloom Dress", price: "Rs 1,500.00", image: modernDress, desc: "Make a cross-cultural statement with our Modern Fusion Handloom Dress, blending vibrant Indian colors with Western design." },
    { title: "Traditional Motif Inspired Ethnic Dress", price: "Rs 1,680.00", image: ethnicDress, desc: "Make a cross-cultural statement with our Traditional Motif Inspired Ethnic Dress, blending vibrant Indian culture with modern design." },
    { title: "Handloom Ethnic Dress", price: "Rs 1,800.00", image: ethnicDress, desc: "Make a cross-cultural statement with our Handloom Ethnic Dress, blending vibrant Indian culture with modern design." },
    { title: "Cozy Comfort Organic Cotton Loungewear", price: "Rs 2,680.00", image: lounge1, desc: "Relax in style with a fusion of Indian and Western comfort in our Cozy Comfort Organic Cotton Loungewear. Crafted from organic cotton, perfect for unwinding." },
    { title: "Versatile Neutral Tones Loungewear Set", price: "Rs 1,500.00", image: lounge2, desc: "Relax in style with a fusion of Indian and Western comfort in our Versatile Neutral Tones Loungewear Set. Crafted from organic materials." },
    { title: "Blossom Earrings", price: "Rs 1,500.00", image: blossomEarrings, desc: "Embrace floral elegance with a blend of Indian and Western motifs in our Blossom Earrings. The delicate design makes them the perfect accessory." },
    { title: "Samanjasya Necklace", price: "Rs 2,680.00", image: necklace, desc: "Embrace elegance with a blend of Indian and Western motifs in our Samanjasya Necklace. The delicate design makes it the perfect accessory." },
    { title: "Harmony Twist Collar", price: "Rs 1,680.00", image: twistCollar, desc: "Embrace elegance with a blend of Indian and Western motifs in our Harmony Twist Collar. The delicate design makes it the perfect accessory." },
    { title: "Celestia Drops", price: "Rs 1,680.00", image: earrings, desc: "Embrace elegance with a blend of Indian and Western motifs in our Celestia Drops. The delicate design makes them the perfect accessory." }
  ];

  const foundBase = productDb.find(p => p.title === productTitle) || productDb[0];

  const product = productsData[productTitle] || {
    title: foundBase.title.toUpperCase(),
    desc: foundBase.desc,
    price: foundBase.price,
    image: foundBase.image,
    thumbnails: [foundBase.image, foundBase.image, foundBase.image, foundBase.image],
    details: [
        "Material: Premium Quality",
        "Design: Maya Exclusive",
        "Occasion: Versatile Wear",
        "Care: Dry Clean Only"
    ],
    similar: [
        { title: "Contemporary Bliss Saree", price: "1500.00", oldPrice: "2000", image: blissSaree },
        { title: "Traditional Motif Inspired Ethnic Dress", price: "1680.00", oldPrice: "2000", image: ethnicDress },
        { title: "Embroidery Cotton Kurta Set", price: "1680.00", oldPrice: "2000", image: cottonDress },
        { title: "Blossom Earrings", price: "1500.00", oldPrice: "2000", image: blossomEarrings }
    ]
  };

  const similarProducts = [
    { title: "Contemporary Bliss Saree", price: "1500.00", oldPrice: "2000", image: blissSaree },
    { title: "Modern Fusion Handloom Dress", price: "1500.00", oldPrice: "2000", image: modernDress },
    { title: "Traditional Motif Inspired Ethnic Dress", price: "1680.00", oldPrice: "2000", image: ethnicDress },
    { title: "Embroidery Cotton Kurta Set", price: "1680.00", oldPrice: "2000", image: cottonDress }
  ];

  return (
    <div className="product-detail-page">
      <div className="detail-container">
        <div className="back-btn-global" onClick={() => onNavigate('back')}>
            <ArrowLeft size={18} />
        </div>
        
        {/* Top Section */}
        <div className="product-main-section">
          {/* Photos */}
          <div className="product-media animate-scale opacity-0 delay-1">
            <div className="thumbnail-list">
              <img src={product.thumbnails[0]} alt="thumb" className="thumb-img active-thumb" />
              <img src={product.thumbnails[1]} alt="thumb" className="thumb-img" />
              <img src={product.thumbnails[2]} alt="thumb" className="thumb-img" />
              <img src={product.thumbnails[3]} alt="thumb" className="thumb-img" />
            </div>
            <div className="main-image-wrapper">
              <img src={product.image} alt={product.title} className="main-product-img" />
              <div className="wishlist-float-btn" onClick={() => onWishlist && onWishlist({ title: product.title, price: product.price.replace('Rs ', ''), image: product.image })}>
                <Heart size={20} fill={wishlist.some(w => w.title === product.title) ? "#ff0000" : "transparent"} stroke={wishlist.some(w => w.title === product.title) ? "#ff0000" : "#1a2433"} />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="product-info-column animate-right opacity-0 delay-2">
            <h1 className="product-title-large">{product.title}</h1>
            <p className="product-description-text">
              {product.desc}
            </p>
            
            <div className="product-rating-box">
              <span className="free-delivery-text">Free Delivery</span>
              <div className="stars-row">
                <Star size={12} fill="#eab308" stroke="#eab308" />
                <Star size={12} fill="#eab308" stroke="#eab308" />
                <Star size={12} fill="#eab308" stroke="#eab308" />
                <Star size={12} fill="#eab308" stroke="#eab308" />
                <StarHalf size={12} fill="#eab308" stroke="#eab308" />
                <span className="reviews-count">4.5 (20 reviews)</span>
              </div>
            </div>

            <div className="product-price-large">{product.price}</div>

            <div className="product-details-list">
              <h3 className="key-details-title">KEY DETAILS:</h3>
              <ul>
                {product.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="product-actions-bar">
              <div className="quantity-selector">
                <span>1</span>
                <div className="qty-arrows">
                  <ChevronUp size={12} />
                  <ChevronDown size={12} />
                </div>
              </div>
              <button className="add-cart-btn-large" onClick={() => { onAddToCart && onAddToCart({ title: product.title, price: product.price.replace('Rs ', ''), image: product.image }); }}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="similar-products-section animate-up opacity-0 delay-3">
          <h2 className="similar-title">EXPLORE SIMILAR</h2>
          <div className="similar-grid">
            {product.similar.map((p, i) => {
              const inWishlist = wishlist.some(w => w.title === p.title);
              return (
                <ProductCard 
                  key={i} 
                  {...p} 
                  heartFill={inWishlist ? '#ff0000' : 'transparent'}
                  heartStroke={inWishlist ? '#ff0000' : '#1a2433'}
                  onAddToCart={() => onAddToCart && onAddToCart(p)}
                  onWishlist={() => onWishlist && onWishlist(p)}
                  onClick={() => {
                      if (onNavigate) {
                          onNavigate('shop-description', p.title);
                      }
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-detail-page {
          background-color: #f2ebe1;
          padding: 4rem 0 8rem 0;
          min-height: 100vh;
        }
        .detail-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }

        /* Top Section */
        .product-main-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 8rem;
        }

        /* Media */
        .product-media {
          display: flex;
          gap: 1.5rem;
          height: 600px;
        }
        .thumbnail-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 90px;
          flex-shrink: 0;
        }
        .thumb-img {
          width: 100%;
          height: 110px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.7;
          border: 2px solid transparent;
        }
        .active-thumb {
          opacity: 1;
          border-color: #1a2433;
        }
        .main-image-wrapper {
          flex-grow: 1;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        .main-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .wishlist-float-btn {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          cursor: pointer;
        }

        /* Info */
        .product-info-column {
          padding-top: 1rem;
          color: #1a2433;
          font-family: 'Outfit', sans-serif;
        }
        .product-title-large {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        .product-description-text {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 2rem;
          max-width: 90%;
        }
        .product-rating-box {
          margin-bottom: 2rem;
        }
        .free-delivery-text {
          display: block;
          font-size: 0.85rem;
          margin-bottom: 0.4rem;
          color: #555;
        }
        .stars-row {
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        .reviews-count {
          font-size: 0.8rem;
          color: #555;
          margin-left: 0.5rem;
        }

        .product-price-large {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
        }

        .product-details-list {
          margin-bottom: 3rem;
        }
        .key-details-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .product-details-list ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .product-details-list li {
          font-size: 1rem;
          color: #2a3a4c;
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1rem;
        }
        .product-details-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #2a3a4c;
        }

        /* Actions */
        .product-actions-bar {
          display: flex;
          gap: 1.5rem;
          align-items: stretch;
          height: 52px;
        }
        .quantity-selector {
          width: 80px;
          background: #2a3a4c;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
        }
        .qty-arrows {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .add-cart-btn-large {
          flex: 1;
          background: #2a3a4c;
          color: white;
          border: none;
          border-radius: 6px;
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: background 0.3s;
        }
        .add-cart-btn-large:hover {
          background: #1a2433;
        }

        /* Similar Products */
        .similar-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a2433;
          margin-bottom: 2.5rem;
          letter-spacing: 0.05em;
        }
        .similar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .product-main-section { gap: 2rem; }
          .similar-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .product-main-section { grid-template-columns: 1fr; }
          .product-media { height: auto; aspect-ratio: 1; }
        }
        @media (max-width: 768px) {
          .similar-grid { grid-template-columns: repeat(2, 1fr); }
          .detail-container { padding: 0 2rem; }
        }
        @media (max-width: 480px) {
          .similar-grid { grid-template-columns: 1fr; }
          .product-media { flex-direction: column-reverse; }
          .thumbnail-list { flex-direction: row; width: 100%; height: 80px; }
          .thumb-img { height: 100%; width: auto; aspect-ratio: 1; }
        }
      `}} />
    </div>
  );
};

export default ShopDescription;
