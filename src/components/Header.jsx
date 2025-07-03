const Header = () => (
  <header>
    <div className="container py-2">
      <div className="row py-4 pb-0 pb-sm-4 align-items-center">
        <div className="col-sm-4 col-lg-3 text-center text-sm-start">
          <div className="main-logo">
            <a>
              <img
                src="images/logo.png"
                alt="logo"
                className="img-fluid"
                style={{ height: "80px", width: "125px", objectFit: "cover" }}
              />
            </a>
          </div>
        </div>

        <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
          <div className="search-bar border rounded-2 px-3 border-dark-subtle">
            <form
              id="search-form"
              className="text-center d-flex align-items-center"
            >
              <input
                type="text"
                className="form-control border-0 bg-transparent"
                placeholder="Search for more than 10,000 products"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                />
              </svg>
            </form>
          </div>
        </div>

        <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
          <div className="support-box text-end d-none d-xl-block">
            <span className="fs-6 secondary-font text-muted">Phone</span>
            <h5 className="mb-0">+980-34984089</h5>
          </div>
          <div className="support-box text-end d-none d-xl-block">
            <span className="fs-6 secondary-font text-muted">Email</span>
            <h5 className="mb-0">pawfectpals@gmail.com</h5>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <hr className="m-0" />
    </div>

    <div className="container">
      <nav className="main-menu d-flex navbar navbar-expand-lg">
        <div className="d-flex d-lg-none align-items-end mt-3">
          <ul className="d-flex justify-content-end list-unstyled m-0">
            <li>
              <a href="account.html" className="mx-3">
                <iconify-icon icon="healthicons:person" class="fs-4" />
              </a>
            </li>
            <li>
              <a href="wishlist.html" className="mx-3">
                <iconify-icon icon="mdi:heart" class="fs-4" />
              </a>
            </li>
            <li>
              <a
                className="mx-3"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasCart"
                aria-controls="offcanvasCart"
              >
                <iconify-icon icon="mdi:cart" class="fs-4 position-relative" />
                <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                  03
                </span>
              </a>
            </li>
            <li>
              <a
                className="mx-3"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasSearch"
                aria-controls="offcanvasSearch"
              >
                <iconify-icon icon="tabler:search" class="fs-4" />
              </a>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header justify-content-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body justify-content-between">
            <select className="filter-categories border-0 mb-0 me-5">
              <option>Shop by Category</option>
              <option>Clothes</option>
              <option>Food</option>
              <option>Food</option>
              <option>Toy</option>
            </select>

            <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 mb-0">
              <li className="nav-item">
                <a className="nav-link active">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  id="pages"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="pages">
                  <li>
                    <a className="dropdown-item">About Us</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Shop</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Single Product</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Cart</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Wishlist</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Checkout</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Blog</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Single Post</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Contact</a>
                  </li>
                  <li>
                    <a className="dropdown-item">FAQs</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Account</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Thankyou</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Error 404</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Styles</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Others</a>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-end">
              <ul className="d-flex justify-content-end list-unstyled m-0">
                <li>
                  <a className="mx-3">
                    <iconify-icon icon="healthicons:person" class="fs-4" />
                  </a>
                </li>
                <li>
                  <a className="mx-3">
                    <iconify-icon icon="mdi:heart" class="fs-4" />
                  </a>
                </li>
                <li>
                  <a
                    className="mx-3"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasCart"
                    aria-controls="offcanvasCart"
                  >
                    <iconify-icon
                      icon="mdi:cart"
                      class="fs-4 position-relative"
                    />
                    <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                      03
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
