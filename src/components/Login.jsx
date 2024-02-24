import React from "react";
import Signin from "./Signin";
function Login() {
  return (
    <div className="bg-[url('/wave.svg')] min-h-[88vh] px-8">
      <div className="xl:px-[30%] lg:px-[25%] md:px-[20%] sm:px-[15%] pt-10">
        <Signin></Signin>
      </div>
    </div>
  );
}

export default Login;
