import React from 'react';
import { Search, ChevronDown, Heart, ArrowLeft } from 'lucide-react';
import { ProductCard } from './ProductGrid';

// Assets
import silkSaree from '../assets/silk_saree.png';
import blissSaree from '../assets/bliss_saree.png';
import cottonDress from '../assets/cotton_dress.png';
import silkKurta from '../assets/53eb08a11816095cc7482f0173617fba.png';
import modernDress from '../assets/86ba3fe0e15b5ea6f9c5a2ee70100958.png';
import ethnicDress from '../assets/dress.png';
import lounge1 from '../assets/towel.png';
import lounge2 from '../assets/4efaf9972a120c416092913a9865e1a4.png';
import earrings from '../assets/earrings.png';
import necklace from '../assets/necklace.png';
import blossomEarrings from '../assets/1cb7be1228669bc62398632533bd1d87.png';
import twistCollar from '../assets/fbd17fba0ac365da5cb6e945d52ec98f.png';

// Categories Assets
import catAll from '../assets/rectangle1.png';
import catSaree from '../assets/user1.png';
import catKurta from '../assets/user2.png';
import catDress from '../assets/rectangle2.png';
import catLounge from '../assets/4efaf9972a120c416092913a9865e1a4.png';
import catAcc from '../assets/1cb7be1228669bc62398632533bd1d87.png';

