import { Link } from 'react-router-dom';
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

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Homepage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    return (
        <div className='mt-10 mb-10'>
                <h1 className='text-5xl font-semibold'>Check out our categories!</h1>
                <div className='flex flex-row justify-center'>
                    <div className='flex-col'>
                        <Link className='m-5' to='/recipes'>
                            <img src={recipeIcon} className='w-40 h-40'/>
                        </Link>
                        <h2>Recipes</h2>
                    </div>
                    <div className='flex-col'>
                        <Link className='m-5' to='/products'>
                            <img src={groceryIcon} className='w-40 h-40'/>
                        </Link>
                        <h2>Products</h2>
                    </div>
                </div>
                <div className='flex flex-row justify-center'>
                </div>
        <div>
            <Swiper className='mx-10 my-5 h-'>
                <SwiperSlide>
                    <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Slide+1"
                    alt="First slide"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Slide+2"
                    alt="Second slide"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Slide+3"
                    alt="Third slide"
                    />
                </SwiperSlide>
            </Swiper>
            </div>
            <h1 className='text-5xl font-semibold my-5'>Coupons & Deals</h1>
            <Slider {...settings}>
                <div className='flex flex-row my-5 flex-wrap'>
                    {couponData.map((item, index) => (
                        <Coupon key={index} item={item} />
                    ))}
                </div>
            </Slider>
        </div>
    )
}

export default Homepage;