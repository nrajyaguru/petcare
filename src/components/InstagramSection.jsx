import React from "react";
import "@iconify-icon/react";

const instaImages = [
  "images/insta1.jpg",
  "images/insta2.jpg",
  "images/insta3.jpg",
  "images/insta4.jpg",
  "images/insta5.jpg",
  "images/insta6.jpg",
];

const InstagramSection = () => {
  return (
    <section id="insta" className="my-5">
      <div className="row g-0 py-5">
        {instaImages.map((img, index) => (
          <div
            className="col instagram-item text-center position-relative"
            key={index}
          >
            <div className="icon-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
              <iconify-icon
                class="text-white fs-2"
                icon="la:instagram"
              ></iconify-icon>
            </div>
            <a>
              <img
                src={img}
                alt={`insta-img-${index + 1}`}
                className="img-fluid rounded-3 w-100"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
