import React, { useState } from "react";
import SigninWithGoogle from "./SigninWithGoogle";

function Signup() {
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
    try{
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_MANUAL_LOGIN}`,formData);
      const {token} = res.data;
      if(token){
        Cookies.set('token',token);
        navigate('/');
      }
      else{
        throw new Error();
      }
    } catch(err){
      alert(err?.response.data?.message || 'Unknown error while signing-in');
    }
  };

  return (
    <div className="bg-[url('/wave.svg')] min-h-[88vh] px-8">
      <div className="px-[30%] pt-10">
        <div className="bg-white py-6 px-16 rounded-md">
          <div className="font-bold text-3xl text-center my-2">
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
                req
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
                req
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
                req
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
