import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from './react'
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Service from './component/Service';
import About from './component/About';
import Prices from './component/Prices';
import Contact from './component/Contact';
function App() {

  return (
<div>
<Banner />
  <Navbar />
 <Service />
 <About />
 <Prices />
 <Contact />
</div>
  );
}


export default App;