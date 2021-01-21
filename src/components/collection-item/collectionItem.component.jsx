import React from 'react';
import {connect} from 'react-redux';

//import './collectionItem.style.scss';
//import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.action.js';
import {PriceContainer,NameContainer,CollectionFooterContainer,CollectionItemContainer,AddButton,BackgroundImage} from './collectionItem.style';

const CollectionItem=({item,addItem})=>
{ 
    const {name,price,imageUrl}=item;
    return(
    <CollectionItemContainer>
    <BackgroundImage className='image' imageUrl={imageUrl}/>
    <CollectionFooterContainer>
    <NameContainer>{name}</NameContainer>
    <PriceContainer>{price}</PriceContainer>
    </CollectionFooterContainer>
    <AddButton onClick={()=>addItem(item)} inverted>Add To Cart</AddButton>
</CollectionItemContainer>
)
}

const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);