import React from 'react'

export default function Coupon({ item }) {
    return (
        <div className='border border-solid w-1/5 mx-2 shadow-md shadow-black p-1 rounded-xl'>
            <h1 className='font-semibold text-amber-800 text-lg'>{item.amount}</h1>
            <p className='font-semibold'>{item.name}</p>
            <p>{item.description}</p>
            <button className='bg-green-500 p-1 rounded-md m-2 font-semibold hover:bg-green-400 shadow-md shadow-black'>Clip Coupon</button>
        </div>
    )
}