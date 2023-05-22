import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' 
import me from '../../assets/gilles.jpg'
import HeaderSocial from './HeaderSocial' 

export default function Header () {

    return (
        <header id='header' >
            <div className='container header__container'>

                <h5>Hello I'm</h5>
                <h1>Gilles Christian Kamgaing K.</h1>
                <h5 className='text-light'>Software Engineer </h5>
                <CTA/>
                <HeaderSocial/> 
                <div className='my_image'>
                    <img src={me} alt='My_Image'/> 
                </div>
                <a href='#contact' className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}

