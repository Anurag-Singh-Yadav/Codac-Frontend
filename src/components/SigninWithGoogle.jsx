import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Cookies from "js-cookie";

function SigninWithGoogle() {
  const successHandler = async (credentialResponse) => {
    try {
      const response = jwtDecode(credentialResponse.credential);
      console.log("response", response);
      const { email, name, picture } = response;
      const responseFromServer = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_AUTO_AUTH_LOGIN}`,
        {
          email,
          name,
          image: picture
        }
      );
      console.log("Server Response", responseFromServer.data);
      const token = responseFromServer.data.token;
      Cookies.set('token', token, { expires: 7 });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const errorHandler = (error) => {
    console.log("Login Failed", error);
  };

  return (
    <div className="w-full  items-center justify-center flex">
      <GoogleLogin 
        onSuccess={(credentialResponse) => successHandler(credentialResponse)}
        onError={(error) => errorHandler(error)}
        scope="https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
      />
    </div>
  );
}

export default SigninWithGoogle;
