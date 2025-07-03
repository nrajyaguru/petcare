import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import CategoriesSection from "./components/CategoriesSection";
import PetClothingSection from "./components/PetClothingSection";
import PetFoodiesSection from "./components/PetFoodiesSection";
import ClearanceBanner from "./components/ClearanceBanner";
import TestimonialSlider from "./components/TestimonialSlider";
import BestSelling from "./components/BestSelling";
import RegisterForm from "./components/RegisterForm";
import LatestBlog from "./components/LatestBlog";
import ServiceSection from "./components/ServiceSection";
import InstagramSection from "./components/InstagramSection";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CategoriesSection />
      <PetClothingSection />
      <PetFoodiesSection />
      <ClearanceBanner />
      <TestimonialSlider />
      <BestSelling />
      <RegisterForm />
      <LatestBlog />
      <ServiceSection />
      <InstagramSection />
      <Footer />
    </>
  );
}

export default App;
