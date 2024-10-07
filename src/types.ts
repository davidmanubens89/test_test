export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export interface Consideration {
  icon: string
  title: string
  description: string
}

export type ProductType = 'washing-machines' | 'luggage'