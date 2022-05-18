import React, { useState } from 'react'
import { FaGift, FaBell, FaUser, FaSearch } from 'react-icons/fa'
const Nav = () => {
  const [ismobile, setIsmobile] = useState(false)
  return (
    <div>
      <div className="relative h-[60px] bg-gradient-to-r from-[#000000]/75 to-[#6650A5]/75 px-4  shadow-lg">
        <div className="mx-auto  ">
          <div className="flex items-center justify-between ">
            <div className="flex space-x-7">
              <div className="border-pr hidden font-serif text-[36px] font-[400] uppercase text-yellow-500 sm:flex">
                {/* <!-- Website Logo -->
							<a href="#" className="flex items-center py-4 px-2">
								<img src="logo.png" alt="Logo" className="h-8 w-8 mr-2">
								<span className="font-semibold text-gray-500 text-lg">Navigation</span>
							</a> */}
                nepaflix
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden items-center space-x-1 md:flex">
                <a
                  href=""
                  className="py-4 px-2 font-[700] capitalize text-white transition duration-300 hover:text-orange-500"
                >
                  HOME
                </a>{' '}
                <a
                  href=""
                  className="py-4 px-2 font-[700] text-white transition duration-300 hover:text-orange-500"
                >
                  TV SHOW
                </a>{' '}
                <a
                  href=""
                  className="py-4 px-2 font-[700] text-white transition duration-300 hover:text-orange-500"
                >
                  MOVIES
                </a>{' '}
                <a
                  href=""
                  className="py-4 px-2 font-[700] text-white transition duration-300 hover:text-orange-500"
                >
                  NEW
                </a>
              </div>
            </div>

            {/** Search Field */}
            <div className="flex flex-row items-center rounded-full bg-[#3B567D] px-5 capitalize text-[white]">
              <input
                type="text"
                className="h-[35px] bg-inherit outline-none"
                placeholder="Search"
              />
              <FaSearch size={20} />
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div className="hidden items-center space-x-3 md:flex ">
              <div className="flex  h-[50px] w-[50px] cursor-pointer items-center justify-center text-[white]">
                <FaGift size={30} />
              </div>
              <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center text-[white]">
                <FaBell size={30} />
              </div>
              <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center text-[white]">
                <FaUser size={30} />
              </div>
            </div>
            {/* <!-- Mobile menu button --> */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => {
                  setIsmobile(!ismobile)
                  console.log('I am clicked')
                }}
                className="mobile-menu-button outline-none"
              >
                <svg
                  className=" h-6 w-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`mobile-menu absolute z-50 ${
            ismobile ? 'flex' : 'hidden'
          }`}
        >
          <ul className="">
            <li>
              <a
                href="#services"
                className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
              >
                MOVIES
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
              >
                TV SHOW
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
              >
                NEW
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
