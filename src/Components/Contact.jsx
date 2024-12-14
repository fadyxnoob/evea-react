import React from 'react' 
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";

const Contact = () => {

    return (
        <div className='container-fluid contact-container mt-5 py-5' id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="small-text">Contact Us</p>
                        <h2 className='text-black fs-1 pe-5'>We're open to talk to good people.</h2>
                        <div className='mt-5'>
                            <div className='d-flex align-items-center gap-2'>
                                <div className='icon-holder'>
                                    <FaLocationDot className='fs-4 icon' />
                                </div>
                                <div className=''>
                                    <p className='m-0 p-0 text-muted fs-6 fw-semibold'>123 King Street, London W60 10250</p>
                                    <span className='fs-6 fw-semibold icon-text'>See more</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='d-flex align-items-center gap-2'>
                                <div className='icon-holder'>
                                    <MdEmail className='fs-4 icon' />
                                </div>
                                <div className=''>
                                    <p className='m-0 p-0 text-muted fs-6 fw-semibold'>byt3blitz.contact@gmail.com</p>
                                    <span className='fs-6 fw-semibold icon-text'>Send Mail</span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='d-flex align-items-center gap-2'>
                                <div className='icon-holder'>
                                    <BsFillPhoneFill className='fs-4 icon' />
                                </div>
                                <div className=''>
                                    <p className='m-0 p-0 text-muted fs-6 fw-semibold'>+92987625481</p>
                                    <span className='fs-6 fw-semibold icon-text'>Call Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-white p-5 shadow mt-5 mt-lg-0">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">First Name</label>
                                        <input type="text" className="form-control shadow-none border" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Last Name</label>
                                        <input type="text" className="form-control shadow-none border" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email Address</label>
                                        <input type="text" className="form-control shadow-none border" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control shadow-none border" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>

                            <textarea name="" id="" cols="30" rows="10" className='form-control border w-100 outline-0 shadow-none mb-3'></textarea>

                            <button type="submit" className="border-0 py-2 px-5 fs-5 rounded form-button text-light d-flex align-items-center gap-2 fs-5">Send Message <span><IoSendSharp className='fs-4' /></span> </button>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
