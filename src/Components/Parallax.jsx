import React from 'react';
import { Parallax } from 'react-parallax';
import ParallaxImage from '../assets/images/parallax.png'
import Button from './Button'
 
const ParallaxComponent = () => {
    return (
        <div className="container-fluid p-0 parallax-container" id='parallax'>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={ParallaxImage}
                bgImageAlt="the dog"
                strength={-500}
                bgImageStyle={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            >

                <div className='parallax-background'>
                    <div className="row position-center">
                        <div className="col-lg-7 mx-auto position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-end align-items-center">
                            <h2 className='text-center text-light mb-3 fs-2 w-100'>A Detailed Examination Of A Specific Case</h2>
                            <p className='text-center text-light px-md-5 mx-md-5 fs-5 w-100'>
                                Together, we manage and empower markets by utilizing both established and emerging channels for potential growth.
                            </p>
                            <div className='mt-4 text-center d-flex gap-3 justify-content-center items-center w-100'>
                                <Button title={'Contact Me'} classes='rounded py-2 px-4 text-light fs-5 parallax-button' />
                                <Button title={'See Pricing'} classes=' rounded py-2 px-4 text-light bg-transparent border fs-5 parallax-button' />
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default ParallaxComponent;
