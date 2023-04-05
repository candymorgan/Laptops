import React from 'react'
import apple1 from '../../Pictures/apple1.svg'

const Authentic = () => {
  return (
    <>
    <div className=' pt-24'>
        <div className=' w-[1280px] mx-auto'>
            <div className=' flex justify-between'>
                <div className=' pt-36 leading-none'>
                    <h1 className='text-[64px]'>Buy <span className=' font-bold '> Authentic </span>Laptops<br/>without worrying</h1>
                    <div className=' w-[159px] h-11 bg-black text-white mt-[70px] rounded-[30px] text-center pt-3 font-medium'>Shop Now</div>
                </div>
                <img className=' pt-14' src={apple1} alt="" />
            </div>
        </div>

    </div>
    </>
  )
}

export default Authentic