import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
function Signin() {
  const sucessHandler = async(credentialResponse)=>{
    console.log("decode ->",jwtDecode(credentialResponse.credential));
  }

  const errorHandler = async(e)=>{
    console.log("Login Failed",e);
  }

  return (
    <div className="bg-white py-6 px-16">
      <div className="font-bold text-3xl text-center">Welcome Back!</div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <div className="text-xs">Email</div>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border-2 px-2 py-1"
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xs">Password</div>
          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 px-2 py-1"
          ></input>
        </div>
        <div className="bg-[#8851d9] py-2 text-white text-center font-bold cursor-pointer">
          Log In
        </div>

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            sucessHandler(credentialResponse);
          }}
          onError={(e) => {
            errorHandler(e);
          }}
          scope="https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
        />
      </form>
    </div>
  );
}

export default Signin;
