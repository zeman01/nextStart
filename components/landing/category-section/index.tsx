import ComponentHeading from '@/components/common/component-heading'
import React from 'react'
import CategoryList from './category-list'

const CategorySection = () => {
  return (
      <section className='my-10'>
          {/* heaing section */}
          <ComponentHeading
              title='Featured Categories'
              sub_title='Explore products by all our featured categories'
              link='#'
          />
      {/* list section */}
      <CategoryList/>
          
        </section>
  )
}

export default CategorySection