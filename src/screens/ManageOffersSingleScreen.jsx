import { useNavigate } from 'react-router-dom'
import PaytmLogo from '../components/PaytmLogo'
import { shopInfo } from '../data/mockData'

export default function ManageOffersSingleScreen() {
  const navigate = useNavigate()

  return (
    <div className="screen fade-up">
      {/* Header */}
      <div style={{ background: '#fff', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F5', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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

          <h1 style={{ fontSize: 24, fontWeight: 900, color: '#0D1B3E', marginBottom: 2 }}>Manage Your Offers</h1>
          <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.5 }}>Your offers are live! You can edit, add more or remove them anytime.</p>

          {/* Single offer card */}
          <div className="card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 64, height: 64, borderRadius: 12, background: '#FFF5E0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, flexShrink: 0 }}>🍊</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#0D1B3E' }}>Orange Juice</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '4px 0' }}>
                <span className="price-old">₹70</span>
                <span style={{ color: '#9AA3B5' }}>→</span>
                <span style={{ fontSize: 18, fontWeight: 900, color: '#0D1B3E' }}>₹56</span>
              </div>
              <span className="badge-green">20% OFF</span>
            </div>
            <button className="btn-outline" style={{ padding: '8px 12px', fontSize: 12 }} onClick={() => navigate('/create-offer')}>
              ✏️ Edit
            </button>
          </div>

          {/* 3 action tiles */}
          <div style={{ display: 'flex', gap: 10 }}>
            <div className="action-tile" onClick={() => navigate('/create-offer')}>
              <div className="at-icon" style={{ background: '#EEF2FF' }}>➕</div>
              <div className="at-title">Add More<br />Offers</div>
              <div className="at-sub">Create new offers for your customers.</div>
            </div>

            <div className="action-tile" onClick={() => navigate('/create-offer')}>
              <div className="at-icon" style={{ background: '#F3E5F5' }}>✨</div>
              <div className="at-title">Generate<br />with AI</div>
              <div className="at-sub">Let AI create a poster &amp; offer for you.</div>
            </div>

            <div className="action-tile" onClick={() => {}}>
              <div className="at-icon" style={{ background: '#FFEBEE' }}>🗑</div>
              <div className="at-title">Remove<br />Offer</div>
              <div className="at-sub">Delete any offer you no longer want.</div>
            </div>
          </div>

          {/* All set illustration */}
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>🏪</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: '#0D1B3E' }}>All set!</div>
            <div style={{ fontSize: 13, color: '#9AA3B5', marginTop: 6 }}>Your offers are ready and visible<br />to your customers.</div>
          </div>

          <div style={{ height: 4 }} />
          <button className="btn-primary" onClick={() => navigate('/offer-overview')}>Done →</button>

          <button className="btn-ghost" style={{ textAlign: 'center', margin: '8px auto 16px', display: 'block', color: '#1A6FE0', fontSize: 14 }} onClick={() => navigate('/home')}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
