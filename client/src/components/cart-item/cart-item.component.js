import React from 'react';


import './cart-item.style.scss';
import {CartItemContainer,CartItemImage,ItemDetailsContainer} from './cart-item.style.jsx';
const CartItem=({item:{imageUrl,price,name,quantity}})=>(
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt='item'/>
      <ItemDetailsContainer>
         <span >{name}</span>
         <span >{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
)
export default CartItem;