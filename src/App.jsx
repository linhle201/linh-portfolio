import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './components/Contact';
import ProjectNSCC from './projects/Project-NSCC'; 
import ProjectBuses from './projects/Buses'; 


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nscc" element={<ProjectNSCC />} /> 
        <Route path="/buses" element={<ProjectBuses />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;