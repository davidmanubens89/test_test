import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          lovebuy
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/luggage" className="text-gray-600 hover:text-indigo-600">Luggage</Link>
          <Link to="/washing-machines" className="text-gray-600 hover:text-indigo-600">Washing Machines</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Link to="/cart" className="text-gray-600 hover:text-indigo-600">
            <ShoppingCart size={24} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header