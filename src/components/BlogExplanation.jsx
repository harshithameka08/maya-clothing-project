import React from 'react';
import { ArrowLeft } from 'lucide-react';
import blogImg from '../assets/blog_p1.png';

const BlogExplanation = ({ onBack }) => {
    return (
        <div className="blog-explanation-container">
            <div className="blog-explanation-inner">
                <div className="back-btn-text" onClick={() => onBack('back')}>
                    <ArrowLeft size={16} strokeWidth={2.5} /> 
                    <span>All Posts</span>
                </div>

                <h1 className="blog-title">THE ART OF HANDLOOM: EXPLORING THE CRAFTSMANSHIP BEHIND CLOTHING'S PRODUCTS</h1>
                
                <img src={blogImg} alt="Blog Cover" className="blog-hero-image" />

                <div className="blog-content">
                    <p className="blog-intro">At Clothing, we believe that every thread tells a story, and behind each exquisite piece lies the rich tapestry of handloom craftsmanship. In this blog, let's embark on a journey to unravel the artistry, dedication, and heritage that breathe life into our handwoven products.</p>

                    <h2 className="blog-section-title">THE HERITAGE WE WEAVE</h2>
                    <p className="blog-text">Handloom weaving is not just a skill; it's a tradition passed down through generations, a living heritage that connects us to our roots. Our artisans, often from artisanal communities with a deep history of weaving, bring centuries-old techniques into the modern era. Each thread they weave is a testament to their craftsmanship and a continuation of a legacy.</p>

                    <h2 className="blog-section-title">METICULOUS CRAFTSMANSHIP</h2>
                    <p className="blog-text">The creation of a handwoven masterpiece involves a meticulous process that starts with selecting the finest raw materials. Whether it's the pure silk for our sarees or the organic cotton for our loungewear, every material is chosen with care, ensuring quality and sustainability.</p>
                    
                    <p className="blog-text">The loom becomes the artist's canvas, and the weaver, the painter. Every movement, every shuttle thrown, is a stroke of creativity. The rhythmic clatter of the loom echoes the dedication woven into each piece. It's a dance between tradition and innovation, where the weaver's hands translate visions into reality.</p>

                    <h2 className="blog-section-title">THE DANCE OF COLORS AND PATTERNS</h2>
                    <p className="blog-text">Clothing's handwoven products are a canvas of colors and patterns, each telling a unique story. From the vibrant hues of our ethnic dresses to the intricate designs of our sarees, the combination of color and pattern reflects the diversity of Indian culture and the modern aesthetics we embrace.</p>
                    
                    <p className="blog-text">The weavers masterfully intertwine threads, creating motifs that speak of traditions and contemporary influences. It's a harmonious blend that transcends time, making each product a wearable piece of art that carries the soul of its creator.</p>

                    <h2 className="blog-section-title">EMPOWERING ARTISANS AND COMMUNITIES</h2>
                    <p className="blog-text">Behind every handwoven creation is a skilled artisan, and we take pride in fostering their talents. By providing fair wages, supporting education, and promoting sustainable practices, we aim to empower not just individuals but entire communities. When you choose Clothing, you become a part of this journey, contributing to the preservation of handloom heritage.</p>

                    <h2 className="blog-section-title">BRINGING TRADITION TO YOUR WARDROBE</h2>
                    <p className="blog-text">Clothing's handwoven products are more than garments; they are a bridge between tradition and the modern world. When you wear a saree from Clothing, you carry the legacy of craftsmanship, the spirit of our artisans, and the essence of timeless beauty.</p>
                    
                    <p className="blog-text">Explore our collections and indulge in the artistry of handloom textiles. Join us in celebrating the craftsmanship that goes into every thread, and let your wardrobe be a canvas of stories, traditions, and enduring elegance.</p>

                    <p className="blog-outro">Welcome to the world of Clothing, where every thread is a masterpiece, and every creation is a celebration of the art of handloom.</p>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .blog-explanation-container {
                    background-color: #f2ebe1;
                    min-height: 100vh;
                    padding: 4rem 2rem;
                    display: flex;
                    justify-content: center;
                }
                .blog-explanation-inner {
                    background-color: #f5f2ed;
                    max-width: 900px;
                    width: 100%;
                    border-radius: 8px;
                    padding: 4rem 5rem;
                    box-shadow: 0 4px 30px rgba(0,0,0,0.03);
                }
                .back-btn-text {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #1a2433;
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.9rem;
                    font-weight: 400;
                    cursor: pointer;
                    margin-bottom: 2.5rem;
                    transition: opacity 0.2s;
                }
                .back-btn-text:hover {
                    opacity: 0.7;
                }
                .blog-title {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.8rem;
                    font-weight: 500;
                    color: #1a2433;
                    line-height: 1.3;
                    margin-bottom: 2.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.02em;
                }
                .blog-hero-image {
                    width: 100%;
                    height: 480px;
                    object-fit: cover;
                    border-radius: 12px;
                    margin-bottom: 2.5rem;
                }
                .blog-content {
                    color: #3b4554;
                }
                .blog-intro {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.1rem;
                    font-style: italic;
                    line-height: 1.6;
                    margin-bottom: 2.5rem;
                    font-weight: 300;
                    color: #1a2433;
                }
                .blog-section-title {
                    font-family: 'Outfit', sans-serif;
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #1a2433;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.02em;
                }
                .blog-text {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.05rem;
                    line-height: 1.6;
                    margin-bottom: 1.8rem;
                    font-weight: 300;
                    color: #1a2433;
                }
                .blog-text:last-of-type {
                    margin-bottom: 2.5rem;
                }
                .blog-outro {
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.4rem;
                    line-height: 1.5;
                    margin-top: 3.5rem;
                    margin-bottom: 0;
                    color: #1a2433;
                    font-weight: 300;
                    letter-spacing: 0.01em;
                }

                @media (max-width: 768px) {
                    .blog-explanation-container {
                        padding: 2rem 1rem;
                    }
                    .blog-explanation-inner {
                        padding: 2rem;
                    }
                    .blog-title {
                        font-size: 1.5rem;
                    }
                    .blog-hero-image {
                        height: 300px;
                    }
                    .blog-outro {
                        font-size: 1.2rem;
                    }
                }
            `}} />
        </div>
    );
};

export default BlogExplanation;
