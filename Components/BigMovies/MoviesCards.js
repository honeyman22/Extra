import React from 'react'
import Image from 'next/image'
import Cat from '../../Images/cat.jpg'
import { FaEye, FaHeart } from 'react-icons/fa'
const MoviesCards = () => {
  return (
    <>
      <div className="flex w-full flex-col bg-[#0B0F16]/50 py-5 pl-5">
        <div className="relative h-[230px] w-[180px]">
          <Image src={Cat} alt="Card Image" layout="fill" objectFit="cover" />
        </div>
        <div className="text-[16px] font-[700] uppercase text-white">
          Hero heralal
        </div>
        <div className="text-[11px] font-[700] text-white">2019</div>
        <div className="flex h-[14px] w-[28px] flex-row ">
          <div className="bg-yellow-500 font-serif text-[12px] font-extrabold text-black ">
            Imdb
          </div>
          <div className="px-2 text-[11px] font-[700] text-yellow-500">4.6</div>
          <div className="pl-20 text-white ">
            <FaEye size={15} />
          </div>
          <div className="px-2 text-white">
            <FaHeart size={15} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MoviesCards
