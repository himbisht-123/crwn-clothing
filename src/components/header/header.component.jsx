import React from 'react';
import './header.style.scss';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo}from '../../assets/crwon.svg';
import {connect} from 'react-redux';
import {selectCartHidden} from '../../redux/cart/cart-selector';
import {selectCurrentUser} from '../../redux/user/user-selectors';
import {createStructuredSelector} from 'reselect';
import {OptionContainer,OptionDiv,OptionLink,HeaderContainer,LogoContainer} from './header.styles';
const Header=({currentUser,hidden})=>
(
<HeaderContainer>
   <LogoContainer  to="/">
      <Logo className='logo'/>
   </LogoContainer>
   <OptionContainer >
     <OptionLink to="/shop">
      SHOP
     </OptionLink>
     <OptionLink  to="/contact">
     CONTACT
    </OptionLink>
    {
       currentUser?
       <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>:
       <OptionLink  to='/signin'>SIGN IN</OptionLink>
    }
    <CartIcon></CartIcon>
   </OptionContainer>{
         hidden? null:
      <CartDropdown/>
}
 </HeaderContainer>
)
const mapStateToProps=createStructuredSelector({
   currentUser:selectCurrentUser,
   hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);