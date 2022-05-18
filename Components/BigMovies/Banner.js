import React from 'react'
import Image from 'next/image'
import Cat from '../../Images/cat.jpg'
import MoviescardWrapper from './MoviescardWrapper'
import BannerWrapper from './Bannerwrapper'
const Banner = () => {
  return (
    <div className="h-[845px]">
      <div className="relative h-[600px] w-full opacity-80">
        <Image src={Cat} alt="banner Image" layout="fill" objectFit="cover" />
        <div className="absolute top-[75%] w-full">
          <BannerWrapper />
        </div>
      </div>
    </div>
  )
}

export default Banner
