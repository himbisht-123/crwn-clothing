import React from 'react';
import {connect} from 'react-redux';

import './cart-dropdown.style.scss';
//import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart-selector.js';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.action.js';
import {EmptyMessageContainer,CartDropdownButton,CartItemsContainer,CartDropdownContainer} from './cart-dropdown.style';
const CartDropdown=({cartItems,history,dispatch})=>(
<CartDropdownContainer>

  <CartItemsContainer>
  {
    cartItems.length?(
    cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem}/>))
    ):(<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
  }
  </CartItemsContainer>
  <CartDropdownButton onClick={()=>{history.push('/checkout');
  dispatch(toggleCartHidden())

}}>GO TO CHECKOUT</CartDropdownButton>  
</CartDropdownContainer>

);
 const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
 })
export default withRouter(connect(mapStateToProps)(CartDropdown));