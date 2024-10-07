import React from 'react'
import { Consideration } from '../types'

interface ConsiderationListProps {
  considerations: Consideration[]
}

const ConsiderationList: React.FC<ConsiderationListProps> = ({ considerations }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Important Considerations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {considerations.map((item, index) => (
          <ConsiderationItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

const ConsiderationItem: React.FC<Consideration> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-start">
      <span className="text-3xl mr-3">{icon}</span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default ConsiderationList