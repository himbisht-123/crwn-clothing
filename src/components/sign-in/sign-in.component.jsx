import React,{useState} from 'react';

import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
//import {auth} from '../../firebase/firebase.utils';
import {ButtonBarContainer,SignInContainer,SignInTitle} from './sign-in.style';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action.js';
import {connect} from 'react-redux';

const SignIn=({emailSignInStart,googleSignInStart})=>{
    const [userCredentials,setCredentials]=useState({email:'',password:''});
    const {email,password}=userCredentials;
  const handlesubmit=async (e)=>{
  e.preventDefault();
   
   const {email,password}=userCredentials;
//    try{
//     await auth.signInWithEmailAndPassword(email,password);
//     this.setState({email:'',password:''})  
//    }
//    catch(error){
//    console.log(error);
//    }
    emailSignInStart(email,password);
 };


 const handlechange=(e)=>{
   const {value,name}=e.target;

   setCredentials({...userCredentials,[name]:value});
 }

        // const {googleSignInStart}=this.props;
        return(
            <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handlesubmit}>
            <FormInput name="email" type="email" label="email" value={email} handlechange={handlechange}required/>
          
            <FormInput name="password" type="password"  label="password" value={password}
            handlechange={handlechange} required/>
             <ButtonBarContainer>

            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>{' '} Sign In with Google{' '}</CustomButton>
            </ButtonBarContainer>
            </form>
            </SignInContainer>
        )
    }
const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password})) 
})

export default connect(null,mapDispatchToProps)(SignIn);