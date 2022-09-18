import React from 'react'

function Banner() {
  return (
    <>
        <div className='w-full h-60 lg:h-[32rem]'>
            <img className='w-full h-full object-cover' src={require("../assets/imgs/banner.jpeg")}></img>
        </div>
    </>
  )
}

export default Banner