import React from 'react';
import './index.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About' ;
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

function App() {

    return (

            <>
                <Header/>
                <Navbar/>
                <About />
                <Services />
                <Footer />
             
            </>

    );    
}   

 export default App;
