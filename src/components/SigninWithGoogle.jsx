import React , {useEffect , useRef , useState}from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Cookies from "js-cookie";

function SigninWithGoogle() {
    const ref = useRef();
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

  const [wid , setWid] = useState('50');

  useEffect(() => {
    if (ref.current) {
        setWid(ref.current.offsetWidth.toString());
    }
},[]);

  return (
    <div className="flex justify-center" ref={ref}>
      <GoogleLogin 
        onSuccess={(credentialResponse) => successHandler(credentialResponse)}
        onError={(error) => errorHandler(error)}
        scope="https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
        width={wid}
        size="large"
      />
    </div>
  );
}

export default SigninWithGoogle;
