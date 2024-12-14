import React from 'react' 
import Image1 from '../assets/images/blog/05.jpg'
import Image2 from '../assets/images/blog/04.jpg'
import Image3 from '../assets/images/blog/07.jpg'
import Client1 from '../assets/images/user/client03.jpg'
import Client2 from '../assets/images/user/client-04.jpg'
import Client3 from '../assets/images/user/client-05.jpg'
const Blog = () => {
    const data = [
        {
            id: 1,
            image: Image1,
            title: 'Spotlight — Equinox Collection by Shane Griffin',
            disc: 'As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...',
            author: 'Credon catla',
            authorImage: Client1,
            date: 'August 2'
        },
        {
            id: 2,
            image: Image2,
            title: 'Random Explorations with Cinema 4D and Redshift',
            disc: 'As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...',
            author: 'Jessica Smith',
            authorImage: Client2,
            date: 'August 3'
        },
        {
            id: 3,
            image: Image3,
            title: 'Step by step guide for conducting usability',
            disc: 'As I searched for inspiration to get started, I came across the captivating creations of Shane Griffin, an artist and director located in New York City...',
            author: 'Petric Camp',
            authorImage: Client3,
            date: 'August 8'
        },
    ]
    

    return (
        <div className='container-fluid blog-container my-5' id='blog'>
            <div className="container">
                <div className="row">
                    {
                        data.map((post) => {
                            return (
                                <div className="col-lg-4 col-md-6 mt-5 mt-lg-0" key={post.id}>
                                    <div className="card position-relative rounded">
                                        <img src={post.image} class="card-img-top" alt={post.image} />
                                        <div className="card-body">
                                            <h5 className='card-title text-black my-2 fw-semibold'>{post.title}</h5>
                                            <p className='fs-6 card-text text-muted fw-semibold'>{post.disc}</p>
                                            <div className="row mt-2">
                                                <div className='col d-flex align-items-end gap-2'>
                                                    <div>
                                                        <img src={post.authorImage} alt={post.author} className='blog-card-client-image rounded-circle' />
                                                    </div>
                                                    <div className='p-0 m-0'>
                                                        <a href="#" className='blog-user-link'><p>{post.author}</p></a>
                                                    </div>
                                                </div>
                                                <div className='col d-flex align-items-center justify-content-end'>
                                                    <p className='text-muted fs-5 p-0 m-0'>{post.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog
