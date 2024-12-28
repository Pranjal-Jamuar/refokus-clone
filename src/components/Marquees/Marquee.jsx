import React from "react"

const Marquee = ({ imagesUrl, direction }) => {
  return (
    <div className='flex py-8 gap-20 w-full overflow-hidden'>
      {imagesUrl.map((url, index) => (
        <img key={index} src={url} className='w-[8vw] flex-shrink-0' />
      ))}
    </div>
  )
}

export default Marquee
