import ComponentHeading from '@/components/common/component-heading'
import NewArraivalsList from './list'

const NewArraivals = () => {
    
  return (
      <section  className='my-20'>
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