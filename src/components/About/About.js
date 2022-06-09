import { Icon } from '@iconify/react';
import React from 'react';
import reactIcon from "@iconify/icons-logos/react";
import mongodb from "@iconify/icons-logos/mongodb";
import express from "@iconify/icons-logos/express";
import profile from "../../image/rifat.jpg"

const About = () => {


    return (
        <section className="bg-white" id="about">
            <div className="col-md-12 my-20">
                <h5 style={{ color: "black", }}>
                    <span className="text-5xl text-black ">ABOUT ME</span>
                </h5>
                <div className="row center mx-auto mb-5">
                    <div className="col-md-4 mb-5 center ">
                        <div data-aos="fade-up" className="polaroid">
                            <span style={{ cursor: "auto" }}>

                                <img
                                    height="250px"

                                    src={profile}
                                    alt="Avatar placeholder"
                                />
                                <div className="d-flex justify-content-center">
                                    <Icon
                                        icon={reactIcon}
                                        style={{ fontSize: "250%", margin: "9% 5% 0 5%" }}
                                    />
                                    <Icon
                                        icon={express}
                                        style={{ fontSize: "250%", margin: "9% 5% 0 5%" }}
                                    />

                                    <Icon
                                        icon={mongodb}
                                        style={{ fontSize: "250%", margin: "9% 5% 0 5%" }}
                                    />
                                </div>




                            </span>
                        </div>
                    </div>

                    <div className="col-md-8 center">
                        <div className="col-md-10">
                            <div data-aos="fade-up" className="card">
                                <div className="card-header d-flex">
                                    <span
                                        className="iconify"
                                        data-icon="emojione:red-circle"
                                        data-inline="false"
                                    ></span>{" "}
                                    &nbsp;{" "}
                                    <span
                                        className="iconify"
                                        data-icon="twemoji:yellow-circle"
                                        data-inline="false"
                                    ></span>{" "}
                                    &nbsp;{" "}
                                    <span
                                        className="iconify"
                                        data-icon="twemoji:green-circle"
                                        data-inline="false"
                                    ></span>
                                </div>
                                <div
                                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                                    style={{
                                        height: "auto",
                                        fontSize: "132%",
                                        lineHeight: "200%",
                                    }}
                                >
                                    Hi,
                                    <span className="wave"> :) </span>
                                    <br />

                                    I'm Rifat. have completed my bachelor's degree in computer science and engineering with a passion for developing scalable web applications and working across MERN stack development. I have built some web applications from the ground up using Html, CSS, tailwind-CSS, material UI, bootstrap, JavaScript, JSON, ES6, firebase, Nodejs, Reactjs, Express, & MongoDB
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default About;