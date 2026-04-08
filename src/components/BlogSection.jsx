import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import b1 from '../assets/53eb08a11816095cc7482f0173617fba.png';
import b2 from '../assets/86ba3fe0e15b5ea6f9c5a2ee70100958.png';
import b3 from '../assets/4efaf9972a120c416092913a9865e1a4.png';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';

const BlogCard = ({ image, title, excerpt, isDarkButton, onClick, index }) => (
  <div className={`blog-card animate-up opacity-0 delay-${(index % 3) + 1}`} onClick={onClick} style={{ cursor: 'pointer' }}>
    <div className="blog-img-wrapper">
      <img src={image} alt={title} />
      <button className={`read-more-btn ${isDarkButton ? 'dark' : ''}`}>
        <ArrowRight size={20} />
      </button>
    </div>
    <div className="blog-content">
      <h3 className="blog-title">{title}</h3>
      <p className="blog-excerpt">{excerpt}</p>
    </div>
  </div>
);

const BlogSection = ({ onNavigate }) => {
    const commonExcerpt = "Discover the tips and tricks to make your favorite fragrances last all day. From proper application techniques to fragrance layering, we reveal the secrets of scent longevity.";
    
    const posts = [
        {
            image: b1,
            title: "THE ART OF HANDLOOM: EXPLORING THE CRAFTSMANSHIP BEHIND OUR PRODUCTS",
            excerpt: commonExcerpt,
            isDarkButton: false
        },
        {
            image: b2,
            title: "THE ELEGANCE OF SUSTAINABLE FASHION: HOW TO BUILD AN ECO-FRIENDLY WARDROBE",
            excerpt: commonExcerpt,
            isDarkButton: true
        },
        {
            image: b3,
            title: "BEHIND THE SCENES: A DAY IN THE LIFE OF A HANDLOOM ARTISAN",
            excerpt: commonExcerpt,
            isDarkButton: false
        }
    ];

    return (
        <section className="section-padding blog-section-main" style={{ backgroundColor: '#f2ebe1' }}>
            <div className="container">
                <div className="section-header-blog animate-fade opacity-0">
                  <h2 className="blog-main-heading">FROM OUR BLOG</h2>
                  <button 
                    onClick={() => onNavigate('blog')} 
                    className="blog-view-all"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    VIEW ALL -- &gt;
                  </button>
                </div>
                <div className="blog-grid-layout">
                    {posts.map((p, i) => (
                        <BlogCard 
                            key={i} 
                            index={i}
                            {...p} 
                            onClick={() => onNavigate('blog-detail')} 
                        />
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
                .blog-section-main { padding: 2rem 2rem 4rem 2rem; }
                .section-header-blog {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 4rem;
                }
                .blog-main-heading {
                  font-family: 'Outfit', sans-serif;
                  font-size: 1.8rem;
                  font-weight: 500;
                  color: #1a2433;
                  letter-spacing: 0.1em;
                }
                .blog-view-all {
                  font-family: 'Outfit', sans-serif;
                  font-size: 0.85rem;
                  font-weight: 500;
                  color: #1a2433;
                  text-decoration: none;
                  letter-spacing: 0.1em;
                  opacity: 0.8;
                  transition: opacity 0.3s;
                }
                .blog-view-all:hover { opacity: 1; }
                .blog-grid-layout {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2.5rem;
                }
                .blog-card {
                    background: transparent;
                    display: flex;
                    flex-direction: column;
                }
                .blog-img-wrapper {
                    position: relative;
                    height: 380px;
                    overflow: hidden;
                    border-radius: 16px;
                    margin-bottom: 2rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .blog-img-wrapper img { width: 100%; height: 100%; object-fit: cover; }
                .read-more-btn {
                    position: absolute;
                    bottom: 1.5rem;
                    right: 1.5rem;
                    background: #eeede7;
                    width: 50px; height: 50px;
                    border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                    color: #1a2433;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }
                .read-more-btn.dark {
                    background: #1a2433;
                    color: #fff;
                }
                .read-more-btn:hover { transform: scale(1.05); }
                .blog-title { 
                  font-size: 1.15rem; 
                  margin-bottom: 1.2rem; 
                  line-height: 1.4; 
                  color: #1a2433; 
                  font-family: 'Outfit', sans-serif; 
                  font-weight: 500; 
                  letter-spacing: 0.01em;
                  text-transform: uppercase;
                }
                .blog-excerpt { 
                  font-size: 0.85rem; 
                  color: #777; 
                  line-height: 1.6; 
                  font-style: italic;
                  font-family: 'Outfit', sans-serif;
                  font-weight: 300;
                  opacity: 0.9;
                }
                @media (max-width: 992px) { 
                  .blog-grid-layout { grid-template-columns: repeat(2, 1fr); } 
                }
                @media (max-width: 640px) { 
                  .blog-grid-layout { grid-template-columns: 1fr; } 
                  .blog-main-heading { font-size: 1.4rem; }
                }
            `}} />
        </section>
    );
};

import t1 from '../assets/c47f3524a171f0188fb010906a352fe0.png';
import t2 from '../assets/blog1_img.png';
import t3 from '../assets/1cb7be1228669bc62398632533bd1d87.png';

const Testimonials = () => {
    const reviews = [
        {
            name: "MEERA L.",
            image: t1,
            text: "I purchased the Saudarya Pushpa Kundan Earrings for my wife, and it exceeded all expectations. The design is stunning, and the quality is evident. The matching Shanti Samanjasya Necklace completes the set perfectly. It's a timeless gift that she adores. Thank you for creating such beautiful jewelry!",
            rating: 4
        },
        {
            name: "PRIYA M.",
            image: t2,
            text: "I'm absolutely enchanted by the Saudarya Pushpa Kundan Earrings and Shanti Samanjasya Necklace set! The craftsmanship is exquisite, and the delicate details truly make these pieces a work of art. They're the perfect accessories to elevate any outfit. I'm receiving compliments every time I wear them.",
            rating: 4
        },
        {
            name: "",
            image: t3,
            text: "",
            rating: 0
        }
    ];

    const StarRating = ({ rating }) => {
        return (
            <div className="stars">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={16} 
                        fill={i < rating ? "#1a2433" : "transparent"} 
                        stroke={i < rating ? "none" : "#1a2433"} 
                        color="#1a2433"
                        strokeWidth={1.5}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="testimonials-section-main" style={{ backgroundColor: '#A59E8B2B' }}>
            <div className="container-scroll">
                <h2 className="testimonials-main-heading animate-fade opacity-0">WHAT PEOPLE SAY ABOUT US.</h2>
                <div className="testimonial-scroll-container">
                    {reviews.map((r, i) => (
                        <div key={i} className={`testimonial-card-v3 animate-right opacity-0 delay-${(i % 3) + 1}`}>
                            <div className="testimonial-img-box-v3">
                                <img src={r.image} alt={r.name} className="testimonial-user-img" />
                            </div>
                            <div className="testimonial-content-v3">
                                <h4 className="testimonial-user-name">{r.name}</h4>
                                <p className="testimonial-review-text">{r.text}</p>
                                {r.rating > 0 && <StarRating rating={r.rating} />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
                .testimonials-section-main { 
                    padding: 2rem 0; /* Removing side padding for the scrollable container */
                    width: 100%;
                    overflow: hidden;
                }
                .container-scroll {
                    max-width: 1582px; /* Exact width from requirements */
                    margin: 0 auto;
                    padding-left: 146px; /* Left offset from requirements */
                }
                .testimonials-main-heading {
                    font-family: 'Outfit', sans-serif;
                    font-size: 2.2rem;
                    font-weight: 500;
                    color: #1a2433;
                    margin-bottom: 3rem;
                    letter-spacing: 0.02em;
                }
                .testimonial-scroll-container {
                    display: flex;
                    gap: 3.5rem;
                    overflow-x: auto;
                    scroll-behavior: smooth;
                    padding-bottom: 2rem;
                    height: 230px; /* Exact height from requirements */
                    scrollbar-width: none; /* Firefox */
                    -ms-overflow-style: none; /* IE/Edge */
                }
                .testimonial-scroll-container::-webkit-scrollbar {
                    display: none; /* Chrome/Safari */
                }
                .testimonial-card-v3 {
                    display: flex;
                    gap: 1.5rem;
                    align-items: flex-start;
                    flex-shrink: 0;
                    width: 550px; /* Allowing enough width for the content */
                }
                .testimonial-img-box-v3 {
                    flex-shrink: 0;
                    width: 120px;
                    height: 160px;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                }
                .testimonial-user-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .testimonial-content-v3 {
                    flex-grow: 1;
                    padding-top: 0.2rem;
                }
                .testimonial-user-name {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.3rem;
                    font-weight: 500;
                    color: #1a2433;
                    margin-bottom: 0.5rem;
                    letter-spacing: 0.05em;
                }
                .testimonial-review-text {
                    font-family: 'Poppins', sans-serif;
                    font-size: 16px;
                    color: #333;
                    line-height: 1.3;
                    margin-bottom: 0.8rem;
                    font-weight: 400;
                    opacity: 0.9;
                    max-width: 510px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3; /* Ensuring it fits in the 230px height */
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .stars {
                    display: flex;
                    gap: 4px;
                }
                @media (max-width: 1600px) {
                    .container-scroll { padding-left: 2rem; }
                    .testimonial-card-v3 { width: 480px; }
                }
                @media (max-width: 768px) {
                    .testimonials-main-heading { font-size: 1.8rem; margin-bottom: 2rem; }
                    .testimonial-card-v3 { width: 350px; gap: 1rem; }
                    .testimonial-img-box-v3 { width: 100px; height: 130px; }
                }
            `}} />
        </section>
    );
};

export default BlogSection;
export { Testimonials };
