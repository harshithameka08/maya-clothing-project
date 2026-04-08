import React, { useEffect } from 'react';
import { ChevronLeft, ChevronDown, ShoppingBag } from 'lucide-react';

const SearchableSelect = ({ label, name, options, value, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(opt => opt.toLowerCase().includes(search.toLowerCase()));

  const handleSelect = (opt) => {
    onChange({ target: { name, value: opt } });
    setIsOpen(false);
    setSearch('');
  };

  return (
    <div className="form-group" style={{ position: 'relative' }} ref={wrapperRef}>
      <label>{label}</label>
      <div 
        className="form-input" 
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', color: value ? '#1a2433' : '#666' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value || `Select ${label}`}</span>
        <ChevronDown size={14} color="#1a2433" />
      </div>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
            <input 
              type="text" 
              placeholder="Search..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="dropdown-search-input"
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>
          <div className="dropdown-options-list">
            {filteredOptions.length > 0 ? filteredOptions.map(opt => (
              <div 
                key={opt}
                onClick={() => handleSelect(opt)}
                className="dropdown-option"
              >
                {opt}
              </div>
            )) : (
              <div style={{ padding: '0.8rem 1.2rem', color: '#888', fontSize: '0.85rem' }}>No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const countryStateMap = {
  'India': [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ],
  'USA': [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ],
  'UK': ['England', 'Scotland', 'Wales', 'Northern Ireland'],
  'Australia': ['New South Wales', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia', 'Australian Capital Territory', 'Northern Territory'],
  'Canada': ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Northwest Territories', 'Nunavut', 'Yukon'],
  'Germany': ['Baden-Württemberg', 'Bavaria', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hesse', 'Lower Saxony', 'Mecklenburg-Vorpommern', 'North Rhine-Westphalia', 'Rhineland-Palatinate', 'Saarland', 'Saxony', 'Saxony-Anhalt', 'Schleswig-Holstein', 'Thuringia'],
  'France': ['Auvergne-Rhône-Alpes', 'Bourgogne-Franche-Comté', 'Brittany', 'Centre-Val de Loire', 'Corsica', 'Grand Est', 'Hauts-de-France', 'Île-de-France', 'Normandy', 'Nouvelle-Aquitaine', 'Occitanie', 'Pays de la Loire', 'Provence-Alpes-Côte d\'Azur'],
  'Japan': ['Hokkaido', 'Aomori', 'Iwate', 'Miyagi', 'Akita', 'Yamagata', 'Fukushima', 'Ibaraki', 'Tochigi', 'Gunma', 'Saitama', 'Chiba', 'Tokyo', 'Kanagawa', 'Niigata', 'Toyama', 'Ishikawa', 'Fukui', 'Yamanashi', 'Nagano', 'Gifu', 'Shizuoka', 'Aichi', 'Mie', 'Shiga', 'Kyoto', 'Osaka', 'Hyogo', 'Nara', 'Wakayama', 'Tottori', 'Shimane', 'Okayama', 'Hiroshima', 'Yamaguchi', 'Tokushima', 'Kagawa', 'Ehime', 'Kochi', 'Fukuoka', 'Saga', 'Nagasaki', 'Kumamoto', 'Oita', 'Miyazaki', 'Kagoshima', 'Okinawa'],
  'China': ['Anhui', 'Beijing', 'Chongqing', 'Fujian', 'Gansu', 'Guangdong', 'Guangxi', 'Guizhou', 'Hainan', 'Hebei', 'Heilongjiang', 'Henan', 'Hubei', 'Hunan', 'Inner Mongolia', 'Jiangsu', 'Jiangxi', 'Jilin', 'Liaoning', 'Ningxia', 'Qinghai', 'Shaanxi', 'Shandong', 'Shanghai', 'Shanxi', 'Sichuan', 'Tianjin', 'Tibet', 'Xinjiang', 'Yunnan', 'Zhejiang'],
  'Brazil': ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'],
  'United Arab Emirates': ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah']
};

const CheckoutPage = ({ onNavigate, cart = [], formData, setFormData }) => {

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    
    if (name === 'phone') {
      value = value.replace(/\D/g, '');
    }

    if (name === 'country') {
      setFormData(prev => ({ ...prev, [name]: value, stateRegion: '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const isFormValid = Object.values(formData).every(val => val.trim() !== '');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const priceStr = String(item.price).replace(/,/g, '').replace(/[^\d.]/g, '');
      const price = parseFloat(priceStr) || 0;
      return total + (price * (item.qty || 1));
    }, 0);
  };

  const subtotal = calculateTotal();
  const finalTotal = subtotal;

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-back-group">
            <button className="checkout-back-btn" onClick={() => onNavigate('cart')}>
              <ChevronLeft size={24} strokeWidth={1} />
            </button>
            <span className="back-label">Cart/Customer Info</span>
          </div>
          <h1 className="checkout-title">CUSTOMER INFO</h1>
        </div>

        <div className="checkout-content-layout">
          {/* Form Section */}
          <div className="customer-info-form">
            <section className="form-section">
              <h3 className="form-section-title">Contact Information</h3>
              <div className="form-grid-2">
                <div className="form-group">
                  <label>Full Name:</label>
                  <input type="text" className="form-input" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" className="form-input" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-group full-width">
                <label>Email:</label>
                <input type="email" className="form-input" name="email" value={formData.email} onChange={handleInputChange} />
              </div>
            </section>

            <section className="form-section">
              <h3 className="form-section-title">Shipping Address</h3>
              <div className="form-grid-2">
                <SearchableSelect 
                  label="Country" 
                  name="country" 
                  options={['India', 'USA', 'UK', 'Australia', 'Canada', 'Germany', 'France', 'Japan', 'China', 'Brazil', 'United Arab Emirates']} 
                  value={formData.country} 
                  onChange={handleInputChange} 
                />
                <SearchableSelect 
                  label="State/Region" 
                  name="stateRegion" 
                  options={countryStateMap[formData.country] || []} 
                  value={formData.stateRegion} 
                  onChange={handleInputChange} 
                />
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" className="form-input" name="address" value={formData.address} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-input" name="phone" value={formData.phone} onChange={handleInputChange} />
                </div>
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <div className="order-summary-sidebar">
            <div className="summary-card">
              <h2 className="summary-title">ORDER SUMMARY</h2>
              
              <div className="summary-line">
                <span>Price</span>
                <span>Rs. {subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Shipping</span>
                <span>$0</span>
              </div>
              <div className="summary-line">
                <span>Tax</span>
                <span>$0</span>
              </div>
              
              <div className="discount-block">
                <span className="block-label">Discount Price</span>
                <div className="login-alert">
                  <span className="info-icon">ⓘ</span>
                  You must log in to use the discount code
                </div>
                <div className="coupon-box">
                  <input type="text" placeholder="Enter Coupon Code" className="coupon-field" />
                  <button className="coupon-btn">LOGIN & APPLY CODE</button>
                </div>
              </div>


              <div className="total-split">
                <span className="total-label">Total Price</span>
                <span className="total-val">Rs. {finalTotal.toFixed(2)}</span>
              </div>

              <button 
                className="continue-btn" 
                onClick={() => {
                  if (cart.length === 0) {
                     alert("Your cart is empty.");
                     return;
                  }
                  if (isFormValid) onNavigate('payment');
                }}
                disabled={!isFormValid || cart.length === 0}
                style={{ opacity: (!isFormValid || cart.length === 0) ? 0.5 : 1, cursor: (!isFormValid || cart.length === 0) ? 'not-allowed' : 'pointer' }}
              >
                <ShoppingBag size={18} />
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .checkout-page {
          background-color: #f2ebe1;
          padding: 3rem 0;
          min-height: 100vh;
        }
        .checkout-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }
        .checkout-header {
          display: flex;
          align-items: center;
          position: relative;
          justify-content: center;
          margin-bottom: 5rem;
        }
        .header-back-group {
          position: absolute;
          left: 0;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }
        .checkout-back-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 1px solid #1a2433;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .back-label {
          font-size: 0.9rem;
          color: #1a2433;
          font-weight: 500;
        }
        .checkout-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #1a2433;
          text-transform: uppercase;
        }

        .checkout-content-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 4rem;
          align-items: start;
          margin-bottom: 5rem;
        }

        .form-section {
          margin-bottom: 3.5rem;
        }
        .form-section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1a2433;
          margin-bottom: 1.5rem;
        }
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .form-group {
          margin-bottom: 1.2rem;
        }
        .full-width { grid-column: span 2; }
        .form-group label {
          display: block;
          font-size: 0.75rem;
          margin-bottom: 0.6rem;
          color: #333;
          font-weight: 500;
        }
        .form-input {
          width: 100%;
          height: 52px;
          background: transparent;
          border: 1px solid #1a2433;
          border-radius: 8px;
          padding: 0 1.2rem;
          outline: none;
          font-family: inherit;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #1a2433;
          border-radius: 8px;
          margin-top: 4px;
          z-index: 10;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .dropdown-search-input {
          width: 100%;
          padding: 0.6rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          outline: none;
          font-family: inherit;
          font-size: 0.85rem;
        }
        .dropdown-search-input:focus {
          border-color: #1a2433;
        }
        .dropdown-options-list {
          max-height: 180px;
          overflow-y: auto;
        }
        .dropdown-option {
          padding: 0.8rem 1.2rem;
          cursor: pointer;
          border-bottom: 1px solid #f5f5f5;
          font-size: 0.9rem;
          color: #1a2433;
          transition: background-color 0.2s;
        }
        .dropdown-option:last-child {
          border-bottom: none;
        }
        .dropdown-option:hover {
          background-color: #f2ebe1;
        }

        /* Sidebar Reused */
        .summary-card {
           background: #fdfaf3;
           border: 1px solid #d1cfc5;
           border-radius: 12px;
           padding: 2.2rem 1.8rem;
        }
        .summary-title {
           font-size: 1.05rem;
           font-weight: 600;
           margin-bottom: 2rem;
           color: #1a2433;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.2rem;
          font-size: 0.8rem;
          color: #555;
        }
        .discount-block {
          margin-top: 1.8rem;
          padding-top: 1.5rem;
          border-top: 1px dashed #d1cfc5;
        }
        .block-label {
          display: block;
          font-size: 0.8rem;
          margin-bottom: 0.7rem;
          color: #1a2433;
        }
        .login-alert {
          font-size: 0.65rem;
          color: #d24e1d;
          display: flex;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }
        .coupon-box {
           display: flex;
           border: 1px solid #ccc;
           border-radius: 4px;
           overflow: hidden;
           background: white;
           height: 34px;
        }
        .coupon-field {
          flex: 1;
          border: none;
          padding: 0 0.8rem;
          font-size: 0.7rem;
          outline: none;
        }
        .coupon-btn {
          background: #222;
          color: white;
          font-size: 0.6rem;
          padding: 0 0.8rem;
          font-weight: 600;
        }
        
        .total-split {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #d1cfc5;
          align-items: center;
        }
        .total-label { font-weight: 700; font-size: 1.1rem; }
        .total-val { font-weight: 800; font-size: 1.2rem; }

        .continue-btn {
          width: 100%;
          background: #2a3a4c;
          color: white;
          border-radius: 6px;
          margin-top: 1.8rem;
          padding: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
        }

        @media (max-width: 1200px) {
           .checkout-content-layout { grid-template-columns: 1fr; }
           .order-summary-sidebar { max-width: 400px; }
        }
        @media (max-width: 768px) {
           .form-grid-2 { grid-template-columns: 1fr; }
           .full-width { grid-column: span 1; }
           .checkout-header { flex-direction: column; align-items: flex-start; gap: 2rem; }
           .header-back-group { position: static; }
        }
      `}} />
    </div>
  );
};

export default CheckoutPage;
