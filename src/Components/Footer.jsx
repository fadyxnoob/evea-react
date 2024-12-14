import React from 'react' 
import Logo from '../assets/images/logo.png'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";


const Footer = () => {
    return (
        <div className='container-fluid footer-container' id='footer'>
            <div className="row p-md-5 mb-3 mb-md-0">
                <div className="col-12 col-lg-3 p-0 m-0 mt-5 mt-lg-0">
                    <div>
                        <img src={Logo} alt={Logo} className='logo object-fit-contain img-fluid w-50' />
                    </div>
                    <p className='footer-text-noHover mt-3 fs-5'>
                        This may include the company's address, phone number, email address, and links to social media profiles.
                    </p>
                    <div className='d-flex align-items-center gap-2'>
                        <MdEmail className='footer-text-noHover fs-4'/>
                        <a href="#" className='footer-text text-decoration-none fs-5'>example@email.com</a>
                    </div>
                    <div className='d-flex align-items-center gap-2 mt-3'>
                        <BsFillTelephoneFill  className='footer-text-noHover fs-4'/>
                        <a href="#" className='footer-text text-decoration-none fs-5'>+9210234684445</a>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 mt-5 mt-lg-0 col-lg-3 text-start p-0 m-0">
                    <h5 className='text-light fs-5 fw-semibold w-75 ms-lg-auto text-start text-uppercase fs-5'>Company</h5>
                    <ul className='list-group mt-3 ps-2'>
                        <li className='p-0 m-0 list-group-item border ms-lg-auto text-start w-75 bg-transparent mt-3 border-0'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>About</a></li>
                        <li className='p-0 m-0 list-group-item border-0 ms-lg-auto w-75 text-start bg-transparent mt-3'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>Services</a></li>
                        <li className='p-0 m-0 list-group-item border-0 bg-transparent w-75 ms-lg-auto text-start mt-3'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>Portfolio</a></li>
                        <li className='p-0 m-0 list-group-item border-0 bg-transparent w-75 ms-lg-auto text-start mt-3'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>Blog</a></li>
                        <li className='p-0 m-0 list-group-item border-0 bg-transparent w-75 ms-lg-auto text-start mt-3'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>Contact</a></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-lg-3 mt-5 mt-lg-0 col-lg-3 text-start p-0 m-0 ">
                    <h5 className='text-light fs-5 fw-semibold w-75 ms-lg-auto text-start text-uppercase fs-5'>Product</h5>
                    <ul className='list-group mt-3 ps-2'>
                        <li className='p-0 m-0 list-group-item border ms-lg-auto text-start w-75 bg-transparent mt-3 border-0'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>Services</a></li>
                        <li className='p-0 m-0 list-group-item border-0 ms-lg-auto w-75 text-start bg-transparent mt-3'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>About Us</a></li>
                        <li className='p-0 m-0 list-group-item border-0 bg-transparent w-75 ms-lg-auto text-start mt-3'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>News & Stories</a></li>
                        <li className='p-0 m-0 list-group-item border-0 bg-transparent w-75 ms-lg-auto text-start mt-3'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>Roadmap</a></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-lg-3 mt-5 mt-lg-0 col-lg-3 text-start p-0 m-0 ">
                    <h5 className='text-light fs-5 fw-semibold w-75 ms-lg-auto text-start text-uppercase fs-5'>Important Links</h5>
                    <ul className='list-group mt-3 ps-2'>
                        <li className='p-0 m-0 list-group-item border ms-lg-auto text-start w-75 bg-transparent mt-3 border-0'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>Our Journeys</a></li>
                        <li className='p-0 m-0 list-group-item border-0 ms-lg-auto w-75 text-start bg-transparent mt-3'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>Roadmap</a></li>
                        <li className='p-0 m-0 list-group-item border-0 bg-transparent w-75 ms-lg-auto text-start mt-3'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>Pricing Plans</a></li>
                        <li className='p-0 m-0 list-group-item border-0 bg-transparent w-75 ms-lg-auto text-start mt-3'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>Privacy Policy</a></li>
                        <li className='p-0 m-0 list-group-item border-0 bg-transparent w-75 ms-lg-auto text-start mt-3'><a href="#" className='text-start fs-5 text-decoration-none footer-text'>Terms & Conditions</a></li>
                    </ul>
                </div>
               
            </div>
        </div>
    )
}

export default Footer;
