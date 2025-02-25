import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Hero from "./components/Hero";
export default function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
