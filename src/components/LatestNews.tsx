import React from 'react'
import { Link } from 'react-router-dom'

interface Article {
  title: string
  description: string
  image: string
}

const articles: Article[] = [
  {
    title: "Top 10 Washing Machine Features",
    description: "Discover the must-have features for your next washing machine...",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Luggage Trends for 2024",
    description: "Stay ahead of the curve with these upcoming luggage trends...",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Eco-Friendly Laundry Tips",
    description: "Learn how to reduce your environmental impact while doing laundry...",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
]

const LatestNews: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  )
}

const ArticleCard: React.FC<Article> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to="#" className="text-indigo-600 hover:text-indigo-800">Read more</Link>
      </div>
    </div>
  )
}

export default LatestNews