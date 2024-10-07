import React from 'react'
import { Link } from 'react-router-dom'

interface Category {
  name: string
  description: string
  path: string
}

const categories: Category[] = [
  {
    name: "Washing Machines",
    description: "Find the perfect washing machine for your home",
    path: "/washing-machines"
  },
  {
    name: "Luggage",
    description: "Discover the ideal luggage for your travels",
    path: "/luggage"
  }
]

const ProductCategories: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Product Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  )
}

const CategoryCard: React.FC<Category> = ({ name, description, path }) => {
  return (
    <Link to={path} className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}

export default ProductCategories