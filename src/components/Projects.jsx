import React from "react";
import project from "./data/project.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1><center>PROJECTS</center></h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                    backgroundColor: " rgb(40, 47, 97)"
                  }}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                
                        border: "2px solid yellow",
                        height: "200px",
                        borderRadius: "10px",
                        justifyContent: "center",
                        
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h1 className="card-title">{data.title}</h1>
                    <h3 className="card-text">{data.description}</h3>
                    <a href={data.demo} className="btn btn-primary mx-3">
                      
                    </a>
                    <a href={data.source} className="btn btn-warning">
                      
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects