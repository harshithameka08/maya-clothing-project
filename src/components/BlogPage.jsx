import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import blogP1 from '../assets/blog_p1.png';
import blogP2 from '../assets/blog_p2.png';
import blogP3 from '../assets/blog_p3.png';

const BlogCard = ({ image, title, description, isDark, onClick, index }) => (
    <div className={`blog-card-v2 animate-up opacity-0 delay-${(index % 3) + 1}`} onClick={onClick} style={{ cursor: 'pointer' }}>
        <div className="blog-image-box">
            <img src={image} alt={title} className="blog-img" />
            <button className={`blog-arrow-btn ${isDark ? 'dark' : ''}`}>
                <ArrowRight size={22} />
            </button>
        </div>
        <div className="blog-text-box">
            <h3 className="blog-card-title">{title}</h3>
            <p className="blog-card-desc">{description}</p>
        </div>
    </div>
);

const BlogPage = ({ onNavigate }) => {
    const blogs = [
        {
            image: blogP1,
            title: "THE ART OF HANDLOOM: EXPLORING THE CRAFTSMANSHIP BEHIND OUR PRODUCTS",
            description: "Discover the tips and tricks to make your favorite fragrances last all day. From proper application techniques to fragrance layering, we reveal the secrets of scent longevity.",
            isDark: false
        },
        {
            image: blogP2,
            title: "THE ELEGANCE OF SUSTAINABLE FASHION: HOW TO BUILD AN ECO-FRIENDLY WARDROBE",
            description: "Discover the tips and tricks to make your favorite fragrances last all day. From proper application techniques to fragrance layering, we reveal the secrets of scent longevity.",
            isDark: true
        },
        {
            image: blogP3,
            title: "BEHIND THE SCENES: A DAY IN THE LIFE OF A HANDLOOM ARTISAN",
            description: "Discover the tips and tricks to make your favorite fragrances last all day. From proper application techniques to fragrance layering, we reveal the secrets of scent longevity.",
            isDark: false
        }
    ];

    return (
        <div className="blog-page-outer">
            <div className="blog-page-inner">
                <div className="back-btn-global animate-right opacity-0" onClick={() => onNavigate('back')}>
                    <ArrowLeft size={18} />
                </div>
                <h1 className="blog-page-heading animate-right opacity-0 delay-1">BLOGS</h1>
                <div className="blog-cards-grid">
                    {blogs.map((blog, index) => (
                        <BlogCard 
                            key={index}
                            index={index}
                            {...blog} 
                            onClick={() => onNavigate('blog-detail')} 
                        />
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .blog-page-outer {
                    background-color: #f2ebe1;
                    padding: 4rem 0;
                    min-height: 100vh;
                }
                .blog-page-inner {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 4rem;
                }
                .blog-page-heading {
                    font-family: 'Outfit', sans-serif;
                    font-size: 2.2rem;
                    font-weight: 500;
                    color: #1a2433;
                    margin-bottom: 3.5rem;
                    letter-spacing: 0.05em;
                    padding-left: 0.5rem;
                }
                .blog-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 3rem;
                }
                .blog-card-v2 {
                    display: flex;
                    flex-direction: column;
                }
                .blog-image-box {
                    position: relative;
                    height: 380px;
                    border-radius: 24px;
                    overflow: hidden;
                    margin-bottom: 2rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
                }
                .blog-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .blog-image-box:hover .blog-img {
                    transform: scale(1.04);
                }
                .blog-arrow-btn {
                    position: absolute;
                    bottom: 1.5rem;
                    right: 1.5rem;
                    width: 60px;
                    height: 45px;
                    border-radius: 12px;
                    background: #eeede7;
                    color: #1a2433;
                    display: flex; align-items: center; justify-content: center;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }
                .blog-arrow-btn.dark {
                    background: #1a2433;
                    color: #fff;
                }
                .blog-arrow-btn:hover {
                    transform: translateY(-2px) scale(1.02);
                }
                .blog-text-box {
                    padding: 0 0.5rem;
                }
                .blog-card-title {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.35rem;
                    font-weight: 500;
                    color: #1a2433;
                    margin-bottom: 1rem;
                    line-height: 1.35;
                    letter-spacing: 0.01em;
                    text-transform: uppercase;
                }
                .blog-card-desc {
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.95rem;
                    color: #777;
                    line-height: 1.7;
                    font-weight: 300;
                    font-style: italic;
                    letter-spacing: 0.01em;
                }
                @media (max-width: 1024px) {
                    .blog-cards-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 768px) {
                    .blog-page-inner { padding: 0 2rem; }
                    .blog-cards-grid { grid-template-columns: 1fr; }
                    .blog-page-heading { font-size: 1.8rem; margin-bottom: 2rem; }
                }
            `}} />
        </div>
    );
};

export default BlogPage;
