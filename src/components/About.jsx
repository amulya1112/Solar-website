import React from "react";
import about from "./data/about.json";

const About = () => {
  return (
    <>
    
      <div className="About ex" id="about">
        <h1><center><span>ABOUT</span></center></h1>
        {about.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h3 style={{ color: "yellow" }}>{data.about[0]}</h3>
                  <h3 style={{ color: "yellow" }}>{data.about[1]}</h3>
                </div>
              </div>
              
            </>
          );
        })}
      </div>
    </>
  );
};

export default About;

