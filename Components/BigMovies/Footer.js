import React from 'react'
import {
  FaGlobe,
  FaAngleDown,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div>
      <div className="h-auto w-full bg-[#161214] opacity-80">
        <div className="flex flex-row flex-wrap justify-around py-12 px-12">
          <div className="hidden h-[35px] w-[130px] flex-row items-center justify-between bg-[#362F33] px-1 font-[500] text-white  sm:flex">
            <FaGlobe size={20} />
            <span className="text-[16px]">English</span>
            <FaAngleDown size={20} />
          </div>
          <div className="flex flex-col  text-white">
            <div className="text-[16px] font-[700] uppercase"> Navigation </div>
            <div className="flex flex-col text-[14px]">
              <a href="" className="py-5">
                HOME
              </a>
              <a href="" className="pb-5">
                FAQs
              </a>
              <a href="" className="pb-5">
                Techical Support with us
              </a>
              <a href="" className="pb-5">
                About Us
              </a>
              <a href="" className="pb-5">
                Career
              </a>
              <a href="" className="pb-5">
                Help
              </a>
            </div>
          </div>
          <div className="flex flex-col text-white">
            <div className="text-[16px] font-[700] uppercase"> Legals </div>
            <div className="flex flex-col text-[14px]">
              <a href="" className="py-5">
                Privacy Policy
              </a>
              <a href="" className="pb-5">
                Terms of Services
              </a>
              <a href="" className="pb-5">
                Cookies Preferences
              </a>
              <a href="" className="pb-5">
                Corporate Information
              </a>
            </div>
          </div>
          <div className="flex flex-col text-white">
            <div className="text-[16px] font-[700] uppercase"> talk to us</div>
            <div className="flex flex-col text-[14px]">
              <a href="" className="py-5">
                supportus@gmail.com
              </a>
              <a href="" className="pb-5">
                +977 293473429
              </a>
            </div>
          </div>
          <div className="flex flex-col text-white ">
            <div className="text-[16px] font-[700] uppercase"> follow us</div>
            <div className="flex flex-row ">
              <div className="py-5 pr-5">
                <FaFacebook size={30} />
              </div>
              <div className="py-5 pr-5">
                <FaInstagram size={30} />
              </div>
              <div className="py-5 pr-5">
                <FaTwitter size={30} />
              </div>
              <div className="py-5 pr-5">
                <FaLinkedinIn size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
