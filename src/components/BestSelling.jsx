import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const products = [
  { image: "images/item5.jpg", label: "", price: "$18.00", tag: "" },
  { image: "images/item6.jpg", label: "", price: "$18.00", tag: "" },
  { image: "images/item7.jpg", label: "Sale", price: "$18.00", tag: "sale" },
  { image: "images/item8.jpg", label: "", price: "$18.00", tag: "" },
  {
    image: "images/item3.jpg",
    label: "-10%",
    price: "$18.00",
    tag: "discount",
  },
  { image: "images/item4.jpg", label: "", price: "$18.00", tag: "" },
];

const BestSelling = () => {
  return (
    <section id="bestselling" className="my-5 overflow-hidden">
      <div className="container py-5 mb-5">
        <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
          <h2 className="display-3 fw-normal">Best selling products</h2>
          <div>
            <a className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
              shop now
              <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          className="bestselling-swiper"
        >
          {products.map((p, index) => (
            <SwiperSlide key={index}>
              <div className="card position-relative pb-5">
                {p.label && (
                  <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                    {p.label}
                  </div>
                )}
                <a href="single-product.html">
                  <img
                    src={p.image}
                    className="img-fluid rounded-4"
                    alt="product"
                  />
                </a>
                <div className="card-body p-0">
                  <a href="single-product.html">
                    <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                  </a>
                  <div className="card-text">
                    <span className="rating secondary-font">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <iconify-icon
                            key={i}
                            icon="clarity:star-solid"
                            class="text-primary"
                          ></iconify-icon>
                        ))}
                      5.0
                    </span>
                    <h3 className="secondary-font text-primary">{p.price}</h3>
                    <div className="d-flex flex-wrap mt-3">
                      <a className="btn-cart me-3 px-4 py-3 mt-2">
                        <h5 className="text-uppercase m-0">Add to Cart</h5>
                      </a>
                      <a className="btn-wishlist px-4 pt-3">
                        <iconify-icon
                          icon="fluent:heart-28-filled"
                          class="fs-5"
                        ></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSelling;
