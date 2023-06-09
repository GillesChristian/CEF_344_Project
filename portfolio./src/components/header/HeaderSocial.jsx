import React from 'react';
import  {BsLinkedin} from 'react-icons/bs';
import  {FaGithub} from 'react-icons/fa';
import  {FaFacebookF} from 'react-icons/fa';
import  {CgTwitter} from 'react-icons/cg';

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://linkedin.com/in/kamdem-kamgaing-gilles-christian-b73338251' target='blank'><BsLinkedin/> </a>
        <a href='https://github.com/GillesChristian' target='blank'><FaGithub/> </a>
        <a href='https://facebook.com/ptofile.php?id=100072927796154' target='blank'><FaFacebookF/> </a>
        <a href='https://twitter.com/@GillesChristi12' target='blank'><CgTwitter/> </a>

    </div>
  )
}

export default HeaderSocial;