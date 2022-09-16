import React from 'react'

function Banner() {
  return (
    <>
        <div className='w-full h-60 bg'>
            <img className='w-full h-full object-cover' src={require("../assets/imgs/banner.png")}></img>
        </div>
    </>
  )
}

export default Banner