import ComponentHeading from '@/components/common/component-heading'
import WishLists from '@/components/wishlist/list'
import React from 'react'

const Page = () => {
    return (
      <main className='h-full min-h-[85vh] py-6'>
        <ComponentHeading title='Wishlist' sub_title=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quisquam perferendis,' />
        <WishLists/>
      </main>
  )
}

export default Page