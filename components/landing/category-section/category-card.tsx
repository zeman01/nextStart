import { ICategory } from '@/types/category.types'
import Image from 'next/image'
import React from 'react'

interface IProps {
  category: ICategory
}

const Card: React.FC<IProps> = ({ category }) => {
  return (
    <div className='h-18 border border-gray-400 rounded-sm  px-1 py-2 flex gap-2 items-center tracking-wide shadow cursor-pointer bg-gray-100/35'>
      {/* image */}
      <div className='h-full aspect-square rounded-sm overflow-clip '>
        <Image
          src={category?.image.path}
          alt={category?.name}
          height={400}
          width={400}
          className='h-full w-full object-fill'
        />
      </div>
      {/* name + desc */}
      <div>
        <p className='text-[18px] font-bold'>{category.name}</p>
        <p className='text-[13px] text-black/60 line-clamp-2'>{category.description}</p>
      </div>
    </div>
  )
}

export default Card