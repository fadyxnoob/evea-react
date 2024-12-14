import React from 'react'
import PriceCard from './PriceCard'
     
const Pricing = () => {
  return (
    <div className='container-fluid price-container my-5' id='pricing'>
    <div className="container">
        <div className="row">
            <div className="col-12 text-center"><p className='small-text'>Pricing</p></div>
            <div className="col-lg-8 mx-auto">
                <h2 className='text-black text-center fs-1'>Get the power of the professional services with the simple price</h2>
            </div>
            <div className="row my-5">
                <div className="col-md-6 mx-auto text-center">
                <p className='fs-5'>Save up to 15% with Annual Plan.</p>
                </div>
            </div>
            <div className="row my-5">
                <PriceCard />
                <PriceCard />
                <PriceCard />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Pricing
