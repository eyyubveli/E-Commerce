import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './pages/Home';
import Shop from './pages/Shop/Shop';
import Footer from './Components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ScrollToHash from './Components/ScrollToHash/ScrollToHash';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <Header />
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product-details/:id" element={<ProductDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
