import React from "react";
import services from "./data/services.json";

const Services = () => {
  return (
    <>
      <div className="container services" id="services">
        
          <h1><center>SERVICES</center></h1>
          <div className="items"> 
            {services.map((data) => (
              <>
                <div
                  className="item"
                  key={data.id}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                >
                  <img
                   //src={`/assets/${data.imageSrc}`} 
                   src= {data.imageSrc}
                   alt="" />
                  <h3>{data.title}</h3>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Services;
