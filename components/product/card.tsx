import { IProduct } from '@/types/product.types'
import Image from 'next/image'
import React from 'react'
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';
import { useMutation, QueryClient, useQueryClient } from '@tanstack/react-query';
import { addToWishlist } from '@/api/whishlist.api';
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from "react-icons/fa";

type IProps = {
  product: IProduct,
  wishlist?:boolean
}

const ProductCard: React.FC<IProps> = ({ product ,wishlist=false}) => {

  const queryClient = useQueryClient()
  // mutation
  const { mutate, isPending } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: (response) => {
      toast.success(response.message || 'Product added list')
      queryClient.invalidateQueries({
        queryKey:['wishlist']
      })
    },
    onError: (error) => {
      toast.error(error.message || 'Something went wrong')
    }
  })

  return (
    <div className='relative min-w-75 rounded-md border-gray-300 border overflow-clip'>

      {/* add to wishlist */}
      <button disabled={isPending} onClick={() => { mutate(product._id) }} className='absolute w-fit right-2 top-2 cursor-pointer disabled:cursor-not-allowed'>
        {wishlist ? <FaRegTrashAlt size={24} className='text-red-500' />  : <FaRegHeart size={24} className='text-gray-800' />}
      </button>

      {/* image */}
      <div className='w-full h-50 p-1 rounded-md overflow-clip'>

        <Image
          src={product.cover_image.path}
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
        <p className='line-clamp-2 text-gray-500 text-[13px] h-10'>{product.description}</p>



      </div>
      {/* view detail button */}
      <Link href={`/product/${product._id}?name=${product.name}&d=${product.description}`}>
        <button className='mt-2 text-center bg-black/90 w-full py-3 text-white font-bold text-[16px] cursor-pointer'>
          View Detail
        </button>
      </Link>
    </div>
  )
}

export default ProductCard