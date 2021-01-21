import React from 'react';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
import {ButtonBarContainer,SignInContainer,SignInTitle} from './sign-in.style';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }
  handlesubmit=async (e)=>{
  e.preventDefault();
  
   const {email,password}=this.state;
   try{
    await auth.signInWithEmailAndPassword(email,password);
    this.setState({email:'',password:''})  
   }
   catch(error){
   console.log(error);
   }
 }

 handlechange=(e)=>{
   const {value,name}=e.target;

   this.setState({[name]:value});
 }

    render()
    {
        return(
            <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handlesubmit}>
            <FormInput name="email" type="email" label="email" value={this.state.email} handlechange={this.handlechange}required/>
          
            <FormInput name="password" type="password"  label="password" value={this.state.password}
            handlechange={this.handlechange} required/>
             <ButtonBarContainer>

            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '} Sign In with Google{' '}</CustomButton>
            </ButtonBarContainer>
            </form>
            </SignInContainer>
        )
    }

}

export default SignIn;