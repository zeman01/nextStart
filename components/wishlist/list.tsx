'use client'
import React from 'react'
import ProductCard from '../product/card'
import { useQuery } from '@tanstack/react-query'
import { IWishlist } from '@/types/wishlist.types'
import { getWishlist } from '@/api/wishlist.api'

const WishLists = () => {

    // get request
    const {data , } = useQuery({
        queryFn: getWishlist,
        queryKey:['wishlist']
    })


  return (
      <section className='mt-6 grid grid-cols-5 gap-5'>
         {
              data?.data.length > 0 && data?.data.map((item:IWishlist) => {
                return <ProductCard key={item._id} wishlist product={item.product} />
            })
         }
    </section>
  )
}

export default WishLists