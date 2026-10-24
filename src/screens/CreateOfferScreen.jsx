import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaytmLogo from '../components/PaytmLogo'
import { products } from '../data/mockData'

export default function CreateOfferScreen() {
  const navigate = useNavigate()
  const [checked, setChecked] = useState([1]) // apple juice pre-checked
  const [shareEnabled, setShareEnabled] = useState(true)
  const [prices, setPrices] = useState(
    products.reduce((acc, p) => ({ ...acc, [p.id]: p.discountedPrice }), {})
  )

  function toggleCheck(id) {
    setChecked(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  return (
    <div className="screen fade-up">
      {/* Header */}
      <div style={{ background: '#fff', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F5' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => navigate('/shop-type')} className="btn-ghost" style={{ padding: 0, fontSize: 20 }}>‹</button>
          <PaytmLogo size={20} />
          <div style={{ width: 1, height: 26, background: '#E2E8F5', margin: '0 4px' }} />
          <div style={{ width: 32, height: 32, borderRadius: 8, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🏪</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1B3E' }}>ABC Shop</div>
            <div style={{ fontSize: 10, color: '#9AA3B5' }}>Fruit & Juice Store</div>
          </div>
        </div>
        <span style={{ background: '#EEF5FF', color: '#1A6FE0', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 20, border: '1px solid #1A6FE0' }}>🛡 Merchant</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
        <div className="page-pad">

          {/* Hero */}
          <div style={{ background: 'linear-gradient(135deg,#EEF5FF 0%,#E8F0FF 100%)', borderRadius: 16, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 900, color: '#0D1B3E' }}>Create Your Offer</h2>
              <p style={{ fontSize: 12, color: '#4B5563', marginTop: 4, lineHeight: 1.5 }}>Select the product, set the discount and<br/>let us create an attractive poster for you!</p>
            </div>
            <div style={{ fontSize: 44 }}>🍎</div>
          </div>

          {/* Selected category */}
          <div className="card" style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#FFF5E0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🥤</div>
              <div>
                <div style={{ fontSize: 10, color: '#9AA3B5' }}>Selected Category</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0D1B3E' }}>Juice Shop</div>
              </div>
            </div>
            <button className="btn-ghost" style={{ fontSize: 13 }}>Change &rsaquo;</button>
          </div>

          {/* Choose products */}
          <div className="card" style={{ padding: 16 }}>
            <div style={{ marginBottom: 12 }}>
              <div className="sec-title">Choose Products to Offer</div>
              <div style={{ fontSize: 12, color: '#9AA3B5', marginTop: 2 }}>Add the items you want to promote</div>
            </div>

            {products.slice(0, 4).map((p, i) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 12, marginBottom: i < 3 ? 12 : 0, borderBottom: i < 3 ? '1px solid #E2E8F5' : 'none' }}>
                {/* Checkbox */}
                <div
                  className={`check-box ${checked.includes(p.id) ? 'on' : ''}`}
                  onClick={() => toggleCheck(p.id)}
                >
                  {checked.includes(p.id) && <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><polyline points="1,5 4,8 11,1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                {/* Emoji */}
                <div style={{ width: 44, height: 44, borderRadius: 10, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>{p.emoji}</div>
                {/* Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1B3E' }}>{p.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                    <span className="price-old">₹{p.originalPrice}</span>
                    <input
                      style={{ width: 52, background: '#F0F4FF', border: '1.5px solid #E2E8F5', borderRadius: 6, padding: '3px 6px', fontSize: 13, fontWeight: 700, color: '#0D1B3E', textAlign: 'center', outline: 'none', fontFamily: 'inherit' }}
                      value={prices[p.id]}
                      onChange={e => setPrices({ ...prices, [p.id]: e.target.value })}
                    />
                  </div>
                </div>
                {/* Badge */}
                <span className="badge-blue" style={{ fontSize: 10, padding: '4px 7px' }}>{p.discount}% OFF</span>
                {/* Delete */}
                <button className="btn-ghost" style={{ padding: 4, color: '#9AA3B5' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                </button>
              </div>
            ))}

            {/* Add more */}
            <div className="dashed-row" style={{ marginTop: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#1A6FE0' }}>+</div>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#1A6FE0' }}>Add More Products</span>
            </div>
          </div>

          {/* Share & get discount */}
          <div className="card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A6FE0" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#0D1B3E' }}>Add Share &amp; Get Extra Discount</span>
                  <span style={{ fontSize: 11, color: '#9AA3B5', marginLeft: 4 }}>(Optional)</span>
                </div>
              </div>
              <label className="toggle">
                <input type="checkbox" checked={shareEnabled} onChange={e => setShareEnabled(e.target.checked)} />
                <span className="toggle-track" />
              </label>
            </div>
            {shareEnabled && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F0F4FF', borderRadius: 10, padding: '10px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                  <span style={{ fontSize: 13, color: '#4B5563' }}>Share with <strong>5 people</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 13, color: '#4B5563' }}>and get an extra <strong style={{ color: '#1A6FE0' }}>10% OFF</strong></span>
                  <button className="btn-ghost" style={{ fontSize: 12 }}>Edit &rsaquo;</button>
                </div>
              </div>
            )}
            <p style={{ fontSize: 11, color: '#9AA3B5', marginTop: 8 }}>Let your customers share this offer with their friends and get an additional discount.</p>
          </div>

          {/* AI Poster */}
          <div className="card" style={{ padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>✨</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0D1B3E' }}>Generate AI Poster</div>
                <div style={{ fontSize: 12, color: '#9AA3B5' }}>Create a professional and attractive poster for your offer.</div>
              </div>
            </div>
            <button className="btn-outline" style={{ padding: '8px 12px', fontSize: 12 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              Preview
            </button>
          </div>

          <div style={{ height: 8 }} />
          <button className="btn-primary" onClick={() => navigate('/offer-overview')}>
            ✨ Generate Offer
          </button>
          <div style={{ height: 16 }} />
        </div>
      </div>
    </div>
  )
}
