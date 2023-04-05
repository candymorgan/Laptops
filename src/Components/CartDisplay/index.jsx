import React from 'react'
import ItemSelection from '../ItemSelection'
import { array1 } from "../Array"
// import ItemSelection from '../ItemSelection'
// import teaMac from '../../Pictures/teaMac.svg'

const CartDisplay = ({ selectedItem, close, totalPrice, numberOfItems}) => {
    
    return (
        <>
            <div className=' w-[540px] h-[600px] border fixed top-[70px] left-[1208px] rounded-lg bg-white'>
                <div className=' flex justify-between p-7 text-2xl font-medium border-b-[3px]'>
                    <h3>Cart</h3>
                    <p onClick={close} className=' cursor-pointer hover:bg-red-600 hover:text-white hover:rounded-lg px-3'>X</p>
                </div>
                {
                // array1.map((array) => (
                numberOfItems > 0 && <ItemSelection selectedItem={selectedItem}/>

                // ))
               }
                {/* <div className=' border-b p-2 text-red-500 flex justify-between'>
                    <div className=' flex gap-5' >
                        <img className=' w-24' src={selectedItem.image} alt="" />
                        <div className=' mt-3'>
                            <p>{selectedItem.name}</p>
                            <p>{selectedItem.price}</p>
                        </div>

                    </div>
                    <div className=' w-10 h-10 rounded-full text-center   bg-red-600 text-white  mt-5 text-2xl cursor-pointer'>x</div>

                </div> */}
                <div className=' text-2xl font-medium p-7 absolute bottom-0 w-full bg-white flex justify-between'>
                    <h3>Total</h3>
                    <h3>${totalPrice}</h3>
                </div>
            </div>


        </>
    )
}

export default CartDisplay