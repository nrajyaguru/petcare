import React from "react";

const products = [
  {
    img: "images/item1.jpg",
    title: "Grey hoodie",
    price: "$18.00",
    badge: "New",
  },
  { img: "images/item2.jpg", title: "Grey hoodie", price: "$18.00" },
  {
    img: "images/item3.jpg",
    title: "Grey hoodie",
    price: "$18.00",
    badge: "-10%",
  },
  { img: "images/item4.jpg", title: "Grey hoodie", price: "$18.00" },
  { img: "images/item7.jpg", title: "Grey hoodie", price: "$18.00" },
  { img: "images/item8.jpg", title: "Grey hoodie", price: "$18.00" },
];

const PetClothingSection = () => {
  return (
    <section id="clothing" className="my-5">
      <div className="container pb-5">
        <div className="section-header d-md-flex justify-content-between align-items-center mb-4">
          <h2 className="display-5 fw-normal">Pet Clothing</h2>
          <a className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
            Shop Now
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
              <use xlinkHref="#arrow-right"></use>
            </svg>
          </a>
        </div>

        {/* Scrollable row using Bootstrap utilities */}
        <div className="d-flex overflow-auto gap-4 pb-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="card flex-shrink-0"
              style={{ width: "16rem" }}
            >
              <div className="position-relative">
                {product.badge && (
                  <div className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-light border rounded">
                    {product.badge}
                  </div>
                )}
                <a href="single-product.html">
                  <img
                    src={product.img}
                    className="img-fluid rounded-top"
                    alt="product"
                  />
                </a>
              </div>

              <div className="card-body p-3">
                <a href="single-product.html">
                  <h5 className="card-title mb-2">{product.title}</h5>
                </a>
                <div className="mb-2 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <iconify-icon
                      key={i}
                      icon="clarity:star-solid"
                      class="text-primary"
                    ></iconify-icon>
                  ))}
                  <span className="ms-2 text-dark">5.0</span>
                </div>
                <h5 className="text-primary">{product.price}</h5>
                <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
                  <a className="btn btn-dark flex-grow-1">Cart</a>
                  <a className="btn btn-outline-secondary">
                    <iconify-icon
                      icon="fluent:heart-28-filled"
                      class="fs-5"
                    ></iconify-icon>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetClothingSection;
