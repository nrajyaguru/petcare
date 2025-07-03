import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password1: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password1 !== formData.password2) {
      alert("Passwords do not match!");
      return;
    }

    // TODO: handle registration logic (API call, validation, etc.)
    console.log("Form Submitted:", formData);
  };

  return (
    <section
      id="register"
      style={{
        background: "url('images/background-img.png') no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row my-5 py-5">
          <div className="offset-md-3 col-md-6 my-5">
            <h2 className="display-3 fw-normal text-center">
              Get 20% Off on{" "}
              <span className="text-primary">first Purchase</span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password1"
                  id="password1"
                  placeholder="Create Password"
                  value={formData.password1}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password2"
                  id="password2"
                  placeholder="Repeat Password"
                  value={formData.password2}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-lg rounded-1">
                  Register it now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
