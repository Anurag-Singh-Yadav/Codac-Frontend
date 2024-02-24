import React, { useState } from "react";
import SigninWithGoogle from "./SigninWithGoogle";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

function Signin() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_MANUAL_LOGIN}`,formData);
      const {token} = res.data;
      if(token){
        Cookies.set('token',token);
        navigate('/');
        window.location.reload();
      }
      else{
        throw new Error();
      }
    } catch(err){
      console.log(err);
      alert(err.response.data?.message || 'Unknown error while signing-in');
    }
  };

  return (
    <div className="bg-white py-6 px-16 rounded-md">
      <div className="font-bold text-3xl text-center">Welcome Back!</div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 w-full">
          <div className="text-xs font-semibold">Email</div>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="border-2 px-2 py-1 rounded-md"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="text-xs font-semibold">Password</div>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="border-2 px-2 py-1  rounded-md"
            value={formData.password}
            onChange={handleChange}
          ></input>
        </div>
        <button
          type="submit"
          className="bg-[#8851d9] py-2 text-white text-center font-bold cursor-pointer rounded-md"
        >
          Log In
        </button>
        <div className=" w-full">
          <SigninWithGoogle  />
        </div>
      </form>
    </div>
  );
}

export default Signin;
