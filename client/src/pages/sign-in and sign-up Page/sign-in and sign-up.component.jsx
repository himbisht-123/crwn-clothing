import React from 'react';

//import './sign-in and sign-up.style.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import {SignInAndSignUpContainer} from './sign-in and sign-up.style'; 
const signInandsignUpPage=()=>(
  <SignInAndSignUpContainer>
  <SignIn/>
  <SignUp></SignUp>
  </SignInAndSignUpContainer>

)

export default signInandsignUpPage;
