'use client';

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Fact {
  text: string
  image: string
}

const facts: Record<'luggage' | 'washing-machines', Fact[]> = {
  luggage: [
    { text: "The average traveler brings 3-4 pairs of shoes on a trip.", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { text: "The first wheeled suitcase was invented in 1970.", image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { text: "The most expensive luggage ever sold cost over $1 million.", image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
  ],
  'washing-machines': [
    { text: "The first electric-powered washing machine was invented in 1908.", image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { text: "An average washing machine uses 41 gallons of water per load.", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
    { text: "Some washing machines use AI to optimize water and energy usage.", image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
  ],
}

const InterestingFacts: React.FC<{ category: 'luggage' | 'washing-machines' }> = ({ category }) => {
  const [currentFact, setCurrentFact] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts[category].length)
    }, 5000)
    return () => clearInterval(timer)
  }, [category])

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % facts[category].length)
  }

  const prevFact = () => {
    setCurrentFact((prev) => (prev - 1 + facts[category].length) % facts[category].length)
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Be amazed by your product</h2>
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center p-6">
          <img src={facts[category][currentFact].image} alt="Interesting fact" className="w-1/3 h-48 object-cover rounded-lg mr-6" />
          <p className="text-lg">{facts[category][currentFact].text}</p>
        </div>
        <button onClick={prevFact} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={nextFact} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export default InterestingFacts