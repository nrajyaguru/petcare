import React, { useState } from "react";

const products = [
  {
    img: "images/item9.jpg",
    title: "Grey hoodie",
    price: "$18.00",
    type: "cat",
  },
  {
    img: "images/item10.jpg",
    title: "Grey hoodie",
    price: "$18.00",
    type: "dog",
    badge: "New",
  },
  {
    img: "images/item11.jpg",
    title: "Grey hoodie",
    price: "$18.00",
    type: "dog",
  },
  {
    img: "images/item12.jpg",
    title: "Grey hoodie",
    price: "$18.00",
    type: "cat",
    badge: "Sold",
  },
  {
    img: "images/item13.jpg",
    title: "Grey hoodie",
    price: "$18.00",
    type: "bird",
  },
  {
    img: "images/item14.jpg",
    title: "Grey hoodie",
    price: "$18.00",
    type: "bird",
  },
  {
    img: "images/item15.jpg",
    title: "Grey hoodie",
    price: "$18.00",
    type: "dog",
    badge: "Sale",
  },
  {
    img: "images/item16.jpg",
    title: "Grey hoodie",
    price: "$18.00",
    type: "cat",
  },
];

const PetFoodiesSection = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const filteredProducts =
    activeFilter === "*"
      ? products
      : products.filter((product) => product.type === activeFilter);

  const filterButtons = ["*", "cat", "dog", "bird"];

  return (
    <section id="foodies" className="my-5">
      <div className="container my-5 py-5">
        <div className="section-header d-md-flex justify-content-between align-items-center">
          <h2 className="display-3 fw-normal">Pet Foodies</h2>

          <div className="mb-4 mb-md-0">
            {filterButtons.map((filter) => (
              <button
                key={filter}
                className={`filter-button me-4 ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "*" ? "ALL" : filter.toUpperCase()}
              </button>
            ))}
          </div>

          <div>
            <a className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
              shop now
              <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>

        <div className="row isotope-container">
          {filteredProducts.map((product, index) => (
            <div key={index} className="item col-md-4 col-lg-3 my-4">
              {product.badge && (
                <div className="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
                  {product.badge}
                </div>
              )}
              <div className="card position-relative">
                <a href="single-product.html">
                  <img
                    src={product.img}
                    className="img-fluid rounded-4"
                    alt="product"
                  />
                </a>
                <div className="card-body p-0">
                  <a href="single-product.html">
                    <h3 className="card-title pt-4 m-0">{product.title}</h3>
                  </a>
                  <div className="card-text">
                    <span className="rating secondary-font">
                      {[...Array(5)].map((_, i) => (
                        <iconify-icon
                          key={i}
                          icon="clarity:star-solid"
                          class="text-primary"
                        ></iconify-icon>
                      ))}
                      5.0
                    </span>

                    <h3 className="secondary-font text-primary">
                      {product.price}
                    </h3>

                    <div className="d-flex flex-wrap mt-3">
                      <a className="btn-cart me-3 px-4 pt-3 pb-3">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetFoodiesSection;
