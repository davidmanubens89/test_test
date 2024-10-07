'use client';

import React from 'react'
import ProductRecommendationPage from '@/components/ProductRecommendationPage'

export default function CategoryPage({ params }: { params: { category: string } }) {
  return <ProductRecommendationPage category={params.category as 'luggage' | 'washing-machines'} />
}