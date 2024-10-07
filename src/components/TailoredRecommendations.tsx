import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const TailoredRecommendations: React.FC = () => {
  return (
    <section className="mb-12 bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-4">Tailored Recommendations</h2>
      <p className="text-gray-600 mb-4">Get a curated list of top options, and refine it as you tell us more about your needs</p>
      <Link to="/recommendations" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
        Start now <ChevronRight size={20} />
      </Link>
    </section>
  )
}

export default TailoredRecommendations