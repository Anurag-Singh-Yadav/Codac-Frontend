import React, { useState } from "react";
import SigninWithGoogle from "./SigninWithGoogle";
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router";
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      alert('Both passwords fields should be same');
      return;
    }
    try{
      console.log("form data ",formData);
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_CREATE_USER}`,formData);
      if(res.data?.success){
        navigate('/login');
      
      }
    } catch(err){
      console.log("error",err);
      alert(err?.response.data?.message || 'Unknown error while signing-in');
    }
  };

  return (
    <div className="bg-[url('/wave.svg')] min-h-[88vh] px-8">
      <div className="xl:px-[30%] lg:px-[25%] md:px-[20%] sm:px-[15%] pt-10">
        <div className="bg-white py-6 px-4 sm:px-16 rounded-md">
          <div className="font-bold text-center text-xl sm:text-3xl mt-2 mb-4">
            Create Account
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-1">
                <div className="text-xs font-semibold">Name</div>
                <input
                  required
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  className="border-2 px-2 py-1 rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="text-xs font-semibold">Email</div>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="border-2 px-2 py-1 rounded-md"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs font-semibold">Password</div>
              <input
                required
                type="password"
                name="password"
                placeholder="Enter your password"
                className="border-2 px-2 py-1 rounded-md"
                value={formData.password}
                onChange={handleChange}
              ></input>
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-xs font-semibold">Confirm Password</div>
              <input
                required
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                className="border-2 px-2 py-1 rounded-md"
                value={formData.confirmPassword}
                onChange={handleChange}
              ></input>
            </div>

            <button
              type="submit"
              className="bg-[#8851d9] py-2 text-white text-center font-bold cursor-pointer rounded-md"
            >
              Create Account
            </button>
            <div>
              <SigninWithGoogle />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
