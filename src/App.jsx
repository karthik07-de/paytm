import { Routes, Route, Navigate } from 'react-router-dom'
import MobileShell from './components/MobileShell'
import HomeScreen from './screens/HomeScreen'
import WelcomeShopOwner from './screens/WelcomeShopOwner'
import ShopTypeScreen from './screens/ShopTypeScreen'
import CreateOfferScreen from './screens/CreateOfferScreen'
import OfferOverviewScreen from './screens/OfferOverviewScreen'
import ManageOffersScreen from './screens/ManageOffersScreen'
import ManageOffersFullScreen from './screens/ManageOffersFullScreen'
import ManageOffersSingleScreen from './screens/ManageOffersSingleScreen'
import PaymentSuccessScreen from './screens/PaymentSuccessScreen'

export default function App() {
  return (
    <MobileShell>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/welcome-shop" element={<WelcomeShopOwner />} />
        <Route path="/shop-type" element={<ShopTypeScreen />} />
        <Route path="/create-offer" element={<CreateOfferScreen />} />
        <Route path="/offer-overview" element={<OfferOverviewScreen />} />
        <Route path="/manage-offers" element={<ManageOffersScreen />} />
        <Route path="/manage-offers-full" element={<ManageOffersFullScreen />} />
        <Route path="/manage-offers-single" element={<ManageOffersSingleScreen />} />
        <Route path="/payment-success" element={<PaymentSuccessScreen />} />
      </Routes>
    </MobileShell>
  )
}
