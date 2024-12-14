import React from 'react'
import Button from './Button'
import HeroImage from '../assets/images/dashboard.png' 

const Hero = () => { 
    return (
        <section
            className='hero-section'
        >
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-6 mx-auto">
                            <h1 className='hero-heading text-center text-light'>
                                All your business expenses in one place.
                            </h1>
                            <p className='text-center fs-5 text-light text-capitalize'>
                                You one stop finance empower platform Manage all your business expenses with our supafast app.
                            </p>
                            <div className='my-5 text-center d-flex flex-column gap-3 gap-md-5 flex-sm-row justify-content-center align-items-center'>
                                <Button title={'Contact Me'} classes='rounded py-2 px-4 text-light bg-transparent fs-5 hero-button'/>
                                <Button title={'See Pricing'} classes=' rounded py-2 px-4 text-light bg-transparent fs-5 hero-button'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 w-100">
                    <div className="row">
                        <div className="col-lg-10 mx-auto p-0 pt-3 px-3 rounded hero-image-holder">
                            <img src={HeroImage} alt={HeroImage} className='img-fluid w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Hero)
