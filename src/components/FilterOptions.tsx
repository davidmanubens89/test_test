import React from 'react'
import { Slider } from './ui/slider'
import { Checkbox } from './ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const filterOptions = {
  luggage: {
    brands: ['TravelPro', 'Samsonite', 'Away', 'American Tourister', 'Briggs & Riley'],
    sizes: ['Carry-on', 'Medium', 'Large'],
    materials: ['Softside', 'Hardside'],
    specialFeatures: ['Expandable', 'USB Charger', 'TSA Lock', 'Water Resistant'],
  },
  'washing-machines': {
    brands: ['LG', 'Samsung', 'Whirlpool', 'Maytag', 'GE'],
    types: ['Front Load', 'Top Load'],
    capacities: ['Compact', 'Medium', 'Large'],
    specialFeatures: ['Steam Clean', 'Smart Features', 'Energy Star', 'Quiet Operation'],
  },
}

interface FilterOptionsProps {
  category: 'luggage' | 'washing-machines'
}

export const FilterOptions: React.FC<FilterOptionsProps> = ({ category }) => {
  const options = filterOptions[category]

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Filter Options</h2>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Price Range</h3>
        <Slider defaultValue={[0, 100]} max={100} step={1} />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Brands</h3>
        {options.brands.map((brand) => (
          <div key={brand} className="flex items-center space-x-2">
            <Checkbox id={brand} />
            <label htmlFor={brand} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{brand}</label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">{category === 'luggage' ? 'Size' : 'Type'}</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            {(category === 'luggage' ? options.sizes : options.types).map((item) => (
              <SelectItem key={item} value={item}>{item}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">{category === 'luggage' ? 'Material' : 'Capacity'}</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            {(category === 'luggage' ? options.materials : options.capacities).map((item) => (
              <SelectItem key={item} value={item}>{item}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Special Features</h3>
        {options.specialFeatures.map((feature) => (
          <div key={feature} className="flex items-center space-x-2">
            <Checkbox id={feature} />
            <label htmlFor={feature} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{feature}</label>
          </div>
        ))}
      </div>
    </div>
  )
}