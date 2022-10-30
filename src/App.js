
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import Reviews from './Pages/Reviews/Reviews';
import Products from './Pages/Products/Products';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Footer/Footer';
import { useEffect } from 'react';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import ReviewDetail from './Pages/ReviewDetail/ReviewDetail';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/reviews/:reviewId' element={<ReviewDetail />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

      {/* Button for scroll to top */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        style={{
          border: 'none',
          borderRadius:["10%"],
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#0C9',
          color: '#fff',
          textAlign: 'center',
        }}
      >
       ↑ Top
      </button>
    </div>
  );
}

export default App;
