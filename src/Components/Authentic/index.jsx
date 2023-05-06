import React from 'react'
import apple1 from '../../Pictures/apple1.svg'

const Authentic = () => {
  return (
    <>
    <div className='pt-24 sm:w-full'>
        <div className=' w-[80%] mx-auto'>
            <div className=' flex justify-between'>
                <div className=' pt-36 leading-none max-sm:pt-10'>
                    <h1 className='text-[64px] max-sm:text-3xl'>Buy <span className=' font-bold'> Authentic </span>Laptops<br/>without worrying</h1>
                    <div className=' w-[159px] h-11 bg-black text-white mt-[70px] rounded-[30px] text-center pt-3 font-medium max-sm:mt-8'>Shop Now</div>
                </div>
                <img className='pt-14 max-sm:hidden lg:flex' src={apple1} alt="" />
            </div>
        </div>

    </div>
    </>
  )
}

export default Authentic