import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    const date = new Date();

    return (



        <footer className="m-0 p-0 bg-black">
            <div className="col-lg-12">
                <div>
                    <a href="https://github.com/Naser-Rifat" target="_blank"><div className=" mx-2 text-white social-links fab fa-github"></div></a>
                    <a href="https://www.linkedin.com/in/rifat971/" target="_blank"><div className=" mx-2 text-white social-links fab fa-linkedin-in"></div></a>
                    <a href="https://www.facebook.com/rifat971/" target="_blank"><div className=" mx-2  text-white social-links fab fa-facebook"></div></a>


                </div>

                <div className="copyright py-4 text-center">
                    <div className="container">
                        <small>
                            Copyright &copy;{`${date.getFullYear()}`}.All Right Reserved

                        </small>
                    </div>
                </div>
            </div>
        </footer>


    );
};

export default Footer;