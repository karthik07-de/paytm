import { useNavigate, useLocation } from 'react-router-dom'

const tabs = [
  {
    label: 'Home', path: '/home',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#1A6FE0' : '#9AA3B5'}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    )
  },
  {
    label: 'My Shop', path: '/offer-overview',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#1A6FE0' : '#9AA3B5'} strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinejoin="round"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  {
    label: 'Offers', path: '/manage-offers',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#1A6FE0' : '#9AA3B5'} strokeWidth="1.8">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    label: 'Insights', path: '/home',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#1A6FE0' : '#9AA3B5'} strokeWidth="1.8">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6"  y1="20" x2="6"  y2="14"/>
      </svg>
    )
  },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="bottom-nav">
      {tabs.map(t => {
        const active = pathname === t.path
        return (
          <div key={t.label} className={`nav-tab ${active ? 'active' : ''}`} onClick={() => navigate(t.path)}>
            {t.icon(active)}
            <span>{t.label}</span>
          </div>
        )
      })}
    </div>
  )
}
