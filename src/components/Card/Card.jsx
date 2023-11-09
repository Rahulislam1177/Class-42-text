import React from 'react';
import './Card.css'

const Card = ({card}) => {
  

  let total = 0;
  let shipping = 0;

 for(const product of card){
 total = total + product.price;
 shipping = shipping + product.shipping;

  

 }


  const tex =parseFloat((total * 0.1).toFixed(2));
  const grandTotal =total + shipping + tex;

    return (
        <div className='Card'>
      <h5>Order Summary</h5>
      <h6>Selected Items: {card.length} </h6>
      <h6>Total Price: ${total}</h6>
      <h6>Total Shipping Charge: ${shipping}</h6>
      <h6>Tax: ${tex}</h6>
      <p>Grand Total: ${grandTotal}</p>

      <button className='clear'>Clear Cart</button>
      <button className='review'>Review Order</button>

        </div>
    );
};

export default Card;