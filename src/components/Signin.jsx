import React, { useState } from "react";
import SigninWithGoogle from "./SigninWithGoogle";

function Signin() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    console.log("Form Data:", formDataToSend);
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
        <div className="">
          <SigninWithGoogle  />
        </div>
      </form>
    </div>
  );
}

export default Signin;
