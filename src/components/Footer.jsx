import React from "react";
import "@iconify-icon/react";

const Footer = () => {
  return (
    <footer id="footer" className="my-5">
      <div className="container py-5 my-5">
        <div className="row">
          {/* Logo and Social Links */}
          <div className="col-md-3">
            <div className="footer-menu">
              <img
                src="images/logo.png"
                alt="logo"
                style={{ height: "80px", width: "125px", objectFit: "cover" }}
              />
              <p className="blog-paragraph fs-6 mt-3">
                Subscribe to our newsletter to get updates about our grand
                offers.
              </p>
              <div className="social-links">
                <ul className="d-flex list-unstyled gap-2">
                  {[
                    "facebook-fill",
                    "twitter-fill",
                    "pinterest-fill",
                    "instagram-fill",
                    "youtube-fill",
                  ].map((icon) => (
                    <li className="social" key={icon}>
                      <a>
                        <iconify-icon
                          class="social-icon"
                          icon={`ri:${icon}`}
                        ></iconify-icon>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <div className="footer-menu">
              <h3>Quick Links</h3>
              <ul className="menu-list list-unstyled">
                {["Home", "About us", "Offer", "Services", "Contact Us"].map(
                  (text, index) => (
                    <li className="menu-item" key={index}>
                      <a className="nav-link">{text}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Help Center */}
          <div className="col-md-3">
            <div className="footer-menu">
              <h3>Help Center</h3>
              <ul className="menu-list list-unstyled">
                {[
                  "FAQs",
                  "Payment",
                  "Returns & Refunds",
                  "Checkout",
                  "Delivery Information",
                ].map((text, index) => (
                  <li className="menu-item" key={index}>
                    <a className="nav-link">{text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <div>
              <h3>Our Newsletter</h3>
              <p className="blog-paragraph fs-6">
                Subscribe to our newsletter to get updates about our grand
                offers.
              </p>
              <div className="search-bar border rounded-pill border-dark-subtle px-2">
                <form className="text-center d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control border-0 bg-transparent"
                    placeholder="Enter your email here"
                  />
                  <iconify-icon
                    class="send-icon"
                    icon="tabler:location-filled"
                  ></iconify-icon>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
