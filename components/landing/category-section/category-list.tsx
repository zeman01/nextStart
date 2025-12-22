import React from 'react'
import Card from './category-card'

const CategoryList = () => {

    const list = Array.from({ length: 8 }, (_, i) => i + 1)
   

  return (
      <div className='mt-4 grid grid-cols-4 gap-4'>
          {
              list.map((category)=> <Card key={category} />)
          }      
    </div>
  )
}

export default CategoryList