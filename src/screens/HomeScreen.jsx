import { useNavigate } from 'react-router-dom'
import PaytmLogo from '../components/PaytmLogo'
import BottomNav from '../components/BottomNav'

const sendMoneyItems = [
  { emoji: '💸', label: 'To Mobile\nNumber' },
  { emoji: '🏦', label: 'To Bank\nAccount' },
  { emoji: '📷', label: 'Scan & Pay' },
  { emoji: '🔄', label: 'Self\nTransfer' },
]

const rechargeItems = [
  { emoji: '📱', label: 'Mobile\nRecharge' },
  { emoji: '📡', label: 'DTH' },
  { emoji: '💡', label: 'Electricity' },
  { emoji: '🔥', label: 'Gas\nCylinders' },
  { emoji: '📶', label: 'Broadband' },
]

const serviceItems = [
  { emoji: '✈️', label: 'Travel' },
  { emoji: '🎬', label: 'Movies' },
  { emoji: '🛡️', label: 'Insurance' },
  { emoji: '💰', label: 'Loan' },
]

export default function HomeScreen() {
  const navigate = useNavigate()

  return (
    <div className="screen fade-up">
      {/* Header */}
      <div style={{ background: '#fff', padding: '10px 16px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F5' }}>
        <div>
          <PaytmLogo size={22} />
          <div style={{ fontSize: 11, color: '#9AA3B5', marginTop: 1 }}>Pay. Save. Grow.</div>
        </div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          {/* Search */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          {/* Bell */}
          <div style={{ position: 'relative' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
            <span style={{ position: 'absolute', top: -3, right: -3, width: 8, height: 8, background: '#E53935', borderRadius: '50%', border: '1.5px solid #fff' }} />
          </div>
          {/* Avatar */}
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #E2E8F5' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#9AA3B5">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
        <div className="page-pad">

          {/* Hero Banner */}
          <div style={{ background: 'linear-gradient(135deg,#E8F0FF 0%,#D4E8FF 100%)', borderRadius: 16, padding: '16px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden', position: 'relative' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#0D1B3E', lineHeight: 1.3 }}>Get more<br />from Paytm</div>
              <div style={{ fontSize: 12, color: '#4B5563', margin: '4px 0 12px' }}>Payments, Offers, Rewards<br/>and more!</div>
              <button className="btn-primary" style={{ width: 'auto', padding: '8px 16px', fontSize: 12, borderRadius: 20 }}>
                Explore Now &rsaquo;
              </button>
            </div>
            <div style={{ fontSize: 56, marginRight: 4 }}>📱</div>
            <div style={{ position: 'absolute', right: 20, bottom: 8, fontSize: 24, opacity: 0.5 }}>💰</div>
          </div>

          {/* Send Money */}
          <div className="card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div>
                <div className="sec-title">Send Money</div>
                <div style={{ fontSize: 11, color: '#9AA3B5' }}>To anyone, anywhere</div>
              </div>
              <button className="btn-ghost" style={{ fontSize: 12 }}>View All &rsaquo;</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
              {sendMoneyItems.map(item => (
                <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{item.emoji}</div>
                  <span style={{ fontSize: 10, color: '#4B5563', fontWeight: 500, textAlign: 'center', whiteSpace: 'pre-line', lineHeight: 1.3 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recharge & Bill */}
          <div className="card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div>
                <div className="sec-title">Recharge & Bill Payments</div>
                <div style={{ fontSize: 11, color: '#9AA3B5' }}>Pay for a better tomorrow</div>
              </div>
              <button className="btn-ghost" style={{ fontSize: 12 }}>View All &rsaquo;</button>
            </div>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
              {rechargeItems.map(item => (
                <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer', minWidth: 52 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{item.emoji}</div>
                  <span style={{ fontSize: 10, color: '#4B5563', fontWeight: 500, textAlign: 'center', whiteSpace: 'pre-line', lineHeight: 1.3 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Paytm Services */}
          <div className="card" style={{ padding: 16 }}>
            <div style={{ marginBottom: 14 }}>
              <div className="sec-title">Paytm Services</div>
              <div style={{ fontSize: 11, color: '#9AA3B5' }}>More services. More convenience.</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
              {serviceItems.map(item => (
                <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>{item.emoji}</div>
                  <span style={{ fontSize: 10, color: '#4B5563', fontWeight: 500, textAlign: 'center' }}>{item.label}</span>
                </div>
              ))}
              {/* Owner tile — highlighted with NEW badge */}
              <div
                onClick={() => navigate('/welcome-shop')}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer', position: 'relative' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#E8F5E9', border: '2px solid #1A6FE0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, position: 'relative' }}>
                  🏪
                  <span style={{ position: 'absolute', top: -6, right: -6, background: '#00C853', color: 'white', fontSize: 8, fontWeight: 700, padding: '2px 4px', borderRadius: 4 }}>NEW</span>
                </div>
                <span style={{ fontSize: 10, color: '#1A6FE0', fontWeight: 700, textAlign: 'center', lineHeight: 1.3 }}>Owner<br/><span style={{ color: '#9AA3B5', fontWeight: 500 }}>Grow Your<br/>Business</span></span>
              </div>
            </div>
          </div>

          {/* UPI Banner */}
          <div style={{ background: 'linear-gradient(135deg,#002D72 0%,#1565C0 100%)', borderRadius: 16, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <PaytmLogo size={16} />
                <span style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>UPI</span>
                <svg width="30" height="14" viewBox="0 0 48 20"><text y="15" fontSize="13" fill="white" fontWeight="700">UPI</text></svg>
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', marginBottom: 10 }}>Fast. Secure. Rewarding.<br/>Pay using Paytm UPI & get amazing offers!</div>
              <button className="btn-outline" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.5)', padding: '7px 14px', fontSize: 12 }}>
                Explore Offers &rsaquo;
              </button>
            </div>
            <div style={{ fontSize: 36 }}>📷</div>
          </div>

          <div style={{ height: 8 }} />
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
