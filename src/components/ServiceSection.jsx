import React from "react";
import "@iconify-icon/react";

const services = [
  {
    id: 1,
    icon: "la:shopping-cart",
    title: "Free Delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    id: 2,
    icon: "la:user-check",
    title: "100% secure payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    id: 3,
    icon: "la:tag",
    title: "Daily Offer",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    id: 4,
    icon: "la:award",
    title: "Quality guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
];

const ServiceSection = () => {
  return (
    <section id="service">
      <div className="container py-5 my-5">
        <div className="row g-md-5 pt-4">
          {services.map((service) => (
            <div className="col-md-3 my-3" key={service.id}>
              <div className="card text-center p-3 h-100">
                <div>
                  <iconify-icon
                    class="service-icon text-primary fs-1"
                    icon={service.icon}
                  ></iconify-icon>
                </div>
                <h3 className="card-title py-2 m-0">{service.title}</h3>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
