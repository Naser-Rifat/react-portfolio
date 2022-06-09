import React from 'react';
import Particles from "react-tsparticles";
import Menubar from '../Menubar/Menubar';
import './banner.css';
import Typewriter from 'typewriter-effect';




const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    }
    return (
        <div style={{}} className=" m-0 p-0 bg-gray-900 ">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{

                    fpsLimit: 50,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 500,
                                duration: 2,
                                opacity: 0.8,
                                size: 10,
                            },
                            push: {
                                quantity: 1,
                            },
                            repulse: {
                                distance: 300,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffff",
                        },
                        links: {
                            color: "#ffff",
                            distance: 100,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 300,
                            },
                            value: 20,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />

            <Menubar></Menubar>



            <div className="row    ">

                <div className="col-sm-4 col-lg-12   ">
                    <div className="m-40 p-0 mx-auto">

                        <div
                            data-aos="fade-up"
                            data-aos-delay="800"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            className="iconify text-white header-icon w-100" data-icon="la:laptop-code" data-inline="false"></div>

                        <br />


                        <p className='text-white text-3xl '>Abu Naser Rifat</p>

                        <div
                        >

                            <div data-aos="fade-up"


                                data-aos-easing="ease-in-out"
                                className="text-white text-5xl mb-20">

                                <Typewriter

                                    onInit={(typewriter) => {
                                        typewriter.

                                            typeString('Web Developer')
                                            .pauseFor(1000)
                                            .deleteChars(13)
                                            .typeString('React Developer')
                                            .pauseFor(1000)
                                            .deleteChars(15)
                                            .typeString('MERN Stack Developer')
                                            .pauseFor(1000)
                                            .deleteChars(20)
                                            .typeString('Web Developer')
                                            .start()


                                    }}
                                />

                            </div>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-delay="1500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-in"
                            className='mt-3'
                        >
                            <a className='my-auto text-white' href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Ddownload%26id%3D1x2bN7dYqyU4a6sqxb0naPAGYPYFKW04n%26fbclid%3DIwAR1Jq7XCQXn0B7YO4cffZNNQeRX5lHXthZ_gETen4DYtBjhapbZSq6K4mzo&h=AT3OTsCY5ABgoGPmZEuPRS60W19Z_781_T_KyflBHDjo88VlPnKNYFGu9tfYGaAHkO2MKl3YaP7VX0m4sNVFlP_ukGJRVd0pPTkgTmeI1wIK2Pmh4qo4akMl6tLYV_L2WwaYMA"> <button
                                className="  colorch  p-3 px-5 mx-auto  border-3 border-white rounded-lg text-2xl fw-bold">  <i className="fas fa-download"> </i> Download Resume </button></a>


                            <div
                                data-aos="fade-up"
                                data-aos-delay="2000"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-in"


                                className='my-auto'>
                                <a href="https://github.com/Naser-Rifat" target="_blank"><div className=" mx-2 text-white social-links fab fa-github"></div></a>
                                <a href="https://www.linkedin.com/in/rifat971/" target="_blank"><div className=" mx-2 text-white social-links fab fa-linkedin-in"></div></a>
                                <a href="https://www.facebook.com/rifat971/" target="_blank"><div className=" mx-2  text-white social-links fab fa-facebook"></div></a>

                            </div>
                        </div>

                    </div>




                </div>


            </div>


        </div >


    );
};

export default Banner;