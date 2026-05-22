import React from 'react';
import Header from '../header/Header';


export default function cartItems({ id, name, price, img, quantity }
) {
  return (
    <>
      <Header />
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{img}</p>
      <p>{quantity}</p>


    </>
  )
}
