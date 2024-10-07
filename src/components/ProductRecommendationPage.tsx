'use client';

import React, { useState } from 'react'
import { KeyFactors } from './KeyFactors'
import { FilterOptions } from './FilterOptions'
import { ProductDisplay } from './ProductDisplay'
import { ComparisonTable } from './ComparisonTable'
import InterestingFacts from './InterestingFacts'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

interface ProductRecommendationPageProps {
  category: 'luggage' | 'washing-machines'
}

const ProductRecommendationPage: React.FC<ProductRecommendationPageProps> = ({ category }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [showComparison, setShowComparison] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{category === 'luggage' ? 'Luggage' : 'Washing Machine'} Recommendations</h1>
      
      <KeyFactors category={category} />
      
      <div className="flex justify-between mb-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Refine Your Needs</Button>
          </SheetTrigger>
          <SheetContent>
            <FilterOptions category={category} />
          </SheetContent>
        </Sheet>
        
        <Button variant="outline" onClick={() => setShowComparison(!showComparison)}>
          {showComparison ? 'Hide Comparison' : 'Compare Models'}
        </Button>
      </div>
      
      <ProductDisplay category={category} />
      
      {showComparison && <ComparisonTable category={category} />}
      
      <InterestingFacts category={category} />
    </div>
  )
}

export default ProductRecommendationPage