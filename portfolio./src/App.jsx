import React from 'react';
import './index.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About' ;
import Experience from './components/experience/Experience'

function App() {

    return (

            <>
                <Header/>
                <Navbar/>
                <About />
                <Experience />
             
            </>

    );    
}   

 export default App;
