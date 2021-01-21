import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';
 import {auth,createUserProfileDocument} from '../../firebase/firebase.utils.js';
  import './sign-up.style.scss';
import {SignUpContainer,SignUpTitle} from './sign-up.style';
  class SignUp extends React.Component{
   constructor(){
       super();

       this.state={
           displayName:'',
           email:'',
           password:'',
           confirmPassword:''
       }

   }
   handlesubmit=async event=>{
       event.preventDefault();
       const {displayName,email,password,confirmPassword}=this.state;
       if(password!==confirmPassword){
           alert("password don't match");
           return;
       }
  try{
        const {user}=await auth.createUserWithEmailAndPassword(email,password);
       await createUserProfileDocument(user,{displayName});

       this.setState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
       })
  }
  catch(error){
      console.log(error);

  }

}
handlechange=event=>{
    const {name,value}=event.target;
    this.setState({[name]:value});
}
   render(){
       const {displayName,email,password,confirmPassword}=this.state;
       return(
           <SignUpContainer>
           <SignUpTitle>I do not have a account</SignUpTitle>
           <span>Sign Up with your email and password</span>
           <form className='sign-up-form' onSubmit={this.handlesubmit}>
              <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={this.handlechange}
              label='Display Name'
              required
              >
              
              </FormInput>
              <FormInput
              type='email'
              name='email'
              value={email}
              onChange={this.handlechange}
              label='Email'
              required
              >
              
              </FormInput>
              <FormInput
              type='password'
              name='password'
              value={password}
              onChange={this.handlechange}
              label='Password'
              required
              >
              
              </FormInput>
              <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={this.handlechange}
              label='Confirm Password'
              required
              >
              
              </FormInput>
            <CustomButton type='submit'>Sign Up</CustomButton>

           </form>
           </SignUpContainer>
       )
   }

  }
  export default SignUp;