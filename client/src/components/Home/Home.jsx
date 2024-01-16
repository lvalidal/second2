
import './Home.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import PhoneIcon from '@mui/icons-material/Phone';

function Home() {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div>
        <div className="navbar">
            <div className="logo">Pulse.</div>
            <div className="pages">
                <div className="home">Home</div>
                <div className="about">About Us</div>
                <div className="rest">Restuarant</div>
                <div className="news">News</div>
                <div className="contact">Contact</div>
            </div>
            <div className="number">
                <div className="rezerv">Reservations</div>
                <div className="phone"> <PhoneIcon /> <p>652-345 3222 11</p></div>
            </div>
        </div>
        <div className="special">
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://media.cnn.com/api/v1/images/stellar/prod/211006114703-best-meal-delivery-service-freshly.jpg?q=w_1601,h_900,x_0,y_0,c_fill" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.thriveusahomecare.com/wp-content/uploads/2022/04/the-10-best-tricks-to-make-weekly-meal-prep-a-breeze-hero.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.retailtouchpoints.com/wp-content/uploads/2022/06/GNC_2022_June_2022_RealEats_Expansion-960x540.jpg" alt="" /></SwiperSlide>

      </Swiper>
        </div>
    </div>
  )
}

export default Home