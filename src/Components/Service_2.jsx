import React from 'react'
import Image from '../assets/images/feature-iphone.png'
 
const Service_2 = () => {
  return (
    <div className='container-fluid service-2' id='about'>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 py-5">
            <p className="small-text">Services</p>
            <h1 className='text-black'>
              Get Started In Minutes: Download The App, Create Your Profile
            </h1>
            <p className='fs-5'>
              Digital payment has revolutionized the way we make financial transactions today With Rible you can enjoy the convenience of making secure & hassle-free payments online. Our platform provides you with a quick and eary.
            </p>
            <div className="row  text-start my-5">
              <div className="col-sm-6">
                <div className="d-flex flex-column justify-content-center align-items-start">
                  <div className="svg-holder border d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="smartphone" class="lucide lucide-smartphone h-8 w-8 text-black"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                  </div>
                  <h1 className='mt-2 fs-4 mt-3'>1. Download</h1>
                  <p className='fs-5'>Join the millions already benefitting from.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex flex-column justify-content-start align-items-start svg-holders-parent">
                  <div className="svg-holder border d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="file-text" class="lucide lucide-file-text h-8 w-8 text-black"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                  </div>
                  <h1 className='mt-2 fs-4 mt-3'>2. Set Profile</h1>
                  <p className='fs-5'>Join the millions already benefitting from.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex flex-column justify-content-center align-items-start">
                  <div className="svg-holder border d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="rocket" class="lucide lucide-rocket h-8 w-8 text-black"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                  </div>
                  <h1 className='mt-2 fs-4 mt-3'>3. Start</h1>
                  <p className='fs-5'>Join the millions already benefitting from.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-6 text-center service-image-holder text-center">
            <img src={Image} alt={Image} className='img-fluid mw-100 mh-100 object-cover'/>
          </div>
        </div>
      </div>
    </div>
  )
}
   
export default Service_2
