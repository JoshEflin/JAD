import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recipeIcon from '../../assets/recipeicon.png'
import groceryIcon from '../../assets/groceryicon.png'

const Homepage = () => {
    return (
        <div className='mt-10 mb-10'>
            <h1 className=''>Check out our categories!</h1>
            <div className='flex flex-row justify-center'>
                <Link className='inline-block m-5' to=''>
                    <img src={recipeIcon} className='w-40 h-40'/>
                </Link>
                <Link className='m-5'>
                    <img src={groceryIcon} className='w-40 h-40'/>
                </Link>
            </div>
        </div>
    )
}

export default Homepage;