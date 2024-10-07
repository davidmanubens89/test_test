import React from 'react'
import SlidingBanner from '../components/SlidingBanner'
import ProductCategories from '../components/ProductCategories'
import LatestNews from '../components/LatestNews'
import Footer from '../components/Footer'

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <SlidingBanner />
        <ProductCategories />
        <LatestNews />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage