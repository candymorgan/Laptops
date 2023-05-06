import React from 'react'
import CartDisplay from '../CartDisplay'

const NavBar = ({numberOfItems, state, setState, selectedItem, setSelectedItem, price, setNumberOfItems, setPrice}) => {
    const closePopUp = () => {
        setState(false)
    }
    
    

    return (
        <>
            <div className='fixed bg-white w-full shadow '>
                <div className='w-[80%] h-[71px] mx-auto p-4'>
                    <div className='text-700 flex justify-between'>
                        <h1  className=' font-bold  text-3xl'>LAP<span className=' text-red-600 font-serif'>TOPS</span></h1>
                        <div onClick={() => setState(!state)} className=' pt-2'>
                            <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.231 28H0.398949C0.289742 28 0.185319 27.9525 0.110389 27.8685C0.0354594 27.7845 -0.00439694 27.6717 0.000385812 27.5554L0.897152 7.50996C0.907515 7.28341 1.08209 7.10608 1.29572 7.10608H18.3343C18.5471 7.10608 18.7225 7.28341 18.7328 7.50996L19.6296 27.5554C19.6344 27.6717 19.5953 27.7845 19.5196 27.8685C19.4439 27.9525 19.3395 28 19.231 28ZM0.816642 27.1515H18.8126L17.954 7.95456H1.67515L0.816642 27.1515Z" fill="black" />
                            <path d="M14.123 9.65152C13.903 9.65152 13.7245 9.46145 13.7245 9.22727V5.0103C13.7245 2.716 11.9708 0.848485 9.81457 0.848485C7.65835 0.848485 5.90467 2.716 5.90467 5.0103V9.22727C5.90467 9.46145 5.72611 9.65152 5.50611 9.65152C5.2861 9.65152 5.10754 9.46145 5.10754 9.22727V5.0103C5.10754 2.24764 7.21913 0 9.81457 0C12.41 0 14.5216 2.24764 14.5216 5.0103V9.22727C14.5216 9.46145 14.3438 9.65152 14.123 9.65152Z" fill="black" />
                        </svg>
                        <div className=' w-8 h-8 rounded-full text-center   bg-red-600 text-white relative bottom-10 left-4 text-lg'>{numberOfItems}</div>
                        </div>
                        {state && <CartDisplay selectedItem={selectedItem}
                         close={closePopUp}
                          totalPrice={price} 
                          setSelectedItem={setSelectedItem}
                          setNumberOfItems={setNumberOfItems}
                          setPrice={setPrice}/>}
                        
                    </div>
                </div>

            </div>

        </>
    )
}

export default NavBar