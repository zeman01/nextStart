import { IImage } from '@/types/global.types'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'


type IProps = {
    images:IImage[]
}

const ImageCarousel = ({images}:IProps) => {
     const settings = {
        dots: true,
        infinite: true,
         speed: 500,
         autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
         slidesToScroll: 1,
    };
  return (
      <div className='h-150 w-full'>
      <Slider {...settings} className=''>
        {
            images.map((image , i)=>{
                return (
                    <div className='h-full w-full ' key={image._id}>
                        <Image
                            src={image?.path}
                            alt={`image-${i +1}`}
                            height={1000}
                            width={1000}
                            className='h-full w-full object-fill'
                        />
                    </div>
                )
            })
        }
    </Slider>    
    </div>
  )
}

export default ImageCarousel