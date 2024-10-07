import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import FilterSection from '../components/FilterSection'
import ConsiderationList from '../components/ConsiderationList'
import { Product, Consideration } from '../types'
import { getProductData, getConsiderationData } from '../utils/dataHelpers'

interface ProductRecommendationPageProps {
  productType: 'washing-machines' | 'luggage'
}

const ProductRecommendationPage: React.FC<ProductRecommendationPageProps> = ({ productType }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const products: Product[] = getProductData(productType)
  const considerations: Consideration[] = getConsiderationData(productType)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{productType === 'washing-machines' ? 'Washing Machines' : 'Luggage'} Recommendations</h1>
      
      <ConsiderationList considerations={considerations} />

      <div className="flex flex-col md:flex-row gap-8">
        <FilterSection isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} />
        <ProductList products={products} />
      </div>
    </div>
  )
}

export default ProductRecommendationPage