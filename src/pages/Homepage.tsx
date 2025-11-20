import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
        <Helmet>
        <title>LunaLearn - Fun Learning Games for Kids</title>
        <meta
            name="description"
            content="Interactive educational games designed by education experts and powered by AI to make learning exciting for grades 1-7. Featuring offline support, language inclusivity, and WhatsApp integration."
        />
        </Helmet>
        <Header/>
        <HeroSection />
        <Footer/>
    </>
  );
};

export default HomePage;