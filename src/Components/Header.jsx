import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/logo.png'
 
const Header = () => {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
    return (
        <>
            <div className={`container-fluid nav-container position-fixed top-0 left-0 ${isSticky ? 'fixed text-dark' : 'relative'} w-100 p-0 py-1`}>
                <nav className="navbar navbar-expand-lg px-lg-5">
                    <div className="container-fluid nav-container-child p-0 px-5">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt={Logo} className='img-fluid object-fit-contain' />
                        </a>
                        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse my-2 my-md-0" id="navbarSupportedContent">
                            <ul className="navbar-nav pt-1 mb-lg-0 mx-auto flex gap-3 ">
                                <li className="nav-item">
                                    <a className={`nav-link ${isSticky ? 'text-dark' : ''}`} aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${isSticky ? 'text-dark' : ''}`} href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${isSticky ? 'text-dark' : ''}`} href="#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${isSticky ? 'text-dark' : ''}`} href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${isSticky ? 'text-dark' : ''}`} href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${isSticky ? 'text-dark' : ''}`} href="#testimonials">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${isSticky ? 'text-dark' : ''}`} href="#blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${isSticky ? 'text-dark' : ''}`} href="#contact">Contact</a>
                                </li>
                            </ul>
                            <button className='nav-button d-flex px-4 fw-bold py-2 mt-1 border-0 rounded text-light gap-2'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="download-cloud" className="lucide lucide-download-cloud h-4 w-4 fill-white/40"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
                                </span>
                                Download
                            </button>
                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default React.memo(Header)
