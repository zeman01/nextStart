'use client'
import { getProductById } from '@/api/product.api'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ImageCarousel from './image-carousel'
import DetailSection from './detail-section'
import { FaStar } from "react-icons/fa6";

type IProps = {
  id:string
}

const ProductDetail = ({ id }: IProps) => {

  const {data , isLoading } = useQuery({
    queryFn: () => getProductById(id),
    queryKey:['get-product-by-id']
  })


  if (isLoading) {
    return (
      <div className='h-[85vh] w-full flex items-center justify-center '>
          <p>Loading Product</p>
      </div>
    )
  }


 const images = Array?.isArray(data?.data?.images) ? [...data?.data?.images , data?.data?.cover_image] : []
  
  console.log(data)
  return (
      <div className='grid grid-cols-5 gap-10 mt-10'>
      {/* right */}
      <div className='border border-gray-200 rounded h-155 col-span-2 shadow-sm'>
        <ImageCarousel images={images}/>
      </div>
      {/* left */}
       <div className='border border-gray-200 h-155 col-span-3 rounded shadow'>
        <DetailSection product={data?.data} />
      </div>
    </div>
  )
}

export default ProductDetail