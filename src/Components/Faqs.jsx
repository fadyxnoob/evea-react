import React, { useState } from 'react'  
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faqs = () => {
    const [isFaqOpen, setIsFaqOpen] = useState(null);

    const handleOpenFaqs = (id) => {
        setIsFaqOpen((prev) => (prev === id ? null : id));
    };

    const faqs = [
        {
            id: 1,
            question: "How long does it take to ship my order ?",
            answer:
                "Shipping times vary depending on your location and the shipping method chosen. Typically, orders are processed and shipped within 1-3 business days. You'll receive a tracking number once your order is shipped, which you can use to monitor its delivery status.",
        },
        {
            id: 2,
            question: "What payment methods do you accept ?",
            answer:
                "We accept various payment methods, including credit/debit cards, PayPal, and sometimes other online payment platforms.",
        },
        {
            id: 3,
            question: "What shipping options do you have ?",
            answer:
                "Standard Shipping: This is our regular shipping option, which typically takes 3-7 business days for delivery, depending on your location and the shipping carrier.",
        },
        {
            id: 4,
            question: "How do i make changes to an existing order ?",
            answer:
                "International Shipping We also offer international shipping for customers outside the country. Delivery times for international orders vary widely based on destination and shipping method chosen. It typically ranges from 6-21 business days.",
        },
        {
            id: 5,
            question: "When will my order arrive ?",
            answer:
                "Processing Time Before your order is shipped, it needs to be processed by the seller. Processing times can vary based on factors such as order volume, item availability, and any customization or personalization required. Typically, sellers aim to process orders within 1-3 business days, but this can vary.",
        },
    ];

    return (
        <div className='container-fluid my-5 faqs-container' id='faqs'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center small-text">
                            FAQs
                        </p>
                        <h1 className="fs-1 text-center text-black fw-semibold">
                            Frequently Asked Questions
                        </h1>
                    </div>
                </div>
                <div className="row my-5 bg-white rounded p-0">
                    <div className="col-12 p-0">
                        {faqs.map((faq, index) => (
                            <div className={`py-3 cursor-pointer ${index !== faqs.length - 1 ? 'faq-content' : ''}`} key={faq.id}
                                onClick={() => handleOpenFaqs(faq.id)}
                            >  
                                <div
                                    className="d-flex align-items-center justify-content-between px-3"
                                >
                                    <h2 className="fs-5 fw-semibold text-black">{faq.question}</h2>
                                    {isFaqOpen === faq.id ? (
                                        <MdKeyboardArrowDown className="fs-4" />
                                    ) : (
                                        <MdKeyboardArrowUp className="fs-4" />
                                    )}
                                </div>
                                <div className={`${isFaqOpen === faq.id ? "d-block" : "d-none"}`}>
                                    <p className="fs-6 px-3 my-2">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
