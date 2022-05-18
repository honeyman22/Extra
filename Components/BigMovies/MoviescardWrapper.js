import React, { useEffect, useRef } from 'react'
import MoviesCards from './MoviesCards'

const MoviescardWrapper = () => {
  const container = useRef()

  // const Scroll = () => {
  //   container.current.scroll += 200
  //   console.log(container)
  // }

  // useEffect(() => {
  //   setInterval(Scroll(), 100)
  // }, [])
  return (
    <div className="h-auto w-full bg-[#0B0F16] pt-5 pr-5 ">
      <div className="px-5 text-[18px] font-[700] capitalize text-white">
        The movies you want
      </div>
      <div className="flex  w-full flex-row justify-start overflow-scroll pt-2 scrollbar-hide">
        {Array(6)
          .fill('_')
          .map((item) => (
            <button className="ml-4 rounded-full bg-[#5C5C5C] px-8 py-2 text-[16px] font-[600] text-white hover:bg-[#E43109]">
              Hindi
            </button>
          ))}
      </div>
      <div
        ref={container}
        className="flex  w-full flex-row justify-start overflow-scroll  pb-5 scrollbar-hide"
      >
        {Array(10)
          .fill('-')
          .map((_, index) => (
            <div key={index} className="">
              <MoviesCards />
            </div>
          ))}
      </div>
    </div>
  )
}

export default MoviescardWrapper
