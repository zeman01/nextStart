import { IProduct } from '@/types/product.types'
import Image from 'next/image'
import React from 'react'
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

type IProps = {
  product: IProduct
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <div className='relative min-w-75  rounded-md border-gray-300 border overflow-clip'>

      {/* add to wishlist */}
      <div className='absolute w-fit right-2 top-2 cursor-pointer'>
        <FaRegHeart size={24} className='text-gray-800'/>
      </div>

      {/* image */}
      <div className='w-full h-50 p-1 rounded-md overflow-clip'>

        <Image
          src={product.cover_image.path}
          // src={/product/download.jpeg}
          alt={product.name}
          height={800}
          width={800}
          className='h-full w-full object-fill rounded-t-md'
        />


      </div>
      {/* price */}
      {/* category */}
      {/* desc */}
      <div className='px-1'>
        <p className='text-lg font-bold text-black/70 mt-2'>{product.name}</p>
        <div className='flex gap-1 items-center text-[16px]  mt-1'>
          <TbCurrencyRupeeNepalese size={22} className='text-blue-600' />
          <span>{product.price}</span>
        </div>

        <div className='flex gap-1 items-center my-2'>
          {/* category */}
          <p className='w-fit px-2 py-1 bg-blue-100 rounded-md text-xs font-bold text-gray-60'>{product.category.name}</p>
          {/* brand */}
          <p className='w-fit px-2 py-1 bg-blue-100 rounded-md text-xs font-bold text-gray-60'>{product.brand.name}</p>

        </div>
        {/* desc */}
        <p className='line-clamp-2 text-gray-500 text-[13px]'>{product.description}</p>



      </div>
      {/* view detail button */}
      <button className='mt-2 text-center bg-black/90 w-full py-3 text-white font-bold text-[16px] cursor-pointer'>
        View Detail
      </button>
    </div>
  )
}

export default ProductCard