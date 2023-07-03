import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About'
import Feature from './components/Feature/Feature';
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact_Form'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feature" element={<Feature />} />
            <Route path ='/services' element= { <Services /> }/>
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          
          </Routes>
          <Footer/>
      </Router>


    
    </div>
  );
}

export default App;
