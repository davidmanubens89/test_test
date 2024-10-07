import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui'

interface KeyFactorsProps {
  category: 'luggage' | 'washing-machines'
}

const KeyFactors: React.FC<KeyFactorsProps> = ({ category }) => {
  const factors = category === 'luggage'
    ? [
        { title: 'Size', description: 'Consider airline restrictions and your travel needs' },
        { title: 'Durability', description: 'Look for sturdy materials that can withstand travel' },
        { title: 'Weight', description: 'Lighter luggage is easier to handle and may avoid fees' },
        { title: 'Features', description: 'Think about wheels, handles, and compartments' }
      ]
    : [
        { title: 'Capacity', description: 'Choose based on your household size and laundry habits' },
        { title: 'Energy Efficiency', description: 'Look for Energy Star certified models' },
        { title: 'Wash Cycles', description: 'Consider the types of clothes you usually wash' },
        { title: 'Noise Level', description: 'Important if your laundry area is near living spaces' }
      ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Key Factors to Consider</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {factors.map((factor, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-white p-4 rounded-lg shadow-md cursor-help">
                  <h3 className="font-semibold text-lg">{factor.title}</h3>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{factor.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}

export { KeyFactors }