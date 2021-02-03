import React from 'react';
import {connect} from 'react-redux';
import './cart-icon.style.scss';
//import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.action.js';
import {selectCartItemsCount} from '../../redux/cart/cart-selector';
import {createStructuredSelector} from 'reselect';
import {CartContainer,ShoppingIcon,ItemCountContainer} from './cart-icon.style';
const CartIcon=({toggleCartHidden,itemCount})=>(

    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
);
const  mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
const mapStateToProps=createStructuredSelector({
   itemCount:selectCartItemsCount
  })
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);