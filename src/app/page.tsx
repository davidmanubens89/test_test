import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to LoveBuy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/luggage" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Luggage Recommendations</h2>
          <p>Find the perfect luggage for your travels</p>
        </Link>
        <Link href="/washing-machines" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Washing Machine Recommendations</h2>
          <p>Discover the ideal washing machine for your home</p>
        </Link>
      </div>
    </div>
  )
}