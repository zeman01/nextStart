import ComponentHeading from '@/components/common/component-heading'
import React from 'react'
import FeaturedProductList from './list'

const FeaturedProducts = () => {
    
  return (
      <section className='mt-20'>
          {/* header */}
          <ComponentHeading
              title='Featured Products'
              sub_title='Explore our featured products'
              link='#'
          />

          {/* list */}
          <FeaturedProductList/>
          
    </section>
  )
}

export default FeaturedProducts