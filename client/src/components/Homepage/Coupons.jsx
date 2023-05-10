import React from 'react'

export default function Coupon({ item }) {
    return (
        <div className='border border-solid border-gray-300 w-80 mx-2 shadow-md shadow-black p-1 rounded-xl my-3'>
            <div className='p-4'>
                <h1 className='font-semibold text-amber-800 text-xl mb-2'>{item.amount}</h1>
                <p className='font-semibold text-gray-700 mb-2'>{item.name}</p>
                <p className='text-gray-600 mb-4'>{item.description}</p>
                <div className='flex justify-around'>
                    <button className='text-sm underline font-semibold text-amber-800'>Offer Details</button>
                    <button className='bg-green-500 py-2 px-4 rounded-xl text-white font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'>Clip Coupon</button>
                </div>
                <p className='text-sm pt-3'>One time use</p>
                <p className='text-sm'>Expires 5/27/2023</p>
            </div>
        </div>
    )
}