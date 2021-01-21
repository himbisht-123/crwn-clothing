import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart-selector';  
//import './checkout.style.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component.jsx';
import {CheckoutHeaderContainer,CheckoutPageContainer,HeaderBlockContainer,TotalContainer,WarningContainer} from './checkout.style.jsx';

const CheckoutPage=({cartItems,total})=>(
 <CheckoutPageContainer>
 <CheckoutHeaderContainer>
 <HeaderBlockContainer>
 <span>Product</span>
 </HeaderBlockContainer>
 <HeaderBlockContainer>
 <span>Description</span>
 </HeaderBlockContainer>
 <HeaderBlockContainer>
 <span>Quantity</span>
 </HeaderBlockContainer>
 <HeaderBlockContainer>
 <span>Price</span>
 </HeaderBlockContainer>
 <HeaderBlockContainer>
 <span>Remove</span>
 </HeaderBlockContainer>

 </CheckoutHeaderContainer>
 {
     cartItems.map(cartItem=>(<CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>))
 }
 <TotalContainer>
 <span>TOTAL: ${total}</span>
 </TotalContainer>
 <WarningContainer>
   *Please use the following test credit card for payments*
   <br></br>
   4242 4242 4242 4242 -Exp:01/21 -CVV:123
 </WarningContainer>
  <StripeCheckoutButton price={total}/> 
 </CheckoutPageContainer>
);
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);