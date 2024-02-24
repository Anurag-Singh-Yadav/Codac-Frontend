import React from 'react'
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function SigninWithGoogle() {
    const sucessHandler = async(credentialResponse)=>{
        console.log("decode ->",jwtDecode(credentialResponse.credential));
      }
    
      const errorHandler = async(e)=>{
        console.log("Login Failed",e);
      }
  return (
    <div>
      <GoogleLogin
          onSuccess={(credentialResponse) => {
            sucessHandler(credentialResponse);
          }}
          onError={(e) => {
            errorHandler(e);
          }}
          scope="https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
        />
    </div>
  )
}

export default SigninWithGoogle
