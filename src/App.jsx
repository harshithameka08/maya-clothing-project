import React, { useState } from 'react';
import { X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import AboutSection, { Gallery } from './components/AboutSection';
import BlogSection, { Testimonials } from './components/BlogSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ShopPage from './components/ShopPage';
import BlogPage from './components/BlogPage';
import BlogExplanation from './components/BlogExplanation';
import FAQsPage from './components/FAQsPage';
import ContactPage from './components/ContactPage';
import WishlistPage from './components/WishlistPage';
import ShopDescription from './components/ShopDescription';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import PaymentPage from './components/PaymentPage';
import ConfirmationPage from './components/ConfirmationPage';
import OrderSuccessPage from './components/OrderSuccessPage';
import LoginPage from './components/LoginPage';

// Assets from user-provided files
import earringsImg from './assets/earrings.png';
import necklaceImg from './assets/necklace.png';
import silkSareeImg from './assets/silk_saree.png';
import blissSareeImg from './assets/bliss_saree.png';
import cottonDressImg from './assets/cotton_dress.png';
import dressImg from './assets/dress.png';

const App = () => {
    const [view, setView] = useState('home');
    const [selectedProductTitle, setSelectedProductTitle] = useState(null);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [sizeModalProduct, setSizeModalProduct] = useState(null);
    const [viewHistory, setViewHistory] = useState([{ view: 'home', payload: null }]);
    const [checkoutFormData, setCheckoutFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        stateRegion: '',
        address: '',
        phone: ''
    });
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cod');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleNavigate = (newView, payload = null) => {
        if (newView === 'back') {
            setViewHistory(prev => {
                if (prev.length <= 1) return prev;
                const newHistory = [...prev];
                newHistory.pop();
                const previousState = newHistory[newHistory.length - 1];
                setView(previousState.view);
                if (previousState.payload) setSelectedProductTitle(previousState.payload);
                window.scrollTo(0, 0);
                return newHistory;
            });
            return;
        }

        setViewHistory(prev => [...prev, { view: newView, payload }]);
        setView(newView);
        if (payload) setSelectedProductTitle(payload);
        window.scrollTo(0, 0);
    };

    const addToCart = (product) => {
        if (!isLoggedIn) {
            setShowLoginModal(true);
            return;
        }
        const needsSize = product.category === "ETHNIC DRESSES" || 
                          product.category === "HANDLOOM KURTA & KURTA SETS" || 
                          product.category === "SUSTAINABLE LOUNGEWEAR" || 
                          (product.title && product.title.toLowerCase().includes('dress')) || 
                          (product.title && product.title.toLowerCase().includes('kurta')) ||
                          (product.title && product.title.toLowerCase().includes('loungewear'));

        if (needsSize && !product.size) {
            setSizeModalProduct(product);
            return;
        }

        const productIdentifier = product.size ? `${product.title}-${product.size}` : product.title;

        setCart(prev => {
            const exists = prev.find(p => (p.cartId || p.title) === productIdentifier);
            if (exists) {
                return prev.map(p => (p.cartId || p.title) === productIdentifier ? { ...p, qty: (p.qty || 1) + 1 } : p);
            }
            return [...prev, { ...product, qty: 1, cartId: productIdentifier }];
        });
        handleNavigate('cart');
    };

    const handleSizeSelect = (size) => {
        if (sizeModalProduct) {
            addToCart({ ...sizeModalProduct, size });
            setSizeModalProduct(null);
        }
    };

    const updateQty = (cartId, delta) => {
        setCart(prev => {
            return prev.map(p => {
                const currentId = p.cartId || p.title;
                if (currentId === cartId) {
                    const currentQty = p.qty !== undefined ? p.qty : 1;
                    return { ...p, qty: currentQty + delta };
                }
                return p;
            }).filter(p => p.qty > 0);
        });
    };

    const removeFromCart = (cartId) => {
        setCart(prev => prev.filter(p => (p.cartId || p.title) !== cartId));
    };

    const toggleWishlist = (product) => {
        if (!isLoggedIn) {
            setShowLoginModal(true);
            return;
        }
        setWishlist(prev => {
            const exists = prev.find(p => p.title === product.title);
            if (exists) return prev.filter(p => p.title !== product.title);
            return [...prev, product];
        });
    };

    const newArrivals = [
        { image: earringsImg, title: "Celestia Drops", price: "1680.00", oldPrice: "2000" },
        { image: necklaceImg, title: "Samanjasya Necklace", price: "2680.00", oldPrice: "3000" },
        { image: blissSareeImg, title: "Contemporary Bliss Saree", price: "1500.00", oldPrice: "2000" },
        { image: cottonDressImg, title: "Embroidery cotton tunic set", price: "1800.00", oldPrice: "2200" }
    ];

    const bestSellers = [
        { image: silkSareeImg, title: "Silk Elegance Saree", price: "2680.00", oldPrice: "3000" },
        { image: cottonDressImg, title: "Embroidery Cotton Kurta Set", price: "1680.00", oldPrice: "2000" },
        { image: necklaceImg, title: "Samanjasya Necklace", price: "2680.00", oldPrice: "3000" },
        { image: dressImg, title: "Handloom Ethnic Dress", price: "1800.00", oldPrice: "2000" }
    ];

    return (
        <div className="maya-app">
            <Navbar 
                onNavigate={handleNavigate} 
                cartCount={cart.reduce((acc, c) => acc + (c.qty !== undefined ? c.qty : 1), 0)} 
                wishlistCount={wishlist.length} 
                currentView={view}
            />

            {view === 'home' && (
                <>
                    <Hero onNavigate={handleNavigate} />
                    <ProductGrid 
                        title="NEW ARRIVALS" 
                        products={newArrivals.map(p => ({ 
                            ...p, 
                            heartFill: wishlist.some(w => w.title === p.title) ? '#ff0000' : 'transparent', 
                            heartStroke: wishlist.some(w => w.title === p.title) ? '#ff0000' : '#1a2433' 
                        }))} 
                        onShopAll={() => handleNavigate('shop')} 
                        onAddToCart={addToCart} 
                        onWishlist={toggleWishlist}
                        onProductClick={(title) => handleNavigate('shop-description', title)}
                        isScroll={true}
                    />
                    <Features />
                    <AboutSection onNavigate={handleNavigate} />
                    <ProductGrid 
                        title="BEST SELLERS" 
                        products={bestSellers.map(p => ({ 
                            ...p, 
                            heartFill: wishlist.some(w => w.title === p.title) ? '#ff0000' : 'transparent', 
                            heartStroke: wishlist.some(w => w.title === p.title) ? '#ff0000' : '#1a2433' 
                        }))} 
                        onShopAll={() => handleNavigate('shop')} 
                        onAddToCart={addToCart} 
                        onWishlist={toggleWishlist}
                        onProductClick={(title) => handleNavigate('shop-description', title)}
                        isScroll={true}
                    />
                    <Gallery />
                    <BlogSection onNavigate={handleNavigate} />
                    <Testimonials />
                </>
            )}

            {view === 'about' && (
                <AboutPage onNavigate={handleNavigate} />
            )}

            {view === 'shop' && (
                <ShopPage 
                    onNavigate={handleNavigate} 
                    onAddToCart={addToCart} 
                    onWishlist={toggleWishlist}
                    wishlist={wishlist}
                />
            )}

            {view === 'shop-description' && (
                <ShopDescription 
                    productTitle={selectedProductTitle} 
                    onNavigate={handleNavigate} 
                    onAddToCart={addToCart}
                    onWishlist={toggleWishlist}
                    wishlist={wishlist}
                />
            )}

            {view === 'blog' && (
                <BlogPage onNavigate={handleNavigate} />
            )}

            {view === 'blog-detail' && (
                <BlogExplanation onBack={handleNavigate} />
            )}

            {view === 'faqs' && (
                <FAQsPage onNavigate={handleNavigate} />
            )}

            {view === 'contact' && (
                <ContactPage onNavigate={handleNavigate} />
            )}

            {view === 'wishlist' && (
                <WishlistPage 
                    onBack={handleNavigate} 
                    items={wishlist}
                    onAddToCart={addToCart}
                    onRemove={toggleWishlist}
                />
            )}

            {view === 'cart' && (
                <CartPage 
                    onNavigate={handleNavigate} 
                    cart={cart}
                    updateQty={updateQty}
                    removeFromCart={removeFromCart}
                    onAddToCart={addToCart}
                    onWishlist={toggleWishlist}
                    wishlist={wishlist}
                />
            )}

            {view === 'checkout' && (
                <CheckoutPage 
                    onNavigate={handleNavigate} 
                    cart={cart}
                    formData={checkoutFormData}
                    setFormData={setCheckoutFormData}
                />
            )}

            {view === 'payment' && (
                <PaymentPage 
                    onNavigate={handleNavigate} 
                    cart={cart}
                    selectedMethod={selectedPaymentMethod}
                    setSelectedMethod={setSelectedPaymentMethod}
                />
            )}

            {view === 'confirmation' && (
                <ConfirmationPage 
                    onNavigate={handleNavigate} 
                    cart={cart}
                    updateQty={updateQty}
                    removeFromCart={removeFromCart}
                    paymentMethod={selectedPaymentMethod}
                />
            )}

            {view === 'order-success' && (
                <OrderSuccessPage onNavigate={handleNavigate} />
            )}

            {sizeModalProduct && (
                <div className="size-modal-overlay" onClick={() => setSizeModalProduct(null)}>
                    <div className="size-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={() => setSizeModalProduct(null)}><X size={20} /></button>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem", marginBottom: "0.5rem" }}>SELECT SIZE</h2>
                        <p style={{ color: "#555", marginBottom: "2rem" }}>{sizeModalProduct.title}</p>
                        <div className="size-options">
                            {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map(sz => (
                                <button key={sz} className="size-btn" onClick={() => handleSizeSelect(sz)}>{sz}</button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {view !== 'order-success' && <Footer onNavigate={handleNavigate} />}

            <LoginPage 
                isOpen={showLoginModal} 
                onClose={() => setShowLoginModal(false)}
                onLogin={() => setIsLoggedIn(true)}
            />

            <style dangerouslySetInnerHTML={{
                __html: `
                .maya-app {
                    background-color: #fdfaf3;
                    min-height: 100vh;
                }
                .size-modal-overlay {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    animation: fadeIn 0.3s ease forwards;
                }
                .size-modal-content {
                    background: white;
                    padding: 3rem 2rem;
                    border-radius: 12px;
                    width: 90%;
                    max-width: 400px;
                    text-align: center;
                    position: relative;
                    animation: slideUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                }
                .close-modal-btn {
                    position: absolute;
                    top: 1rem; right: 1rem;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    color: #555;
                }
                .size-options {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    justify-content: center;
                }
                .size-btn {
                    width: 50px;
                    height: 50px;
                    border: 1px solid #1a2433;
                    background: transparent;
                    color: #1a2433;
                    font-weight: 600;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .size-btn:hover {
                    background: #1a2433;
                    color: white;
                }
            `}} />
        </div>
    );
};

export default App;


