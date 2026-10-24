import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaytmLogo from '../components/PaytmLogo'
import { products, shopInfo } from '../data/mockData'

export default function ManageOffersScreen() {
  const navigate = useNavigate()
  const [offers, setOffers] = useState(products.slice(0, 4))

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
          <div className="shop-info">
            <div className="shop-name" style={{ fontSize: 13, fontWeight: 700, color: '#0D1B3E' }}>{shopInfo.name}</div>
            <div className="shop-cat" style={{ fontSize: 10, color: '#9AA3B5' }}>{shopInfo.category}</div>
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
              <p style={{ fontSize: 13, color: '#4B5563', marginTop: 6, lineHeight: 1.5 }}>Here are the offers you've created for your customers. You can edit, remove or add more anytime.</p>
            </div>
            <div style={{ fontSize: 54, flexShrink: 0 }}>🥤</div>
          </div>

          {/* Offer list */}
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
                <span className="badge-green">{offer.discount}% OFF</span>
              </div>
              <div className="oi-actions">
                <button className="btn-outline" style={{ padding: '7px 12px', fontSize: 12 }} onClick={() => navigate('/create-offer')}>
                  ✏️ Edit
                </button>
                <button
                  style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, color: '#E53935', fontSize: 12, fontWeight: 700, padding: '7px 10px', borderRadius: 20, border: '1.5px solid #FFCDD2' }}
                  onClick={() => deleteOffer(offer.id)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}

          {/* Add more */}
          <div className="dashed-row" onClick={() => navigate('/create-offer')}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#1A6FE0', flexShrink: 0 }}>+</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1A6FE0' }}>Add More Offers</div>
              <div style={{ fontSize: 12, color: '#9AA3B5' }}>Create new offers for your customers.</div>
            </div>
            <span style={{ marginLeft: 'auto', color: '#9AA3B5', fontSize: 18 }}>›</span>
          </div>

          <div style={{ height: 4 }} />
          <button className="btn-primary" onClick={() => navigate('/offer-overview')}>
            Done →
          </button>

          {/* All set */}
          <div style={{ textAlign: 'center', padding: '16px 0 8px' }}>
            <div style={{ fontSize: 22 }}>✨</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: '#0D1B3E', marginTop: 4 }}>All set!</div>
            <div style={{ fontSize: 13, color: '#9AA3B5', marginTop: 4 }}>Your offers are ready, and your next<br />Paytm journey is just a tap away!</div>
            <div style={{ height: 3, width: 40, background: '#1A6FE0', borderRadius: 2, margin: '8px auto 0' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
