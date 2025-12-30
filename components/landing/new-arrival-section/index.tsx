import ComponentHeading from '@/components/common/component-heading'
import NewArrivalsList from './list'

const NewArrivals = () => {
    
  return (
      <section  className='my-20'>
          {/* header */}
          <ComponentHeading
              title='New Arrivals'
              sub_title='Explore our new arrival products'
              link='#'
          />

          {/* list */}
          <NewArrivalsList/>
          
    </section>
  )
}

export default NewArrivals