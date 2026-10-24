import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PaytmLogo from '../components/PaytmLogo'
import { shopTypes } from '../data/mockData'

export default function ShopTypeScreen() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(14) // "Others" pre-selected as in design

  return (
    <div className="screen fade-up">
      {/* Header */}
      <div style={{ background: '#fff', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F5' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => navigate('/welcome-shop')} className="btn-ghost" style={{ padding: 0, fontSize: 20 }}>‹</button>
          <PaytmLogo size={20} />
        </div>
        {/* Step dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {[1,2,3,4].map(n => (
            <div key={n} style={{
              width: n === 3 ? 22 : 8, height: 8,
              borderRadius: 4,
              background: n === 3 ? '#1A6FE0' : (n < 3 ? '#1A6FE0' : '#CBD5E1'),
              transition: 'all 0.2s'
            }} />
          ))}
          <span style={{ fontSize: 11, color: '#9AA3B5', marginLeft: 4 }}>3 of 4</span>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
        <div className="page-pad">

          {/* Hero row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 900, color: '#0D1B3E', lineHeight: 1.3 }}>What type of shop<br />do you run?</h1>
              <p style={{ fontSize: 13, color: '#4B5563', marginTop: 6 }}>Select the category that best describes your business.</p>
            </div>
            <div style={{ fontSize: 56, flexShrink: 0 }}>🏬</div>
          </div>

          {/* Grid */}
          <div className="shop-grid">
            {shopTypes.map(st => (
              <div
                key={st.id}
                className={`shop-type-tile ${selected === st.id ? 'sel' : ''}`}
                onClick={() => setSelected(st.id)}
              >
                <span className="st-emoji">{st.emoji}</span>
                <span className="st-name">{st.name}{st.isOthers && <span style={{ display: 'block', fontSize: 10, color: '#9AA3B5', fontWeight: 400 }}>Add your own shop type</span>}</span>
                <span className="st-radio" />
              </div>
            ))}
          </div>

          <div style={{ height: 8 }} />
          <button className="btn-primary" onClick={() => navigate('/create-offer')}>
            Next →
          </button>
          <div style={{ height: 16 }} />
        </div>
      </div>
    </div>
  )
}
