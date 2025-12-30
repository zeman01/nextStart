'use client'

import withAuth from '@/hoc/with-auth.hoc'
import { USER_ROLE } from '@/types/global.types'
import React from 'react'

const Page = () => {
  return (
      <main className='h-full min-h-[85vh]'>
           <div>Cart Page</div>
   </main>
  )
}

const CartPage = withAuth(Page, [USER_ROLE.USER])

export default CartPage