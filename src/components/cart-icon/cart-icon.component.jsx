import React from 'react';
import {connect} from 'react-redux';
import './cart-icon.style.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart.action.js';
import {selectCartItemsCount} from '../../redux/cart/cart-selector';
import {createStructuredSelector} from 'reselect';
const CartIcon=({toggleCartHidden,itemCount})=>(

    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
);
const  mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})
const mapStateToProps=createStructuredSelector({
   itemCount:selectCartItemsCount
  })
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);