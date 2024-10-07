import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Star } from 'lucide-react'

interface Product {
  id: number
  name: string
  brand: string
  price: number
  rating: number
  image: string
  features: string[]
}

const dummyProducts: Record<'luggage' | 'washing-machines', Product[]> = {
  luggage: [
    {
      id: 1,
      name: "TravelPro Maxlite 5",
      brand: "TravelPro",
      price: 159.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      features: ["Lightweight", "Expandable", "360° spinner wheels"]
    },
    {
      id: 2,
      name: "Samsonite Omni PC",
      brand: "Samsonite",
      price: 119.99,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      features: ["Scratch-resistant", "TSA locks", "Spacious interior"]
    },
    {
      id: 3,
      name: "Away The Medium",
      brand: "Away",
      price: 295,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1550089479-fe0e48e7d788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      features: ["Built-in USB charger", "360° spinner wheels", "Water-resistant"]
    },
  ],
  'washing-machines': [
    {
      id: 1,
      name: "LG Front Load Washer",
      brand: "LG",
      price: 799.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      features: ["Steam function", "Large capacity", "Energy Star certified"]
    },
    {
      id: 2,
      name: "Samsung Top Load Washer",
      brand: "Samsung",
      price: 649.99,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      features: ["Super Speed Wash", "Self Clean+", "Vibration Reduction Technology"]
    },
    {
      id: 3,
      name: "Whirlpool Smart Washer",
      brand: "Whirlpool",
      price: 899.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
      features: ["Load & Go™ Dispenser", "Built-in water faucet", "WiFi connectivity"]
    },
  ],
}

interface ProductDisplayProps {
  category: 'luggage' | 'washing-machines'
}

export const ProductDisplay: React.FC<ProductDisplayProps> = ({ category }) => {
  const products = dummyProducts[category]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <Badge>{product.brand}</Badge>
            <p className="text-2xl font-bold text-indigo-600 mt-2">${product.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                />
              ))}
              <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-4 w-full">View Details</Button>
          </div>
        </div>
      ))}
    </div>
  )
}