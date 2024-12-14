import React from 'react'
import Image from '../assets/images/vector/vector-1.png'
import { IoCheckmark } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import Button from './Button';

const PriceCard = () => {
    return (
        <div className='col-md-6 col-lg-4 price-card-container mb-5 mb-lg-0'>
            <div class="card w-100 p-4 border-0">
                <div class="card-body">
                    <div className='price-image-holder mx-auto mb-3'>
                        <img src={Image} alt={Image} className='img-fluid object-fit-cover' />
                    </div>
                    <h5 class="card-title text-center fs-3 text-black mt-2">Standard</h5>
                    <h5 class="card-title text-center fs-1 text-black mt-2">$ 49</h5>
                    <h6 class="card-subtitle mb-2 text-muted text-center mt-2 fs-5">per month</h6>
                    <div className='px-md-5'>
                        <div className="my-3">
                            <div className='d-flex align-items-center justify-content-start gap-2'>
                                <p>
                                    <IoCheckmark className='price-card-icon fs-3' />
                                </p>
                                <p className='fs-6 fw-semibold'>1 Gb Storage</p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className='d-flex align-items-center justify-content-start gap-2'>
                                <p>
                                    <IoCheckmark className='price-card-icon fs-3' />
                                </p>
                                <p className='fs-6 fw-semibold'>3 Domain Names</p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className='d-flex align-items-center justify-content-start gap-2'>
                                <p>
                                    <IoCheckmark className='price-card-icon fs-3' />
                                </p>
                                <p className='fs-6 fw-semibold'>5 FTP Users</p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className='d-flex align-items-center justify-content-start gap-2'>
                                <p>
                                    <HiMiniXMark className='mark-color fs-3' />
                                </p>
                                <p className='fs-6 fw-semibold text-muted'>Free Support</p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className='d-flex align-items-center justify-content-start gap-2'>
                                <p>
                                    <HiMiniXMark className='mark-color fs-3 ' />
                                </p>
                                <p className='fs-6 fw-semibold text-muted'>Free SSI Certificate</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button title={'Buy Standard'} classes={'w-100 border-0 py-2 rounded price-button text-light fs-5 fw-medium'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceCard
