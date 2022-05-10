import React from "react";
import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Main/Hero/Hero";
import Info from "./Components/Main/Info/Info";
import Product from "./Components/Product/Product";

function App() {
  return (
    <>
     <Header />
     <Hero />
     <Info />
     <Product />
     <Footer /> 
    </>
  );
}

export default App;
