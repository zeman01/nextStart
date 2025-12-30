import { IProduct } from '@/types/product.types'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { CiShoppingTag } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
type Props = {
    product:IProduct
}

const DetailSection = ({product}: Props) => {
  return (
      <div className='h-full w-full p-4'>
          {/* name & rating */}
          <div className='flex justify-between '>
              <h1 className='text-2xl font-bold  text-black/80'>{product.name}</h1>
              <div className='flex gap-1 items-center'>
                  <FaStar size={24} className='text-yellow-500' />
                  <span className='mt-0.5 text-lg'>4.5</span>
              </div>
          </div>

          

          {/* price */}
          <div className='flex gap-2 items-center mt-4'>
              <TbCurrencyRupeeNepalese size={24} className='text-blue-600' />
              <span className='text-[18px]'>{ product.price}</span>
          </div>

           <div className='flex gap-2 items-center mt-2'>
              <MdOutlineProductionQuantityLimits size={24} className='text-blue-600' />
              <span className='text-[18px]'>{ product.stock} pcs available</span>
          </div>
          <div className='flex gap-2 mt-2'>
              <div className='flex gap-2 items-center justify-center  border border-gray-300 p-1 rounded bg-blue-100 min-w-37.5'>
              <CiShoppingTag size={24} className='text-blue-600' />
              <span className='text-[18px]'>{ product.category.name}</span>
          </div>
           <div className='flex gap-2 items-center justify-center  border border-gray-300 p-1 rounded bg-blue-100 min-w-37.5'>
              <CiShoppingTag size={24} className='text-blue-600' />
              <span className='text-[18px]'>{ product.brand.name}</span>
          </div>
          </div>
          
          {/* description */}
          <div className='mt-10 text-gray-600 tracking-wider '>
              {product.description}
          </div>

          {/* quantity input */}

          <div className='mt-10'>
              <h1>Quantity:</h1>
               <div className='border border-gray-300 flex max-w-fit rounded h-14 py-0.5 mt-2' >
              <button  className='h-full aspect-square text-center border-r border-gray-300' >
                  +
            </button>
            <input defaultValue={1} className='text-center h-full outline-none'  />
               <button className='h-full aspect-square text-center border-l border-gray-300'>
                  -
            </button>
          </div>
         </div>

          {/* buttons */}
          <div className='flex gap-4 w-full'>
              <button className='bg-black/90 text-white font-bold flex-1 py-3 mt-10 rounded-md text-lg cursor-pointer '>
                  Add to Cart
              </button>
               <button className='border border-black/90 text-black/90 font-bold  flex-1 py-3 mt-10 rounded-md text-lg cursor-pointer'>
                  Add to Wishlist
              </button>
          </div>
          
    </div>
  )
}

export default DetailSection