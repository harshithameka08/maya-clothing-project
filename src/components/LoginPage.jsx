import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight, User, Phone, CheckCircle2 } from 'lucide-react';

const LoginPage = ({ isOpen, onClose, onLogin }) => {
  const [mode, setMode] = useState('login'); // login, signup, forgot
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    confirmPassword: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      if (formData.email && formData.password) {
        onLogin();
        onClose();
        resetForm();
      }
    } else if (mode === 'signup') {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      setIsSubmitted(true);
      setTimeout(() => {
        onLogin();
        onClose();
        resetForm();
      }, 2000);
    } else if (mode === 'forgot') {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setMode('login');
      }, 3000);
    }
  };

  const resetForm = () => {
    setFormData({ email: '', password: '', fullName: '', phone: '', confirmPassword: '' });
    setMode('login');
    setIsSubmitted(false);
  };

  const renderContent = () => {
    if (isSubmitted) {
      return (
        <div className="status-view animate-up">
           <CheckCircle2 size={60} color="#27ae60" strokeWidth={1} />
           <h3>{mode === 'signup' ? 'Account Created!' : 'Reset Link Sent'}</h3>
           <p>
             {mode === 'signup' 
               ? 'Welcome to Maya! Directing you to your shopping...' 
               : 'Please check your email for instructions to reset your password.'}
           </p>
        </div>
      );
    }

    switch(mode) {
      case 'signup':
        return (
          <div className="form-container">
            <div className="login-header">
              <h2 className="login-title">JOIN MAYA</h2>
              <p className="login-subtitle">Become a member for exclusive luxury access</p>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-input-group">
                <label><User size={14} /> Full Name</label>
                <input name="fullName" type="text" placeholder="John Doe" value={formData.fullName} onChange={handleInputChange} required />
              </div>
              <div className="login-input-group">
                <label><Mail size={14} /> Email</label>
                <input name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="login-input-group">
                <label><Lock size={14} /> Password</label>
                <input name="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleInputChange} required />
              </div>
              <div className="login-input-group">
                <label><Lock size={14} /> Confirm Password</label>
                <input name="confirmPassword" type="password" placeholder="••••••••" value={formData.confirmPassword} onChange={handleInputChange} required />
              </div>
              <button type="submit" className="login-submit-btn">SIGN UP <ArrowRight size={18} /></button>
            </form>
            <p className="signup-prompt">Already a member? <a href="#" onClick={() => setMode('login')}>Login</a></p>
          </div>
        );
      case 'forgot':
        return (
          <div className="form-container">
            <div className="login-header">
              <h2 className="login-title">RECOVER</h2>
              <p className="login-subtitle">Enter your email to receive a reset link</p>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-input-group">
                <label><Mail size={14} /> Email Address</label>
                <input name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <button type="submit" className="login-submit-btn">SEND RESET LINK <ArrowRight size={18} /></button>
            </form>
            <p className="signup-prompt">Wait, I remember! <a href="#" onClick={() => setMode('login')}>Back to Login</a></p>
          </div>
        );
      default:
        return (
          <div className="form-container">
            <div className="login-header">
              <h2 className="login-title">WELCOME BACK</h2>
              <p className="login-subtitle">Sign in to sync your wishlist and cart</p>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-input-group">
                <label><Mail size={14} /> Email</label>
                <input name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="login-input-group">
                <label><Lock size={14} /> Password</label>
                <input name="password" type="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} required />
              </div>
              <div className="login-options">
                 <label className="remember-me"><input type="checkbox" /> <span>Remember me</span></label>
                 <a href="#" className="forgot-password" onClick={() => setMode('forgot')}>Forgot password?</a>
              </div>
              <button type="submit" className="login-submit-btn">LOGIN <ArrowRight size={18} /></button>
            </form>
            <div className="login-divider"><span>OR</span></div>
            <button type="button" className="social-login-btn google">
              <img src="https://www.google.com/favicon.ico" alt="G" /> Continue with Google
            </button>
            <p className="signup-prompt">New to Maya? <a href="#" onClick={() => setMode('signup')}>Sign up now</a></p>
          </div>
        );
    }
  };

  return (
    <div className="login-overlay" onClick={(e) => { if(e.target.className==='login-overlay') onClose(); }}>
      <div className="login-modal animate-scale">
        <button className="login-close-btn" onClick={onClose}><X size={20} /></button>
        <div className="login-content">
          {renderContent()}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .login-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(26, 36, 51, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 1rem;
        }
        .login-modal {
          background: #fdfaf3;
          width: 100%;
          max-width: 380px;
          border-radius: 16px;
          position: relative;
          padding: 2.2rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.5);
          overflow: hidden;
        }
        .login-close-btn {
          position: absolute;
          top: 1.2rem; right: 1.2rem;
          background: transparent;
          border: none;
          color: #1a2433;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.3s;
          z-index: 2;
        }
        .login-close-btn:hover { opacity: 1; }

        .status-view {
          text-align: center;
          padding: 2rem 0;
        }
        .status-view h3 { font-family: 'Outfit', sans-serif; font-size: 1.4rem; margin: 1.5rem 0 0.5rem; color: #1a2433; }
        .status-view p { font-size: 0.9rem; color: #666; line-height: 1.5; }

        .login-header { text-align: center; margin-bottom: 1.8rem; }
        .login-title { font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 500; letter-spacing: 0.1em; color: #1a2433; margin-bottom: 0.5rem; }
        .login-subtitle { font-size: 0.8rem; color: #666; }

        .login-form { display: flex; flex-direction: column; gap: 1rem; }
        .login-input-group { display: flex; flex-direction: column; gap: 0.4rem; }
        .login-input-group label { font-size: 0.75rem; font-weight: 600; color: #1a2433; display: flex; align-items: center; gap: 0.4rem; }
        .login-input-group input {
          width: 100%; height: 45px;
          background: white; border: 1px solid #d1cfc5;
          border-radius: 8px; padding: 0 1rem;
          font-size: 0.85rem; outline: none;
          transition: all 0.3s ease;
        }
        .login-input-group input:focus { border-color: #1a2433; box-shadow: 0 0 0 3px rgba(26, 36, 51, 0.05); }

        .login-options { display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; }
        .remember-me { display: flex; align-items: center; gap: 0.4rem; cursor: pointer; color: #555; }
        .forgot-password { color: #1a2433; text-decoration: none; font-weight: 600; }

        .login-submit-btn {
          width: 100%; height: 48px;
          background: #1a2433; color: white;
          border-radius: 8px; font-weight: 700;
          letter-spacing: 0.1em; display: flex;
          align-items: center; justify-content: center;
          gap: 0.8rem; margin-top: 0.5rem;
          cursor: pointer; transition: all 0.3s ease;
          font-size: 0.8rem; border: none;
        }
        .login-submit-btn:hover { background: #2a3a4c; transform: translateY(-2px); }

        .login-divider { margin: 1.5rem 0; position: relative; text-align: center; }
        .login-divider::before { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: #d1cfc5; z-index: 1; }
        .login-divider span { background: #fdfaf3; padding: 0 0.8rem; position: relative; z-index: 2; font-size: 0.7rem; color: #999; font-weight: 600; }

        .social-login-btn {
          width: 100%; height: 46px;
          background: white; border: 1px solid #d1cfc5;
          border-radius: 8px; display: flex;
          align-items: center; justify-content: center;
          gap: 0.8rem; font-size: 0.8rem;
          font-weight: 600; color: #333;
          cursor: pointer; transition: background 0.3s;
        }
        .social-login-btn:hover { background: #f5f5f5; }
        .social-login-btn img { width: 16px; height: 16px; }

        .signup-prompt { text-align: center; margin-top: 1.5rem; font-size: 0.8rem; color: #666; }
        .signup-prompt a { color: #1a2433; font-weight: 700; text-decoration: none; }

        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-scale { animation: scaleIn 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }
        @keyframes fadeInUp { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-up { animation: fadeInUp 0.4s ease forwards; }
      `}} />
    </div>
  );
};

export default LoginPage;
