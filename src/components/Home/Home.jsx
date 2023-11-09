import React from 'react';
import './Home.css'
import homeImage from '../../assets/images/austin-wade-AoYT0ArTTmg-unsplash 1.png'
const Home = () => {
    return (
        <div className='home'>
         <div className="home-laft">
         <h5>Sale up to 70% off</h5>
         <h1>New Collection For Fall</h1>
         <p>Discover all the new arrivals of ready-to-wear collection.</p>
         <button>SHOP NOW</button>
         </div>
         <div className="home-right">
            <img src={homeImage} alt="" />
         </div>
            
        </div>
    );
};

export default Home;