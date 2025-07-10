import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
const AboutUs = React.lazy( ()=> import('./AboutUs') );
const ContactUs = React.lazy( ()=> import('./ContactUs') );
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";

function App() {
  const style = {listStyle: 'none', display: 'flex'};
  const stylechild = {padding: '10px', textDecoration: 'none'}
  return ( 
    <>
      <ul style={style}>
        <li><Link style={stylechild} to='/'>Home</Link></li>
        <li><Link style={stylechild} to='/about-us'>About Us</Link></li>
        <li><Link style={stylechild} to='/contact-us'>Contact Us</Link></li>
      </ul>
      
      <React.Suspense fallback={ <div style={{color: "blue"}}>Please wait... loading...</div> }>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App;

