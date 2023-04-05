import { array1 } from "../Array"



const LaptopDisplay = ({item}) => {
   
    return (
        <>
            <div className=''>
                <div className=' w-[1280px] mx-auto pt-28 border border-green-500'>
                    <div className='w-[700px] h-16 flex justify-between rounded-[30px] bg-white shadow'>
                        <div className=' flex gap-5 p-5 text-xl text-slate-400'>
                            <svg className=' mt-1' width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 19L14.65 14.65" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input className=' w-96 outline-none' type="text" placeholder='Search for Laptops' />
                        </div>
                        <div className=' w-44 bg-black rounded-[30px] text-white text-center text-xl pt-4 font-medium'>Search Now</div>
                    </div>

                    <div className=' flex flex-wrap mt-40 justify-between gap-y-28'>
                        {array1.map((array) => (
                            <div className=' shadow-md rounded-xl font-bold'>
                                <img className='  w-[276px]' src={array.image} alt="" />
                                <div className=' flex justify-between p-4'>
                                    <div>
                                        <h1>{array.name}</h1>
                                        <div onClick={() => item(array)} className=' h-11 bg-red-600 text-white p-2 text-center mt-3 cursor-pointer rounded-md '>Add to Cart</div>
                                    </div>

                                    <p className=' text-red-700 '>${array.price}</p>
                                </div>
                            </div>

                        ))}


                    </div>
                </div>


            </div>
        </>
    )
}

export default LaptopDisplay