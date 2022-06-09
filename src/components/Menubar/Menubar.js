import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menubar.css';
import { Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


const Menubar = () => {
    return (
        <>
            <Navbar className="px-3 p-5 text-white" collapseOnSelect expand="lg" sticky="top" >
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} className="disabled:opacity-50 text-white text-2xl   font-bold hover:bg-blue-200 mx-1 rounded" to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} className="disabled:opacity-50 text-white  text-2xl font-bold hover:bg-blue-200 mx-1 rounded" to="#about">About</Nav.Link>

                    <Nav.Link as={Link} className="disabled:opacity-50 text-white text-2xl font-bold hover:bg-blue-200 mx-1 rounded" to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} className="disabled:opacity-50 text-white text-2xl font-bold hover:bg-blue-200 mx-1 rounded" to="/blogs">Blogs</Nav.Link>
                    <a className='text-white' href="https://drive.google.com/file/d/1x2bN7dYqyU4a6sqxb0naPAGYPYFKW04n/view?usp=sharing"> <button
                        className="  colorch  p-3 px-5 mx-auto  border-3 border-white rounded-lg text-2xl fw-bold">Resume </button></a>


                </Navbar.Collapse>


            </Navbar>

        </>
    );
};

export default Menubar;