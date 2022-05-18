import React, { useEffect, useRef } from 'react'
import MoviesCards from './MoviesCards'

const BannerWrapper = () => {
  const container = useRef()

  // const Scroll = () => {
  //   container.current.scroll += 200
  //   console.log(container)
  // }

  // useEffect(() => {
  //   setInterval(Scroll(), 100)
  // }, [])
  return (
    <div className="h-auto w-full bg-[#0B0F16] pt-5 ">
      <div className="px-5 text-[18px] font-[700] capitalize text-white">
        The movies you want
      </div>
      <div
        ref={container}
        className="flex  w-full flex-row justify-start overflow-scroll pr-5 pb-5 scrollbar-hide"
      >
        {Array(10)
          .fill('-')
          .map((_, index) => (
            <MoviesCards key={index} />
          ))}
      </div>
    </div>
  )
}

export default BannerWrapper
