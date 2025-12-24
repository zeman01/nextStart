import ProductCard from '@/components/product/card'
import { IImage } from '@/types/global.types'
import React from 'react'


const products = [
  {
    _id: Date.now().toString(),
    name: "Test Product",
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam cum perferendis iste necessitatibus. Autem molestias laborum distinctio ad culpa facere. Aliquid, iusto! Laborum, debitis tenetur velit laudantium consectetur itaque.',
    cover_image: {
      path: '/laptop.jpg',
      public_id: Date.now().toString()

    },
    images:[] as IImage[],
    category: {
      _id: Date.now().toString(),
      name: 'Test Category',
      description: '',
       image: {
      path: '/laptop.jpg',
      public_id: Date.now().toString()

    },
      

    },
    brand: {
      _id: Date.now().toString(),
      name: 'Test Brand',
      description: '',
       logo: {
      path: '/laptop.jpg',
      public_id: Date.now().toString()

    },


    },
    price: 150000,
    stock: 10,
    new_arrival: true,
    is_featured: false
  }
]

const NewArraivalsList = () => {
  const list = Array.from({ length: 10 }, (_, i) => products[0])
  return (
    <div className='mt-5 grid grid-cols-5 gap-3'>

      {
        list.map((product) => <ProductCard key={product._id} product={ product} />)
      }
    </div>
  )
}

export default NewArraivalsList