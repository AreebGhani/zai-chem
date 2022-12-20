import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact, Services, Products, Blog } from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    )
}

export default Router;
