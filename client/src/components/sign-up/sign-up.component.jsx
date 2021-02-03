import React,{useState}  from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import {signUpStart} from '../../redux/user/user.action';
import CustomButton from '../custom-button/custom-button.component';
 
import './sign-up.style.scss';
import {SignUpContainer,SignUpTitle} from './sign-up.style';
  const SignUp=({signUpStart})=>{
   const [userCredentials,setCredentials]=useState({email:'',password:'',
displayName:'',confirmPassword:''});
  const {displayName,email,password,confirmPassword}=userCredentials;
   const handlesubmit=async event=>{
       event.preventDefault();
    //    const {signUpStart}=this.props;
       const {displayName,email,password,confirmPassword}=userCredentials;
       if(password!==confirmPassword){
           alert("password don't match");
           return;
       }
       signUpStart({displayName,email,password});

};
const handlechange=event=>{
    const {name,value}=event.target;
    setCredentials({...userCredentials,[name]:value});
}
   
       return(
           <SignUpContainer>
           <SignUpTitle>I do not have a account</SignUpTitle>
           <span>Sign Up with your email and password</span>
           <form className='sign-up-form' onSubmit={handlesubmit}>
              <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={handlechange}
              label='Display Name'
              required
              >
              
              </FormInput>
              <FormInput
              type='email'
              name='email'
              value={email}
              onChange={handlechange}
              label='Email'
              required
              >
              
              </FormInput>
              <FormInput
              type='password'
              name='password'
              value={password}
              onChange={handlechange}
              label='Password'
              required
              >
              
              </FormInput>
              <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handlechange}
              label='Confirm Password'
              required
              >
              
              </FormInput>
            <CustomButton type='submit'>Sign Up</CustomButton>

           </form>
           </SignUpContainer>
       )
   }
  const mapDispatchToProps=dispatch=>({
      signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
  })
  export default connect(null,mapDispatchToProps)(SignUp);