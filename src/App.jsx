// React-router
import { Routes, Route } from 'react-router-dom'

// Components
import Home from "./components/Home/Home"
import Store from './components/Store/Store';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {

  return (
    <>
        <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
