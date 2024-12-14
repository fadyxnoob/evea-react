import React, { memo } from 'react'
 
const Services = () => {
    return (
        <section className='my-5 services-section' id='services'>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-black mx-auto">
                            <p className='small-text text-center'>Services</p>
                            <h2 className='text-center mt-2 fs-1'>
                                Build a customer - centric marketing strategy
                            </h2>
                            <p className='text-center mt-2 fs-5'>Ligula risus auctor tempus magna feugit lacinia.</p>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-6 col-lg-3 text-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="svg-holder border d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="menu" class="lucide lucide-menu h-10 w-10 text-primary"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                                </div>
                                <h1 className='mt-2 fs-4'>Market Research</h1>
                                <p className=''>Gain a comprehensive understanding of your industry landscape.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="svg-holder border d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="lightbulb" class="lucide lucide-lightbulb h-10 w-10 text-primary"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                                </div>
                                <h1 className='mt-2 fs-4'>User Experience</h1>
                                <p className=''>Evaluate the viability and potential of new products or services.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="svg-holder border d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="bar-chart-big" class="lucide lucide-bar-chart-big h-10 w-10 text-primary"><path d="M3 3v18h18"></path><rect width="4" height="7" x="7" y="10" rx="1"></rect><rect width="4" height="12" x="15" y="5" rx="1"></rect></svg>
                                </div>
                                <h1 className='mt-2 fs-4'>Digital Marketing</h1>
                                <p className=''>Benchmark your performance against competitors, identify strengths.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="svg-holder border d-flex align-items-center justify-content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="codepen" class="lucide lucide-codepen h-10 w-10 text-primary"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" x2="12" y1="22" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" x2="12" y1="2" y2="8.5"></line></svg>
                                </div>
                                <h1 className='mt-2 fs-4'>SEO Services</h1>
                                <p className=''>Anticipate market shifts and emerging trends to stay ahead of the curve.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row my-lg-5">
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="svg-holder border d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="shield" class="lucide lucide-shield h-10 w-10 text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                                </div>
                                <h1 className='mt-2 fs-4'>Market Research</h1>
                                <p className=''>Our market research services are designed to provide maximum value.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="svg-holder border d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="rocket" class="lucide lucide-rocket h-10 w-10 text-primary"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                                </div>
                                <h1 className='mt-2 fs-4'>Software Development</h1>
                                <p className=''>We go beyond data collection to provide actionable insights.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="svg-holder border d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="layers-2" class="lucide lucide-layers-2 h-10 w-10 text-primary"><path d="m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"></path><path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"></path></svg>
                                </div>
                                <h1 className='mt-2 fs-4'>Affiliate Marketing</h1>
                                <p className=''>We understand that every business is unique. That's why we offer.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 text-center">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <div className="svg-holder border d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="webcam" class="lucide lucide-webcam h-10 w-10 text-primary"><circle cx="12" cy="10" r="8"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 22h10"></path><path d="M12 22v-4"></path></svg>
                                </div>
                                <h1 className='mt-2 fs-4'>Website Development</h1>
                                <p className=''>In today's competitive market, timing is everything. Our efficient.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Services)
