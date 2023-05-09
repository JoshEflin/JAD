import React from 'react'

export default function Coupon({ item }) {
    return (
        <div className='border border-solid border-gray-300 w-80 mx-2 shadow-md shadow-black p-1 rounded-xl'>
            <div className='p-4'>
                <h1 className='font-semibold text-amber-800 text-xl mb-2'>{item.amount}</h1>
                <p className='font-semibold text-gray-700 mb-2'>{item.name}</p>
                <p className='text-gray-600 mb-4'>{item.description}</p>
                <div className='flex justify-around'>
                    <button className='text-sm underline font-semibold text-amber-800'>Offer Details</button>
                    <button className='bg-green-500 p-1 rounded-xl m-2 text-white font-semibold hover:bg-green-600'>Clip Coupon</button>
                </div>
            </div>
        </div>
    )
}