import React from 'react'

const ItemSelection = ({ selectedItem, setSelectedItem, setNumberOfItems,setPrice }) => {
    const remove = (id) => {
        setSelectedItem(prevVal =>  prevVal.filter(selct => selct.id !== id)
        )
        setNumberOfItems((PrevNumberOfItems) => PrevNumberOfItems - 1)
        setPrice((prevTotalPrice) => prevTotalPrice - selectedItem.price)
        
    }
    return (
        <>
            <div className=' border-b p-2 text-red-500 flex justify-between '>
                <div className=' flex gap-5' >
                    <img className=' w-24' src={selectedItem.image} alt="" />
                    <div className=' mt-3'>
                        <p>{selectedItem.name}</p>
                        <p>${selectedItem.price}</p>
                    </div>

                </div>
                <div onClick={() => remove(selectedItem.id)} className=' w-10 h-10 rounded-full text-center  bg-red-600 text-white  mt-5 text-2xl cursor-pointer'>x</div>

            </div>
        </>
    )
}

export default ItemSelection