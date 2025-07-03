import React, { useEffect } from "react";
import bannerImg1 from "/images/banner-img.png";
import bannerImg2 from "/images/banner-img3.png";
import bannerImg3 from "/images/banner-img4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const banners = [bannerImg1, bannerImg2, bannerImg3];

  return (
    <section id="banner" style={{ background: "#F9F3EC" }}>
      <div className="container">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="main-swiper"
        >
          {banners.map((img, index) => (
            <SwiperSlide className="py-5" key={index}>
              <div className="row banner-content align-items-center">
                <div className="img-wrapper col-md-5">
                  <img src={img} alt="Banner" className="img-fluid" />
                </div>
                <div className="content-wrapper col-md-7 p-5 mb-5">
                  <div className="secondary-font text-primary text-uppercase mb-4">
                    Save 10 - 20 % off
                  </div>
                  <h2 className="banner-title display-1 fw-normal">
                    Best destination for{" "}
                    <span className="text-primary">your pets</span>
                  </h2>
                  <a className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                    shop now
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="mb-1"
                    >
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