const ShopPage = ({ onNavigate, onAddToCart, onWishlist, wishlist = [] }) => {
    const [selectedCategory, setSelectedCategory] = React.useState("ALL");
    const [searchQuery, setSearchQuery] = React.useState("");
    const [sortOrder, setSortOrder] = React.useState("default");

    const categories = [
        { name: "HANDWOVEN SAREES", filter: "HANDWOVEN SAREES", image: catSaree },
        { name: "HANDLOOM KURTA & KURTA SETS", filter: "HANDLOOM KURTA & KURTA SETS", image: catKurta },
        { name: "ETHNIC DRESSES", filter: "ETHNIC DRESSES", image: catDress },
        { name: "SUSTAINABLE LOUNGEWEAR", filter: "SUSTAINABLE LOUNGEWEAR", image: catLounge },
        { name: "HANDCRAFTED ACCESSORIES", filter: "HANDCRAFTED ACCESSORIES", image: catAcc },
        { name: "ALL", filter: "ALL", image: catAll }
    ];

    const allProducts = [
        { title: "Silk Elegance Saree", oldPrice: "3000", price: "2680.00", image: silkSaree, category: "HANDWOVEN SAREES" },
        { title: "Contemporary Bliss Saree", oldPrice: "2000", price: "1500.00", image: blissSaree, category: "HANDWOVEN SAREES" },
        { title: "Embroidery Cotton Kurta Set", oldPrice: "2000", price: "1680.00", image: cottonDress, category: "HANDLOOM KURTA & KURTA SETS" },
        { title: "Silk Kurta Ensemble", oldPrice: "3000", price: "2680.00", image: silkKurta, category: "HANDLOOM KURTA & KURTA SETS" },
        { title: "Modern Fusion Handloom Dress", oldPrice: "2000", price: "1500.00", image: modernDress, category: "ETHNIC DRESSES" },
        { title: "Traditional Motif Inspired Ethnic Dress", oldPrice: "2000", price: "1680.00", image: ethnicDress, category: "ETHNIC DRESSES" },
        { title: "Cozy Comfort Organic Cotton Loungewear", oldPrice: "3000", price: "2680.00", image: lounge1, category: "SUSTAINABLE LOUNGEWEAR" },
        { title: "Versatile Neutral Tones Loungewear Set", oldPrice: "2000", price: "1500.00", image: lounge2, category: "SUSTAINABLE LOUNGEWEAR" },
        { title: "Blossom Earrings", oldPrice: "2000", price: "1500.00", image: blossomEarrings, category: "HANDCRAFTED ACCESSORIES" },
        { title: "Samanjasya Necklace", oldPrice: "3000", price: "2680.00", image: necklace, category: "HANDCRAFTED ACCESSORIES" },
        { title: "Harmony Twist Collar", oldPrice: "2000", price: "1680.00", image: twistCollar, category: "HANDCRAFTED ACCESSORIES" },
        { title: "Celestia Drops", oldPrice: "2000", price: "1680.00", image: earrings, category: "HANDCRAFTED ACCESSORIES" }
    ];

    let filteredProducts = allProducts.filter(p => {
        const matchesCategory = selectedCategory === "ALL" || p.category === selectedCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (sortOrder === "price-asc") {
        filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOrder === "price-desc") {
        filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortOrder === "name-asc") {
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "name-desc") {
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    // Sort categories so that the selected one is always first
    const displayCategories = [...categories].sort((a, b) => {
        if (a.filter === selectedCategory) return -1;
        if (b.filter === selectedCategory) return 1;
        return 0;
    });

    return (
        <div className="shop-page">
            <div className="shop-container">
                <div className="back-btn-global" onClick={() => onNavigate('back')}>
                    <ArrowLeft size={18} />
                </div>
                {/* Search and Sort */}
                <div className="shop-controls animate-down opacity-0 delay-1">
                    <div className="search-bar">
                        <Search size={18} className="search-icon" />
                        <input 
                            type="text" 
                            placeholder="Search here" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="sort-dropdown-container">
                        <select 
                            className="sort-select"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="default">Sort: Default</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="name-asc">Name: A to Z</option>
                            <option value="name-desc">Name: Z to A</option>
                        </select>
                        <ChevronDown size={18} className="sort-chevron" />
                    </div>
                </div>

                {/* Categories */}
                <div className="categories-grid">
                    {displayCategories.map((cat, i) => (
                        <div 
                            key={cat.filter} 
                            className={`category-card animate-scale opacity-0 delay-${(i % 5) + 1} ${selectedCategory === cat.filter ? 'active-category' : ''}`} 
                            style={{ backgroundImage: `url(${cat.image})` }}
                            onClick={() => setSelectedCategory(cat.filter)}
                        >
                            <div className="category-overlay">
                                <span>{cat.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="shop-products-grid">
                    {filteredProducts.map((p, i) => {
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

            <style dangerouslySetInnerHTML={{ __html: `
                .shop-page {
                    background-color: #f2ebe1;
                    padding: 3rem 0;
                    min-height: 100vh;
                }
                .shop-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 4rem;
                }
                .shop-controls {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 2.5rem;
                    gap: 1.5rem;
                }
                .search-bar {
                    flex: 1;
                    max-width: 500px;
                    display: flex;
                    align-items: center;
                    background: white;
                    border: 1px solid #e0dfd5;
                    border-radius: 4px;
                    padding: 0.8rem 1.2rem;
                    gap: 0.8rem;
                }
                .search-icon { color: #555; }
                .search-bar input {
                    border: none;
                    outline: none;
                    width: 100%;
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.95rem;
                    color: #1a2433;
                }
                .sort-dropdown-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    background: white;
                    border: 1px solid #e0dfd5;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .sort-select {
                    appearance: none;
                    background: transparent;
                    border: none;
                    outline: none;
                    padding: 0.8rem 3rem 0.8rem 1.2rem;
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.95rem;
                    color: #1a2433;
                    width: 100%;
                    cursor: pointer;
                }
                .sort-chevron {
                    position: absolute;
                    right: 1.2rem;
                    pointer-events: none;
                    color: #1a2433;
                }

                .categories-grid {
                    display: flex;
                    justify-content: space-between;
                    gap: 1.2rem;
                    margin-bottom: 3.5rem;
                    flex-wrap: nowrap; /* Avoid wrapping if possible, but handle overflow by content */
                    overflow: visible; /* Ensure it stays in layout */
                }
                .category-card {
                    flex: 1;
                    height: 140px;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: pointer;
                    border: 2px solid transparent;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .category-card:hover { 
                    transform: scale(1.03); 
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                }
                .active-category {
                    border-color: #1a2433;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                }
                .category-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    padding: 1rem;
                    transition: all 0.3s ease;
                }
                .category-card:hover .category-overlay { background: rgba(0,0,0,0.6); }
                .category-overlay span {
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }

                .shop-products-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1.5rem;
                }

                @media (max-width: 1024px) {
                    .categories-grid { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
                }
                @media (max-width: 768px) {
                    .shop-products-grid { grid-template-columns: repeat(2, 1fr); }
                    .shop-controls { flex-direction: column; }
                    .search-bar { max-width: 100%; }
                    .categories-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 480px) {
                    .shop-products-grid { grid-template-columns: 1fr; }
                    .categories-grid { grid-template-columns: 1fr; }
                }
            `}} />
        </div>
    );
};

export default ShopPage;
