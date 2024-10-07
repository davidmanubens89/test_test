import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import ProductRecommendationPage from './components/ProductRecommendationPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/washing-machines" element={<ProductRecommendationPage category="washing-machines" />} />
          <Route path="/luggage" element={<ProductRecommendationPage category="luggage" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App