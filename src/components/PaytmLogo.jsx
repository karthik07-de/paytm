export default function PaytmLogo({ size = 20 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', userSelect: 'none' }}>
      <span style={{ fontSize: size, fontWeight: 800, color: '#002D72', fontFamily: 'Inter,sans-serif', letterSpacing: '-0.5px' }}>pay</span>
      <span style={{ position: 'relative', fontSize: size, fontWeight: 800, color: '#002D72', fontFamily: 'Inter,sans-serif', paddingBottom: 4, marginBottom: -4 }}>
        t
        <span style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          width: Math.round(size * 0.3), height: Math.round(size * 0.3),
          background: '#00BAF2', borderRadius: '50%',
        }} />
      </span>
      <span style={{ fontSize: size, fontWeight: 800, color: '#00BAF2', fontFamily: 'Inter,sans-serif' }}>m</span>
    </div>
  )
}
