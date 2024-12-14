import React from 'react'
import MainImage from '../assets/images/feature.jpg'
import ParallaxComponent from './Parallax'
 
const Features = () => {
  return (
    <section className='features my-5' id='features'>
      <div className="container-fluid">
        <div className="container ">
          <div className="row">
            <div className="col-lg-5 px-2 px-sm-0 ps-lg-5 ms-lg-5 text-center">
              <img src={MainImage} alt={MainImage} className='img-fluid rounded feature-image' />
            </div>
            <div className="col-lg-6 pt-5 ps-5">
              <p className='small-text'>Focused on achievind</p>
              <h2 className='fs-1 text-black'>
                Achievement Via Our Distinct Methodology
              </h2>
              <a href="#" className='text-decoration-none text-black d-flex gap-2'>Learn More
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="move-right" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg>
                </span>
              </a>
              <hr />
              <div className="row feature-details">
                <div className="col-2 p-0 m-0 pt-2">
                  <div className="d-flex flex-column justify-content-center align-items-center p-0 m-0">
                    <div className="svg-holder rounded-circle d-flex align-items-center justify-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" class="lucide lucide-check text-base text-blue-600"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="col-9 p-0">
                  <h4 className='text-black fs-4'>
                    Manage markets with empowerment
                  </h4>
                  <p className='fs-6'>
                    Empower yourself to effectively manage markets with confidence. utilizing strategic insights and resources for success.
                  </p>
                </div>
              </div>
              <div className="row feature-details">
                <div className="col-2 p-0 m-0 pt-2">
                  <div className="d-flex flex-column justify-content-center align-items-center p-0 m-0">
                    <div className="svg-holder rounded-circle d-flex align-items-center justify-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="layers-2" class="lucide lucide-layers-2 text-base text-blue-600"><path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"></path><path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="col-9 p-0">
                  <h4 className='text-black fs-4'>
                    Manage markets with empowerment
                  </h4>
                  <p className='fs-6'>
                    Empower yourself to effectively manage markets with confidence. utilizing strategic insights and resources for success.
                  </p>
                </div>
              </div>
              <div className="row feature-details">
                <div className="col-2 p-0 m-0 pt-2">
                  <div className="d-flex flex-column justify-content-center align-items-center p-0 m-0">
                    <div className="svg-holder rounded-circle d-flex align-items-center justify-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="lock" class="lucide lucide-lock text-base text-blue-600"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="col-9 p-0">
                  <h4 className='text-black fs-4'>
                    Manage markets with empowerment
                  </h4>
                  <p className='fs-6'>
                    Empower yourself to effectively manage markets with confidence. utilizing strategic insights and resources for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ParallaxComponent />
    </section>
  )
}

export default Features
