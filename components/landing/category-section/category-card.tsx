import Image from 'next/image'
import React from 'react'

const Card = () => { 
  return (
      <div className='h-18 border border-gray-400 rounded-sm  px-1 py-2 flex gap-2 items-center tracking-wide shadow cursor-pointer bg-gray-100/35'>
          {/* image */}
          <div className='h-full aspect-square '>
              <Image
                src={'/logo.svg'}
                  alt={'category-image'}
                  height={400}
                  width={400}
                  className='h-full w-full object-fill'
              />
          </div>
          {/* name + desc */}
          <div>
              <p className='text-[18px] font-bold'>Category Name</p>
              <p className='text-[13px] text-black/60 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ad accusantium sint suscipit pariatur neque,</p>
          </div>
    </div>
  )
}

export default Card