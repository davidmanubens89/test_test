import { Product, Consideration, ProductType } from '../types'

export const getProductData = (productType: ProductType): Product[] => {
  if (productType === 'washing-machines') {
    return [
      { id: 1, name: "EcoWash Pro", price: 599, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: "Energy-efficient with multiple wash cycles" },
      { id: 2, name: "SpeedMaster 3000", price: 799, image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", description: "Quick wash cycles with large capacity" },
      { id: 3, name: "SilentWash Deluxe", price: 899, image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: "Ultra-quiet operation with smart features" },
    ]
  } else {
    return [
      { id: 1, name: "TravelPro Maxlite 5", price: 149, image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: "Lightweight and durable carry-on" },
      { id: 2, name: "Samsonite Omni PC", price: 199, image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: "Hardside spinner with scratch-resistant exterior" },
      { id: 3, name: "Away The Medium", price: 295, image: "https://images.unsplash.com/photo-1550089479-fe0e48e7d788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: "Stylish design with built-in USB charger" },
    ]
  }
}

export const getConsiderationData = (productType: ProductType): Consideration[] => {
  if (productType === 'washing-machines') {
    return [
      { icon: "🔧", title: "Capacity", description: "Consider your laundry volume" },
      { icon: "⚡", title: "Energy Efficiency", description: "Look for energy-saving features" },
      { icon: "🔊", title: "Noise Level", description: "Check decibel ratings for quieter operation" },
      { icon: "🧼", title: "Wash Cycles", description: "Ensure it has cycles for your needs" },
    ]
  } else {
    return [
      { icon: "📏", title: "Size", description: "Check airline size restrictions" },
      { icon: "🏋️", title: "Weight", description: "Consider lightweight options for easy handling" },
      { icon: "🔒", title: "Security", description: "Look for TSA-approved locks" },
      { icon: "🛠️", title: "Durability", description: "Choose materials that can withstand travel" },
    ]
  }
}