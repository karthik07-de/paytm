export default function StatusBar() {
  return (
    <div className="status-bar">
      <span className="time">9:41</span>
      <div className="status-icons">
        {/* Signal bars */}
        <svg width="17" height="13" viewBox="0 0 17 13" fill="#0D1B3E">
          <rect x="0"  y="7" width="3" height="6" rx="1"/>
          <rect x="4"  y="4" width="3" height="9" rx="1"/>
          <rect x="8"  y="2" width="3" height="11" rx="1"/>
          <rect x="12" y="0" width="3" height="13" rx="1" opacity="0.3"/>
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 24 18" fill="none" stroke="#0D1B3E" strokeWidth="2.2" strokeLinecap="round">
          <path d="M1 6.5a15.5 15.5 0 0 1 22 0"/>
          <path d="M4.5 10a10 10 0 0 1 15 0"/>
          <path d="M8.5 13.5a5 5 0 0 1 7 0"/>
          <circle cx="12" cy="17" r="1.2" fill="#0D1B3E" stroke="none"/>
        </svg>
        {/* Battery */}
        <svg width="22" height="13" viewBox="0 0 22 13">
          <rect x="0.75" y="0.75" width="18.5" height="11.5" rx="2.25" fill="none" stroke="#0D1B3E" strokeWidth="1.5"/>
          <rect x="2" y="2" width="15" height="9" rx="1.5" fill="#0D1B3E"/>
          <path d="M19.5 4.5h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v-4z" fill="#0D1B3E"/>
        </svg>
      </div>
    </div>
  )
}
