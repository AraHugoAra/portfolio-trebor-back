// Dependencies
import { Routes, Route } from 'react-router-dom'
import "@stripe/stripe-js"

// Components
import Home from "./components/Home/Home"
import Store from './components/Store/Store';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import CancelCheckout from './components/Store/CancelCheckout';
import SuccessChekout from './components/Store/SuccessCheckout';

function App() {

  return (
    <>
        <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
          <Route path="/store/cancel" element={<CancelCheckout />} />
          <Route path="/store/success" element={<SuccessChekout />} />
        <Route path="/music" element={<Music />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
