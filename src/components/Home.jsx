import React, { useEffect, useRef } from "react";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Solar Energy",
        "Energy generated from sun's radiation",
        "Clean, Renewable and reliable",
        "Used for water heating, cooking etc",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
          <a href="https://wa.me/1234567890" class="whatsapp_float" target="_blank">
           <img src="whatsapp.jpg" alt="WhatsApp"/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
