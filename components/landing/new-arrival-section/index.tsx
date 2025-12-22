import ComponentHeading from '@/components/common/component-heading'
import React from 'react'
import NewArraivalsList from './list'

const NewArraivals = () => {
    
  return (
      <section>
          {/* header */}
          <ComponentHeading
              title='New Arrivals'
              sub_title='Explore our new arrival products'
              link='#'
          />

          {/* list */}
          <NewArraivalsList/>
          
    </section>
  )
}

export default NewArraivals