'use client'
import ComponentHeading from '@/components/common/component-heading'
import WishLists from '@/components/wishlist/list'
import withAuth from '@/hoc/with-auth.hoc'
import { USER_ROLE } from '@/types/global.types'

const Page = () => {
  return (
    <main className='h-full min-h-[85vh] py-6'>
      <ComponentHeading title='Wishlist' sub_title=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quisquam perferendis,' />
      <WishLists />
    </main>
  )
}

//! using hoc 
const WishlistPage = withAuth(Page, [USER_ROLE.USER])

export default WishlistPage