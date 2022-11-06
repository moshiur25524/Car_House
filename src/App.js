
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
import ReviewDetail from './Pages/ReviewDetail/ReviewDetail';
import BdAdress from './Pages/Contact/BdAdress';
import UsAddress from './Pages/Contact/UsAddress';
import Volunteers from './Pages/Volunteers/Volunteers';

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
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='bd-address' element={<BdAdress></BdAdress>}></Route>
          <Route path='us-address' element={<UsAddress></UsAddress>}></Route>
        </Route>
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/reviews/:reviewId' element={<ReviewDetail />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/volunteers' element={<Volunteers></Volunteers>} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

      {/* Button for scroll to top */}
      {/* <button
        title='Scroll to top'
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        style={{
          border: 'none',
          borderRadius: ["10%"],
          position: 'fixed',
          padding: '0 0.5rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#0C9',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        ↑ 
      </button> */}
    </div>
  );
}

export default App;
