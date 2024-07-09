import React from 'react'
import img from '../../public/img/cont1.png'

const ImgCont = () => {
  return (
    <div> 
        <div>
            <img src={img} alt="img" className=' max-w-[300px] w-full mt-5   ' />
            <h2 className=' mt-3 text-center text-2xl font-semibold' >Customare Care</h2>
        </div>
    </div>
  )
}

export default ImgCont