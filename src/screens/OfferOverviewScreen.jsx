import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaytmLogo from '../components/PaytmLogo'
import BottomNav from '../components/BottomNav'
import { shopInfo, offerStats } from '../data/mockData'

const TABS = ['Overview', 'Edit Offer', 'AI Poster', 'Settings']

export default function OfferOverviewScreen() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('Overview')

  return (
    <div className="screen fade-up">
      {/* Header */}
      <div style={{ background: '#fff', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F5', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <PaytmLogo size={20} />
          <div style={{ width: 1, height: 26, background: '#E2E8F5' }} />
          <div style={{ width: 32, height: 32, borderRadius: 8, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🏪</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1B3E' }}>{shopInfo.name}</div>
            <div style={{ fontSize: 10, color: '#9AA3B5' }}>{shopInfo.category}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#9AA3B5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>

        {/* Offer Live Banner */}
        <div style={{ background: 'linear-gradient(135deg,#E8F5E9 0%,#F0FFF4 100%)', margin: '12px 16px', borderRadius: 16, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, position: 'relative', overflow: 'hidden' }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#00C853', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#0D1B3E' }}>Your Offer is Live!</div>
            <div style={{ fontSize: 12, color: '#4B5563', marginTop: 2 }}>Your offer has been successfully created and is now visible to your customers after payment.</div>
          </div>
          <div style={{ position: 'absolute', right: 12, top: 0, bottom: 0, display: 'flex', alignItems: 'center', gap: 0 }}>
            <div style={{ fontSize: 44, lineHeight: 1 }}>🥤</div>
            <div style={{ background: '#00C853', color: 'white', fontSize: 10, fontWeight: 800, padding: '4px 8px', borderRadius: 8, marginLeft: -4, marginBottom: 28 }}>Offer<br/>Live</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-row" style={{ margin: '0 0', flexShrink: 0 }}>
          {TABS.map(t => (
            <div key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</div>
          ))}
        </div>

        {tab === 'Overview' && (
          <div className="page-pad">
            {/* Active offer card */}
            <div className="card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ position: 'relative', width: 70, height: 70, borderRadius: 12, background: '#FFF0F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38, flexShrink: 0 }}>
                🍎
                <div style={{ position: 'absolute', top: -6, left: -6, background: '#E53935', color: 'white', fontSize: 9, fontWeight: 800, padding: '2px 5px', borderRadius: 4 }}>20% OFF</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#0D1B3E' }}>Apple Juice</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '4px 0' }}>
                  <span className="price-old">₹50</span>
                  <span style={{ color: '#9AA3B5', fontSize: 14 }}>→</span>
                  <span style={{ fontSize: 18, fontWeight: 900, color: '#0D1B3E' }}>₹40</span>
                </div>
                <span style={{ background: '#FFF3E0', color: '#F57C00', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 20, display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                  ⏰ Limited Time
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00C853', display: 'inline-block' }} />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#00C853' }}>Active</span>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AA3B5" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </div>

            {/* Stats */}
            <div className="stat-grid">
              {[
                { icon: '👁', label: 'View Count', val: offerStats.viewCount, change: offerStats.viewChange },
                { icon: '🛒', label: 'Clicks', val: offerStats.clicks, change: offerStats.clicksChange },
                { icon: '↗', label: 'Shares', val: offerStats.shares, change: offerStats.sharesChange },
                { icon: '🧾', label: 'Total Orders', val: offerStats.totalOrders, change: offerStats.ordersChange },
              ].map(s => (
                <div key={s.label} className="stat-box">
                  <div style={{ fontSize: 18 }}>{s.icon}</div>
                  <div className="sb-val">{s.val}</div>
                  <div className="sb-label">{s.label}</div>
                  <div className="sb-change">↗ {s.change}</div>
                </div>
              ))}
            </div>

            {/* Manage Your Offer */}
            <div className="card" style={{ padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <div>
                  <div className="sec-title">Manage Your Offer</div>
                  <div style={{ fontSize: 12, color: '#9AA3B5', marginTop: 2 }}>Update your offer details, timing or product anytime.</div>
                </div>
                <button className="btn-outline" style={{ padding: '8px 12px', fontSize: 12 }} onClick={() => navigate('/create-offer')}>
                  ✏️ Edit Offer
                </button>
              </div>

              <div style={{ marginTop: 8 }}>
                {[
                  { icon: '🏷', title: 'Offer Details', sub: 'Product, Discount, Validity' },
                  { icon: '⏰', title: 'Offer Duration', sub: '12 Apr 2025 – 18 Apr 2025' },
                  { icon: '↗', title: 'Share & Get Extra Discount', sub: 'Enabled (10% extra discount for 5 shares)' },
                ].map(row => (
                  <div key={row.title} className="icon-row" onClick={() => navigate('/manage-offers')}>
                    <div className="ir-icon"><span style={{ fontSize: 18 }}>{row.icon}</span></div>
                    <div className="ir-body">
                      <div className="ir-title">{row.title}</div>
                      <div className="ir-sub">{row.sub}</div>
                    </div>
                    <span className="ir-arrow">›</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Poster */}
            <div className="card" style={{ padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>✨</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0D1B3E' }}>AI Generated Poster</div>
                  <div style={{ fontSize: 12, color: '#9AA3B5' }}>A creative poster has been generated for your offer.</div>
                </div>
              </div>
              <button className="btn-outline" style={{ padding: '8px 12px', fontSize: 12 }}>
                🖼 View Poster ›
              </button>
            </div>

            {/* Quick Settings */}
            <div className="card" style={{ padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>⚙️</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0D1B3E' }}>Quick Settings</div>
                  <div style={{ fontSize: 12, color: '#9AA3B5' }}>Manage your shop preferences and notifications.</div>
                </div>
              </div>
              <button className="btn-outline" style={{ padding: '8px 12px', fontSize: 12 }}>
                ⚙️ Go to Settings ›
              </button>
            </div>

            {/* Powered by footer */}
            <div style={{ textAlign: 'center', fontSize: 11, color: '#9AA3B5', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, paddingBottom: 4 }}>
              <span>Powered by</span>
              <PaytmLogo size={14} />
              <span>💙 Grow Together with Paytm</span>
            </div>
          </div>
        )}

        {tab === 'Edit Offer' && (
          <div className="page-pad">
            <div className="card" style={{ padding: 20, textAlign: 'center', color: '#9AA3B5' }}>
              <div style={{ fontSize: 40 }}>✏️</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0D1B3E', marginTop: 8 }}>Edit Your Offer</div>
              <p style={{ fontSize: 13, marginTop: 4 }}>Tap below to modify your offer details.</p>
              <button className="btn-primary" style={{ marginTop: 16 }} onClick={() => navigate('/create-offer')}>Edit Offer →</button>
            </div>
          </div>
        )}

        {tab === 'AI Poster' && (
          <div className="page-pad">
            <div className="card" style={{ padding: 20, textAlign: 'center' }}>
              <div style={{ fontSize: 40 }}>🎨</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0D1B3E', marginTop: 8 }}>AI Generated Poster</div>
              <div style={{ margin: '16px auto', width: '100%', height: 200, background: 'linear-gradient(135deg,#FFF0F0,#FFF5E0)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 60 }}>🍎</div>
              <button className="btn-primary" style={{ marginTop: 4 }}>Download Poster</button>
            </div>
          </div>
        )}

        {tab === 'Settings' && (
          <div className="page-pad">
            <div className="card" style={{ padding: 16 }}>
              {['Notifications', 'Offer Visibility', 'Auto-renew Offers', 'Language'].map((item, i) => (
                <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 0', borderBottom: i < 3 ? '1px solid #E2E8F5' : 'none' }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#0D1B3E' }}>{item}</span>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked={i < 2} onChange={() => {}} />
                    <span className="toggle-track" />
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ height: 8 }} />
      </div>

      <BottomNav />
    </div>
  )
}
