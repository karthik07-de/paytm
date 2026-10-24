import StatusBar from './StatusBar'

export default function MobileShell({ children }) {
  return (
    <div className="shell">
      <StatusBar />
      {children}
    </div>
  )
}
