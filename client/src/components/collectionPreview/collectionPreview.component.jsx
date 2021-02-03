import React from 'react';

//import './collectionPreview.style.scss';
import CollectionItem from '../collection-item/collectionItem.component';
import {CollectionPreviewContainer,TitleContainer,PreviewContainer} from './collectionPreview.style';
const CollectionPreview=({title,items})=>
(
<CollectionPreviewContainer>
<TitleContainer>{title.toUpperCase()}</TitleContainer>
<PreviewContainer>
{
   items.filter((item,idx)=>idx<4).map((item)=>(
      <CollectionItem key={item.id} item={item}/>
   ))
}
</PreviewContainer>
</CollectionPreviewContainer>

)
export default CollectionPreview;