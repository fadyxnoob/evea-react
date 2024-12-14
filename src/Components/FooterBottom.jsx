import React from 'react' 
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

const FooterBottom = () => {
    return (
        <div className="container-fluid footer-bottom">
            <div className="row p-0 px-md-5 w-100 h-100 p-2 pt-sm-4">
                <div className="col-sm-6 p-0 m-0 ">
                    <p className='text-light fs-6 fs-md-5 text-center text-md-start'>2024@ Evea - <a href="#" className='text-decoration-none text-light'>Byt3Blitz.com</a> </p>
                </div>
                <div className="col-sm-6 text-center text-md-end p-0">
                    <ul className='d-flex justify-content-between justify-content-md-end  p-0 align-items-center gap-2 list-unstyled'>
                        <li className='footer-icon-holder p-1'>
                            <a href="#">
                                <FaFacebook className='text-light fs-4' />
                            </a>
                        </li>
                        <li className='footer-icon-holder p-1'>
                            <a href="#"> <CgMail className='text-light fs-3' /></a>
                        </li>
                        <li className='footer-icon-holder p-1'>
                            <a href="#"> <FaXTwitter className='text-light fs-4 ' /></a>
                        </li>
                        <li className='footer-icon-holder p-1'>
                            <a href="#"> <FaGithub className='text-light fs-4' /></a>
                        </li>
                        <li className='footer-icon-holder p-1'>
                            <a href="#"> <FaInstagram className='text-light fs-4' /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom
