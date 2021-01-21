import React from 'react';

//import './form-input.style.scss';
import {GroupContainer,FormInputContainer,FormInputLabel} from './form-input.style';
const FormInput =({handlechange,label,...props})=>(
<GroupContainer>
 <FormInputContainer onChange={handlechange}{...props}/>
 {
     label?
     (<FormInputLabel className={props.value.length?'shrink':''}>
     {label}
     </FormInputLabel>):null
 }
</GroupContainer>

)
export default FormInput;