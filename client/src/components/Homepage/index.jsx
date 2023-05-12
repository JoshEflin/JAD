import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import recipeIcon from '../../assets/recipeicon.png'
import groceryIcon from '../../assets/groceryicon.png'
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.css';
import Coupon from './Coupons'
import couponData from './CouponData'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/swiper-bundle.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { QUERY_USER, QUERY_ME } from '../../utils/queries'

import Auth from "../../utils/auth";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function CouponSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,
        centerPadding: "70px 40px",
        responsive: [
        
        {
            breakpoint: 1300,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerPadding: "40px 40px",
            },
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerPadding: "40px",
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "10px 40px",
            },
        },
        ],
      };
    return (
        <div className='w-full h-80'>
            <Slider {...settings}>
                {couponData.map((item, index) => (
                    <div key={index} className='w-80 h-60 mr-4'>
                        <Coupon item={item} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

const Homepage = () => {
    const [recipeHovered, setRecipeHovered] = useState(false);
    const [groceryHovered, setGroceryHovered] = useState(false);
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
      });
    const user = data?.me || data?.user || {};
    return (
        <div className='mt-10 mb-10'>
            {Auth.loggedIn() ? (
                <>
                <h1 className='text-5xl font-semibold my-8 sm:text-7xl hover:cursor-default'>Hello {user.username}!</h1>
                </>
            ) : (
                <h1 className='text-xl font-semibold my-8 hover:cursor-default'>Please sign in or register!</h1>
            )}
                <h1 className='text-3xl font-semibold sm:text-5xl hover:cursor-default'>Check out our categories!</h1>
                <div className='flex flex-row justify-center'>
                    <div className='flex-col'>
                        <Link
                        className='m-5'
                        to='/recipes'
                        onMouseEnter={() => setRecipeHovered(true)}
                        onMouseLeave={() => setRecipeHovered(false)}
                        >
                            <img src={recipeIcon} className={`w-40 h-40 ${recipeHovered ? 'filter brightness-200'  : ''}`} alt='Recipe Icon'/>
                        </Link>
                        <h2 className='text-xl font-semibold text-center hover:cursor-default'>Recipes</h2>
                    </div>
                    <div className='flex-col'>
                        <Link
                        className='m-5'
                        to='/products'
                        onMouseEnter={() => setGroceryHovered(true)}
                        onMouseLeave={() => setGroceryHovered(false)}
                        >
                            <img src={groceryIcon} className={`w-40 h-40 ${groceryHovered ? 'filter brightness-200'  : ''}`} alt='Grocery Icon'/>
                        </Link>
                        <h2 className='text-xl font-semibold text-center hover:cursor-default'>Products</h2>
                    </div>
                </div>
            <h1 className='text-3xl font-semibold my-8 sm:text-5xl hover:cursor-default'>Coupons & Deals</h1>
                <CouponSlider />
            </div>
    )
}

export default Homepage;