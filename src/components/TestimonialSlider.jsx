import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    content:
      "At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.",
    author: "Joshima Lin",
  },
  {
    content:
      "At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.",
    author: "Joshima Lin",
  },
  {
    content:
      "At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.",
    author: "Joshima Lin",
  },
];

const TestimonialSlider = () => {
  return (
    <section id="testimonial">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="offset-md-1 col-md-10">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="testimonial-swiper"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className="row">
                    <div className="col-2">
                      <iconify-icon
                        icon="ri:double-quotes-l"
                        class="quote-icon text-primary"
                      ></iconify-icon>
                    </div>
                    <div className="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                      <p className="testimonial-content fs-2">{t.content}</p>
                      <p className="text-black">- {t.author}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
