import React from 'react'  
import Amazon from '../assets/images/client/amazon.svg'
import Google from '../assets/images/client/google.svg'
import Lenovo from '../assets/images/client/lenovo.svg'
import Paypal from '../assets/images/client/paypal.svg'
import Shopify from '../assets/images/client/shopify.svg'
import Spotify from '../assets/images/client/spotify.svg'

const Companies = () => {
    return (
        <div className='container-fluid companies-container my-5 py-5' id='companies'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-black fs-1">Trusted by Leading Companies</h1>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-4 col-sm-3 col-lg-2 p-4">
                        <img src={Amazon} alt={Amazon} className='img-fluid w-100 h-75' />
                    </div>
                    <div className="col-4 col-sm-3 col-lg-2 p-4">
                        <img src={Google} alt={Google} className='img-fluid w-100 h-75' />
                    </div>
                    <div className="col-4 col-sm-3 col-lg-2 p-4">
                        <img src={Lenovo} alt={Lenovo} className='img-fluid w-100 h-75' />
                    </div>
                    <div className="col-4 col-sm-3 col-lg-2 p-4">
                        <img src={Paypal} alt={Paypal} className='img-fluid w-100 h-75' />
                    </div>
                    <div className="col-4 col-sm-3 col-lg-2 p-4">
                        <img src={Shopify} alt={Shopify} className='img-fluid w-100 h-75' />
                    </div>
                    <div className="col-4 col-sm-3 col-lg-2 p-4">
                        <img src={Spotify} alt={Spotify} className='img-fluid w-100 h-75' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
