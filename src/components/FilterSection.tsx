import React from 'react'
import { Filter } from 'lucide-react'

interface FilterSectionProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const FilterSection: React.FC<FilterSectionProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="md:w-1/4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg mb-4 flex items-center justify-center md:hidden"
      >
        <Filter size={20} className="mr-2" />
        {isOpen ? 'Hide Filters' : 'Show Filters'}
      </button>
      <div className={`bg-white rounded-lg shadow-md p-4 ${isOpen ? 'block' : 'hidden md:block'}`}>
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="space-y-4">
          <PriceRangeFilter />
          <BrandFilter />
          {/* Add more filter components as needed */}
        </div>
      </div>
    </div>
  )
}

const PriceRangeFilter: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Price Range</h3>
      <input type="range" min="0" max="1000" className="w-full" />
    </div>
  )
}

const BrandFilter: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Brand</h3>
      {/* Add checkboxes for brands */}
    </div>
  )
}

export default FilterSection