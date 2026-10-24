import { useNavigate } from 'react-router-dom'
import PaytmLogo from '../components/PaytmLogo'
import { products } from '../data/mockData'

const shopOffers = products.slice(0, 4)

export default function PaymentSuccessScreen() {
  const navigate = useNavigate()

  return (
    <div className="screen fade-up">
      {/* Header */}
      <div style={{ background: '#fff', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F5', flexShrink: 0 }}>
        <PaytmLogo size={22} />
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#1A6FE0', cursor: 'pointer' }}>Help</span>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🎧</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
        <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Success hero */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#00C853', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><polyline points="20 6 9 17 4 12" strokeWidth="2.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#0D1B3E' }}>Payment Successful!</div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: '#0D1B3E', lineHeight: 1.1 }}>₹50</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: '#4B5563' }}>Paid to <strong>ABC Juice Shop</strong></div>
              <div style={{ fontSize: 12, color: '#9AA3B5', marginTop: 2 }}>12 Apr 2025 • 09:41 AM</div>
            </div>
            <div style={{ fontSize: 52, flexShrink: 0 }}>🥤</div>
          </div>

          {/* Shop card */}
          <div className="card" style={{ padding: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🥤</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#0D1B3E' }}>ABC Juice Shop</div>
                <div style={{ fontSize: 12, color: '#9AA3B5' }}>Juices &amp; Beverages</div>
              </div>
            </div>
            <button className="btn-ghost" style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 2 }}>
              View Details ›
            </button>
          </div>

          {/* More offers */}
          <div className="card" style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: '#FFF3E0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🎁</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#0D1B3E' }}>More Offers from ABC Juice Shop</div>
                  <div style={{ fontSize: 11, color: '#9AA3B5' }}>Fresh sips, better deals!</div>
                </div>
              </div>
              <span style={{ background: '#FFF3E0', color: '#F57C00', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
                ⏰ Limited Time
              </span>
            </div>

            {/* Horizontal offer cards */}
            <div className="h-scroll">
              {shopOffers.map((offer, idx) => (
                <div key={offer.id} className="offer-card-h">
                  <div className="och-img" style={{ background: offer.bg }}>
                    {idx === 0 && <span className="och-best">Best Seller</span>}
                    {offer.emoji}
                  </div>
                  <div className="och-body">
                    <div className="och-name">{offer.name}</div>
                    <div className="och-size">(250ml)</div>
                    <div className="och-old">₹{offer.originalPrice}</div>
                    <div className="och-new">₹{offer.discountedPrice}</div>
                    <span className="badge-green" style={{ fontSize: 10, padding: '2px 6px', marginTop: 4, display: 'inline-block' }}>{offer.discount}% OFF</span>
                  </div>
                </div>
              ))}
              {/* next arrow hint */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 28, color: '#9AA3B5', fontSize: 20, flexShrink: 0 }}>›</div>
            </div>
          </div>

          {/* Share banner */}
          <div style={{ background: 'linear-gradient(135deg,#EEF0FF,#F3EEFF)', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A6FE0" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0D1B3E' }}>Share this offer with 5 people</div>
                <div style={{ fontSize: 12, color: '#4B5563' }}>and get an extra <strong style={{ color: '#1A6FE0' }}>10% OFF!</strong></div>
              </div>
            </div>
            <button className="btn-outline" style={{ padding: '8px 12px', fontSize: 12, flexShrink: 0 }}>
              ↗ Share Now
            </button>
          </div>

          {/* View all offers */}
          <div
            style={{ background: '#fff', borderRadius: 14, border: '1.5px solid #E2E8F5', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}
            onClick={() => navigate('/manage-offers-full')}
          >
            <div style={{ width: 36, height: 36, borderRadius: 10, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🏪</div>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#1A6FE0' }}>View All Offers from ABC Juice Shop ›</span>
          </div>

          {/* Explore more */}
          <button className="btn-primary" onClick={() => navigate('/home')}>
            🥤 Explore More →
          </button>

          {/* Footer */}
          <div style={{ textAlign: 'center', fontSize: 11, color: '#9AA3B5', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, paddingBottom: 4 }}>
            <span>🛍 Support local shops</span>
            <span>•</span>
            <span>Grow together with Paytm</span>
          </div>
        </div>
      </div>
    </div>
  )
}
