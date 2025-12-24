import Image from 'next/image'
import React from 'react'
import Button from '../common/ui/buttons/button'

const Hero = () => {
  return (
    <section className='relative min-h-[85vh] mt-2 rounded-sm overflow-clip' >
      {/* image */}
      <div className='absolute inset-0 rounded-sm z-1'>
        <Image
          src={'/hero.webp'}
          alt='landing hero image'
          height={1000}
          width={1000}
          className='h-full w-full'
        />
      </div>

      {/* overlay */}
      <div className='absolute inset-0 bg-black/45 z-10'></div>


      {/* content /tagline */}
      <div className='z-50 absolute inset-0 flex justify-center items-center'>
        <div className='w-140'>
          <div>
            <h1 className='text-5xl font-extrabold text-center text-white'>One Point Solution</h1>
            <p className='text-white text-center mt-2 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore recusandae magni incidunt corrupti ex accusantium voluptatum quo necessitatibus, veniam praesentium. Expedita obcaecati perferendis qui soluta esse illum saepe cupiditate? Recusandae.</p>
          </div>
          <div className=' w-50 mx-auto'>
            <Button
              label='Explore'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero