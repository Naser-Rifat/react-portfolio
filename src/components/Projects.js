import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('./projects_data.json')
      .then(res => res.json())
      .then(data => {
        console.log(data[1]);
        setProjects(data[1])
      })
  }, [])

  const handledetails = () => {


  }

  return (
    <div className=" lg:mx-28  bg-white  ">
      <h3 className=" p-16 text-black  text-5xl">PROJECTS</h3>
      <div className="  mx-5 py-40 pt-20 row">
        {
          projects.map(project =>
            <div key={project.id}
              className="col-sm-12 col-md-6 col-lg-4 "

              style={{ cursor: "pointer" }}
            >
              <span className="portfolio-item inline">
                <Link to={`/details/${project.id}`}>
                  <div data-aos="fade-up" className="foto " onClick={{ handledetails }}>
                    <div className="pb-5">

                      <img
                        src={project.img0}
                        alt="projectImages"
                        height="230px"
                        style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                      />
                      <span className="project-date"> {project.name}</span>
                      <br />
                      <a href={project.livesite} target="_blank"><button className=" text-black  mx-2 text-xl  shadow-sm border-1 p-2 px-3 rounded">Live-Site <i className='fas fa-link '></i></button></a>
                      <a href={project.github_client} target="_blank"> <button className=" text-xl text-black mx-2 shadow-sm border-1 p-2 px-3 rounded ">Client-Side <i className="fab fa-github"></i></button></a>
                      {
                        project.github_server &&
                        <a href={project.github_server} target="_blank"><button className=" text-xl text-black mx-2 shadow-sm border-1 p-2 px-3 rounded ">Server-Side <i className="fab fa-github"></i></button></a>
                      }

                    </div>
                  </div>

                </Link>
              </span>
            </div>

          )
        }
      </div>

    </div>
  );







}

export default Projects;
