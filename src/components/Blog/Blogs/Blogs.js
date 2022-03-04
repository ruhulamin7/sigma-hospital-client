import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetBlogQuery } from '../../../features/blogApi';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Share/Header/Header';
import './Blogs.css';

const Blogs = () => {
    const blogCollection = useGetBlogQuery() || {};
    console.log(blogCollection);
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("https://shrouded-headland-44423.herokuapp.com/Blog").then(res => res.json()).then(result => setBlogs(result))
    }, [])
    console.log(blogs, "problem");

    return (
        <>
            <Header />
        <Container>
            <Row className='g-4' xs={1} md={2}>
                {blogs.slice(2, 6).map(blog => (
                    <Col>
                        <div className="blog-items mb-4">
                            <div className="blog-img mb-4">
                                <img className='img-fluid' src={`data:image/*;base64,${blog?.photo}`} alt="" />
                            </div>
                            <div className="blogs-info">
                                {/* <span>{blog?.blogType}</span>
                                <p><span>{blog?.date}</span> <span>Admin</span> </p> */}
                                <Link className=' text-decoration-none mt-4' to={`/blog/${blog?._id}`} ><h2>{blog?.title}</h2></Link>
                                <br />
                                <Link className='btn-blog text-decoration-none text-white mt-4' to={`/blog/${blog?._id}`} >Read More</Link>
                            </div>
                        </div>
                    </Col>
                ))
                }
            </Row>
            </Container>
            <Footer />
            </>
    );
};

export default Blogs;