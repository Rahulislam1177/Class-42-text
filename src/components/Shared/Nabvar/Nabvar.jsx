import React from 'react';
import image from '../../../assets/images/Logo.svg'
import './Nabvar.css'

const Nabvar = () => {
    return (
        <div className='Nabvar'> 

          <div className='header'>


            <div className='logo'>
                <img src={image} alt="" />
            </div> 
            <nav>
                <ul>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Order Review</a></li>
                    <li><a href="#">Manage Inventory</a></li>
                </ul>
            </nav>


          </div>

        </div>
    );
};

export default Nabvar;