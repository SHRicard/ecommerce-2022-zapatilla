import React from "react";
import Menu from "../Menu/Menu.js";
import Envio from "../Envio/Envio.js";
import Contenido from "../Contenido/Contenido.js";
import Footer from "../Footer/Footer.js";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Envio />
      <Menu />
      <Contenido />
      <Footer />
    </>
  );
};

export default Home;
