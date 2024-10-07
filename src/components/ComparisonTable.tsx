import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Check, X } from 'lucide-react'

interface ComparisonTableProps {
  category: 'luggage' | 'washing-machines'
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ category }) => {
  const products = category === 'luggage' 
    ? [
        { name: 'TravelPro Maxlite 5', price: 159.99, size: '22"', material: 'Softside', wheelType: 'Spinner', lockType: 'TSA-approved', weight: '5.4 lbs', warranty: 'Limited Lifetime', expandable: true },
        { name: 'Samsonite Omni PC', price: 119.99, size: '20"', material: 'Hardside', wheelType: 'Spinner', lockType: 'TSA-approved', weight: '6.8 lbs', warranty: '10 Year Limited', expandable: true },
        { name: 'Delsey Paris Helium Aero', price: 149.99, size: '21"', material: 'Hardside', wheelType: 'Spinner', lockType: 'TSA-approved', weight: '8.2 lbs', warranty: '10 Year Limited', expandable: true },
      ]
    : [
        { name: 'LG Front Load Washer', price: 799.99, type: 'Front Load', capacity: '4.5 cu. ft.', energyStar: true, steamFunction: true, smartFeatures: true, quietOperation: true },
        { name: 'Samsung Top Load Washer', price: 649.99, type: 'Top Load', capacity: '5.0 cu. ft.', energyStar: true, steamFunction: false, smartFeatures: true, quietOperation: false },
        { name: 'Whirlpool Smart Washer', price: 899.99, type: 'Front Load', capacity: '5.0 cu. ft.', energyStar: true, steamFunction: true, smartFeatures: true, quietOperation: true },
      ]

  const features = category === 'luggage'
    ? ['Price', 'Size', 'Material', 'Wheel Type', 'Lock Type', 'Weight', 'Warranty', 'Expandable']
    : ['Price', 'Type', 'Capacity', 'Energy Star', 'Steam Function', 'Smart Features', 'Quiet Operation']

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Feature</TableHead>
          {products.map((product) => (
            <TableHead key={product.name}>{product.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((feature) => (
          <TableRow key={feature}>
            <TableCell>{feature}</TableCell>
            {products.map((product) => (
              <TableCell key={`${product.name}-${feature}`}>
                {renderFeatureValue(product, feature)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function renderFeatureValue(product: any, feature: string) {
  const value = product[feature.toLowerCase().replace(/ /g, '')]
  if (typeof value === 'boolean') {
    return value ? <Check className="text-green-500" /> : <X className="text-red-500" />
  }
  if (typeof value === 'number') {
    return `$${value.toFixed(2)}`
  }
  return value
}