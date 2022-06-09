import React, { useEffect, useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from './Footer/Footer';
import Menubar from './Menubar/Menubar';

const Details = () => {
    const { id } = useParams()

    const [project, setProject] = useState({});
    const [description, setDescription] = useState({});
    useEffect(() => {
        fetch('/projects_data.json')
            .then(res => res.json())
            .then(data => {
                const remain = data[1].filter(project1 => project1.id == id);
                console.log(remain[0]);
                if (remain) {
                    setProject(remain[0])

                }
            });
        fetch('/projects_data.json')
            .then(res => res.json())
            .then(data => {
                const remain = data[0].filter(project1 => project1.id == id);
                console.log(remain[0]);
                if (remain) {
                    setDescription(remain[0])

                }
            })



    }, [])

    const handledetails = () => {


    }
    return (
        <div className="bg-black mb-0 px-2">
            <Menubar></Menubar>
            <div className="row col-lg-6 col-md-4 my-5 mx-auto ">

                <h2 className="text-center text-white text-bold text-7xl py-3 mt-32">{project.name}</h2>
                <div zoom-in-down data-aos="zoom-in-down">
                    <Carousel className="m-24  mx-auto">
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={project.img1}
                                alt="First slide"
                            />
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={project.img2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={project.img3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>


                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>


                {/* <h4 className="font-semibold text-2xl"></h4> */}
                <div className="text-left text-white mt-5 mb-16">
                    <h3 className="font-bold text-3xl"> {project.title}</h3>
                    <li className="py-2 font-normal text-2xl">{description.description1}</li>
                    <li className="py-2 font-normal text-2xl">{description.description2}</li>
                    <li className="py-2 font-normal text-2xl">{description.description3}</li>
                </div>

                <div className="text-left mb-20">

                    <a href={project.livesite} target="_blank"><button className=" text-white  mx-2 text-xl  shadow-sm border-1 p-2 px-3 rounded">Live-Site <i className='fas fa-link '></i></button></a>
                    <a href={project.github_client} target="_blank"><button className=" text-xl text-white mx-2 shadow-sm border-1 p-2 px-3 rounded ">Client-Side <i className="fab fa-github"></i></button></a>
                    {
                        project.github_server &&
                        <a href={project.github_server} target="_blank"><button className=" text-xl text-white mx-2 shadow-sm border-1 p-2 px-3 rounded ">Server-Side <i className="fab fa-github"></i></button></a>
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;