import React from 'react'
import ItemSelection from '../ItemSelection'

const CartDisplay = ({ selectedItem, close, totalPrice, setSelectedItem, setNumberOfItems, setPrice}) => {

    return (
        <>
            <div className=' w-[530px] h-[600px] border fixed top-[70px] flex end-0 rounded-lg bg-white '>
                <div className=' w-full '>
                    <div className=' flex justify-between p-7 text-2xl font-medium border-b-2  '>
                        <h3>Cart</h3>
                        <div>
                            <p onClick={close} className=' cursor-pointer hover:bg-red-600 hover:text-white hover:rounded-lg px-3'>X</p>
                        </div>
                    </div>
                    <div className='  overflow-y-auto h-[426px]'>
                        {
                            selectedItem.map((item, idx) => (
                                <ItemSelection key={idx} selectedItem={item} setSelectedItem={setSelectedItem} setNumberOfItems={setNumberOfItems} setPrice={setPrice} />

                            ))
                        }
                    </div>
                  

                    <div className=' absolute w-full bottom-0'>
                        <div className=' text-2xl font-medium p-6 border-t-2 flex justify-between'>
                            <h3>Total</h3>
                            <h3>${totalPrice.toLocaleString()}</h3>
                        </div>
                    </div>


                </div>

            </div>


        </>
    )
}

export default CartDisplay