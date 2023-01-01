import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home, About, Contact, Services, Products, Blog, BlogDetails, Team, TeamDetails, ServiceDetails, ProductDetails, LiteratureReview } from "../pages";

const Router = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [pathname]);

    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/team" exact element={<Team />} />
            <Route path="/team-details/:id" exact element={<TeamDetails />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/service-details/:id" exact element={<ServiceDetails />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/product-details/:id" exact element={<ProductDetails />} />
            <Route path="/literature-review" exact element={<LiteratureReview />} />
            <Route path="/blog" exact element={<Blog />} />
            <Route path="/blog-details/:id" exact element={<BlogDetails />} />
        </Routes>
    )
}

export default Router;
