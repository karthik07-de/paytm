import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaytmLogo from '../components/PaytmLogo'
import { shopInfo } from '../data/mockData'

export default function WelcomeShopOwner() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    shopName: shopInfo.ownerName,
    phone: shopInfo.phone,
    email: shopInfo.email,
  })

  return (
    <div className="screen fade-up">
      {/* Header */}
      <div style={{ background: '#fff', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F5' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => navigate('/home')} className="btn-ghost" style={{ padding: 0, fontSize: 20 }}>‹</button>
          <PaytmLogo size={20} />
        </div>
        <button className="btn-ghost" style={{ width: 30, height: 30, borderRadius: '50%', border: '1.5px solid #E2E8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, fontSize: 16 }}>?</button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
        <div className="page-pad">

          {/* Hero row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
            <div>
              <h1 style={{ fontSize: 26, fontWeight: 900, color: '#0D1B3E', lineHeight: 1.2 }}>Welcome,<br />Shop Owner!</h1>
              <p style={{ fontSize: 13, color: '#4B5563', marginTop: 8, lineHeight: 1.5 }}>Set up your shop details to start creating offers and grow your business with Paytm.</p>
            </div>
            <div style={{ fontSize: 60, flexShrink: 0 }}>🏪</div>
          </div>

          {/* Shop Name */}
          <div className="input-row">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9AA3B5" strokeWidth="1.8">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <input
              placeholder="Shop Name"
              value={form.shopName}
              onChange={e => setForm({ ...form, shopName: e.target.value })}
            />
          </div>

          {/* Phone */}
          <div className="input-row">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9AA3B5" strokeWidth="1.8">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <input
              placeholder="Phone Number"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="input-row">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9AA3B5" strokeWidth="1.8">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <input
              placeholder="Email ID"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Trust box */}
          <div style={{ background: '#EEF5FF', borderRadius: 12, padding: 14, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>🔒</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#0D1B3E' }}>Your information is safe with us</div>
              <div style={{ fontSize: 12, color: '#9AA3B5', marginTop: 3, lineHeight: 1.5 }}>We use your details only for business verification and to help you get the best offers and support.</div>
            </div>
          </div>

          <div style={{ height: 8 }} />
          <button className="btn-primary" onClick={() => navigate('/shop-type')}>
            Continue →
          </button>
          <div style={{ height: 16 }} />
        </div>
      </div>
    </div>
  )
}
