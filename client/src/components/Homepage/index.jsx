import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recipeIcon from '../../assets/recipeicon.png'
import groceryIcon from '../../assets/groceryicon.png'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

const Homepage = () => {
    return (
        <div>
        <Carousel touch={true} className='mx-10 my-5 h-'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Slide+1"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Slide+2"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400?text=Slide+3"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <div className='mt-10 mb-10'>
            <h1 className=''>Check out our categories!</h1>
            <div className='flex flex-row justify-center'>
                <div className='flex-col'>
                    <Link className='m-5' to=''>
                        <img src={recipeIcon} className='w-40 h-40'/>
                    </Link>
                    <h2>Recipes</h2>
                </div>
                <div className='flex-col'>
                    <Link className='m-5'>
                        <img src={groceryIcon} className='w-40 h-40'/>
                    </Link>
                    <h2>Products</h2>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
            </div>
        </div>
        </div>
    )
}

export default Homepage;