import React, { useRef } from "react";   
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialData from './TestimonilasData'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
    let sliderRef = useRef(null);

    const handleNext = () => {
        sliderRef.slickNext();
    };
    const handlePrevious = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <div className="container-fluid testimonial-container my-5" id="testimonials">
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <p className="text-center small-text">Our Clients</p>
                        <h2 className="text-center text-black fs-1 fw-semibold">Stories From Our Customers</h2>
                    </div>
                </div>
                <div className="row my-5">
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}>
                        {TestimonialData.map((testimonial) => (
                            <div className="p-3" key={testimonial.id}>
                                <div className="border p-4 rounded shadow-sm">
                                    <h4 className="text-black mb-3">{testimonial.title}</h4>
                                    <p className="text-muted">{testimonial.text}</p>
                                    <div className="d-flex align-items-center mt-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className="rounded-circle me-3"
                                            style={{ width: "50px", height: "50px" }}
                                        />
                                        <div>
                                            <h6 className="mb-0 text-primary">{testimonial.author}</h6>
                                            <small className="text-muted">{testimonial.position}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="col-2 col-lg-1 mx-auto my-3">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <button
                                className="testimonial-button border rounded-circle p-2 d-flex align-items-center justify-content-center shadow h-25 w-100"
                                onClick={handleNext}
                            >
                                <IoIosArrowBack className="fs-4 fw-normal" />
                            </button>
                            <button
                                className="testimonial-button border rounded-circle p-2 d-flex align-items-center justify-content-center shadow h-25 w-100"
                                onClick={handlePrevious}
                            >
                                <IoIosArrowForward className="fs-4 fw-normal" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;