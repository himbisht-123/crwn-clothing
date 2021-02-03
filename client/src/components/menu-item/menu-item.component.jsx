import React from 'react';
//import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';
import {MenuItemContainer,BackgroundImageContainer,ContentContainer,ContentSubtitle,ContentTitle} from './menu-item.style';
const MenuItem=({title, imageUrl,size,history,linkUrl,match})=>(
    <MenuItemContainer onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer imageUrl={imageUrl}></BackgroundImageContainer>
    <ContentContainer>
    <ContentTitle>{title.toUpperCase()}</ContentTitle>
    <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
    </MenuItemContainer>
)
export default withRouter(MenuItem);