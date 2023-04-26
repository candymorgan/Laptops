import React from 'react'

const Footer = () => {
  return (
    <>
    <div className=' h-[170px] bg-[#EEEEEE] pt-5 mt-40'>
        
        <div className=' w-[80%] mx-auto flex justify-between'>
            <h1 className=' font-bold  text-3xl'>LAP<span className=' text-red-600 font-serif'>TOPS</span></h1>

            <div className=' flex gap-16 pt-2 font-medium'>
                <h3>ALL COLLECTIONS</h3>
                <h3>BRAND COLLECTIONS</h3>
                <h3>MEN COLLECTIONS</h3>
                <h3>WOMEN COLLECTIONS</h3>

            </div>
            
        </div>
        <hr className=' border mt-5' />

        <div className=' flex  justify-between w-[1280px] mx-auto pt-6'>
            <p>@2023 Candy Morgan inc. All Rights Reserved</p>
            <div className=' flex gap-20'>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>

        </div>

    </div>
    
    </>
  )
}

export default Footer