import React, { useEffect, useState } from 'react'
import Image from 'next/image'
const UloadingImage = () => {
  const formdataList = new Array()

  const handelClick = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    formdataList.push(data)
    console.log(formdataList)
  }
  const [image, setImage] = useState([])
  const [imageurl, setImageurl] = useState([])
  useEffect(() => {
    if (image.length < 1) return
    const newimageUrl = []
    image.forEach((image) => newimageUrl.push(URL.createObjectURL(image)))
    setImageurl(newimageUrl)
  }, [image])
  const handelChange = (e) => {
    setImage((old) => [...old, e.target.files[0]])
  }
  return (
    <>
      {/* <form id="myform" name="myForm" onSubmit={handelClick}>
        <div className="">
          <label htmlFor="username">Enter Name:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="">
          <label htmlFor="email">Enter Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="">
          <button type="submit">Submit</button>
        </div>
      </form> */}

      <input type="file" multiple accept="image/jpeg" onChange={handelChange} />

      {imageurl?.map((imag) => (
        <div className="relative h-[350px] w-[500px]">
          <Image src={imag} alt={imag} layout="fill" objectFit="contain" />
        </div>
      ))}
    </>
  )
}
export default UloadingImage
