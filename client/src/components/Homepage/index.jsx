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
            centerPadding: "40px",
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
            centerPadding: "10px",
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
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
      });
    const user = data?.me || data?.user || {};
    return (
        <div className='mt-10 mb-10'>
            {Auth.loggedIn() ? (
                <>
                <h1 className='text-7xl font-semibold my-8'>Hello {user.username}!</h1>
                </>
            ) : (
                <h1 className='text-xl font-semibold my-8'>Please sign in or register!</h1>
            )}
                <h1 className='text-5xl font-semibold'>Check out our categories!</h1>
                <div className='flex flex-row justify-center'>
                    <div className='flex-col'>
                        <Link className='m-5' to='/recipes'>
                            <img src={recipeIcon} className='w-40 h-40' alt='Recipe Icon'/>
                        </Link>
                        <h2 className='text-xl font-semibold text-center'>Recipes</h2>
                    </div>
                    <div className='flex-col'>
                        <Link className='m-5' to='/products'>
                            <img src={groceryIcon} className='w-40 h-40' alt='Grocery Icon'/>
                        </Link>
                        <h2 className='text-xl font-semibold text-center'>Products</h2>
                    </div>
                </div>
                {/* <div className='flex flex-row justify-center'>
                    <div className='w-full md:w-4/5 mx-auto'>
                        <Swiper className='mx-10 my-5 h-'>
                            <SwiperSlide>
                                <img
                                className="w-full h-full object-cover"
                                src="https://via.placeholder.com/800x400?text=Slide+1"
                                alt="First slide"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                className="w-full h-full object-cover"
                                src="https://via.placeholder.com/800x400?text=Slide+2"
                                alt="Second slide"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                className="w-full h-full object-cover"
                                src="https://via.placeholder.com/800x400?text=Slide+3"
                                alt="Third slide"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div> */}
            <h1 className='text-5xl font-semibold my-8'>Coupons & Deals</h1>
                <CouponSlider />
            </div>
    )
}

export default Homepage;