import ProductCard from '@/components/product/card'
import React from 'react'

const NewArraivalsList = () => {
     const list = Array.from({ length: 10 }, (_, i) => i + 1)
  return (
      <div className='mt-5 grid grid-cols-5 gap-3'>
          {
              list.map((product) => <ProductCard key={product}/>)
          }
    </div>
  )
}

export default NewArraivalsList