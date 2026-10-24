import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaytmLogo from '../components/PaytmLogo'
import { products, shopInfo } from '../data/mockData'

export default function ManageOffersFullScreen() {
  const navigate = useNavigate()
  const [offers, setOffers] = useState([...products])
  const [mode, setMode] = useState('add') // 'add' | 'remove'

  function deleteOffer(id) {
    setOffers(prev => prev.filter(o => o.id !== id))
  }

  return (
    <div className="screen fade-up">
      {/* Header */}
      <div style={{ background: '#fff', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F5', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => navigate('/offer-overview')} className="btn-ghost" style={{ padding: 0, fontSize: 20 }}>‹</button>
          <PaytmLogo size={20} />
          <div style={{ width: 1, height: 26, background: '#E2E8F5' }} />
          <div style={{ width: 30, height: 30, borderRadius: 8, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🏪</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1B3E' }}>{shopInfo.name}</div>
            <div style={{ fontSize: 10, color: '#9AA3B5' }}>{shopInfo.category}</div>
          </div>
        </div>
        <div style={{ width: 30, height: 30, borderRadius: 8, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🏪</div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
        <div className="page-pad">

          {/* Hero row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 900, color: '#0D1B3E' }}>Manage Your Offers</h1>
              <p style={{ fontSize: 13, color: '#4B5563', marginTop: 6, lineHeight: 1.5 }}>Add, edit or remove offers anytime. Keep your customers coming back for more!</p>
            </div>
            <div style={{ fontSize: 54, flexShrink: 0 }}>🥤</div>
          </div>

          {/* Mode buttons */}
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 24, border: '1.5px solid', fontFamily: 'inherit', cursor: 'pointer', fontWeight: 700, fontSize: 13, transition: 'all 0.15s', background: mode === 'add' ? '#1A6FE0' : '#fff', color: mode === 'add' ? '#fff' : '#1A6FE0', borderColor: '#1A6FE0' }}
              onClick={() => setMode('add')}
            >+ Add Offers</button>
            <button
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 18px', borderRadius: 24, border: '1.5px solid', fontFamily: 'inherit', cursor: 'pointer', fontWeight: 700, fontSize: 13, transition: 'all 0.15s', background: mode === 'remove' ? '#E53935' : '#fff', color: mode === 'remove' ? '#fff' : '#E53935', borderColor: '#E53935' }}
              onClick={() => setMode('remove')}
            >– Remove Offers</button>
          </div>

          {/* Section heading with count */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div className="sec-title">Current Offers</div>
              <div style={{ fontSize: 12, color: '#9AA3B5', marginTop: 1 }}>Tap to edit or remove any offer.</div>
            </div>
            <span style={{ background: '#EEF2FF', color: '#1A6FE0', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 20 }}>{offers.length} Offers</span>
          </div>

          {/* Full offer list */}
          {offers.map(offer => (
            <div key={offer.id} className="offer-item">
              <div className="oi-img" style={{ background: offer.bg }}>{offer.emoji}</div>
              <div className="oi-body">
                <div className="oi-name">{offer.name}</div>
                <div className="oi-prices">
                  <span className="price-old">₹{offer.originalPrice}</span>
                  <span style={{ color: '#9AA3B5', fontSize: 13 }}>→</span>
                  <span className="price-new">₹{offer.discountedPrice}</span>
                </div>
              </div>
              <span className="badge-green">{offer.discount}% OFF</span>
              <div style={{ display: 'flex', gap: 6 }}>
                <button className="btn-ghost" style={{ width: 34, height: 34, borderRadius: '50%', border: '1.5px solid #E2E8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }} onClick={() => navigate('/create-offer')}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1A6FE0" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button
                  style={{ width: 34, height: 34, borderRadius: '50%', border: '1.5px solid #FFCDD2', background: '#FFEBEE', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0 }}
                  onClick={() => deleteOffer(offer.id)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                </button>
              </div>
            </div>
          ))}

          <div style={{ height: 4 }} />
          <button className="btn-primary" onClick={() => navigate('/offer-overview')}>Done →</button>

          {/* All set */}
          <div style={{ textAlign: 'center', padding: '12px 0 8px' }}>
            <div style={{ fontSize: 22 }}>✨</div>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#0D1B3E', marginTop: 4 }}>Your offers are all set!</div>
            <div style={{ fontSize: 13, color: '#9AA3B5', marginTop: 4 }}>You're ready to start a new journey with {shopInfo.name}.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
