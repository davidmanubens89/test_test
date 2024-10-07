import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/washing-machines" className="text-gray-600 hover:text-gray-900">Washing Machines</Link></li>
              <li><Link to="/luggage" className="text-gray-600 hover:text-gray-900">Luggage</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">Our Story</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900"><Facebook size={24} /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><Twitter size={24} /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><Instagram size={24} /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          © 2023 LoveBuy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer