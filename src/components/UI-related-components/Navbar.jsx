import React from "react";

function Navbar() {
  return (
    <div className=" bg-[#eef5f8] px-6 h-[12vh] flex justify-between items-center py-6 fixed top-0 w-full">
      <div>
        <img src="/codac.png" width={150}></img>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="py-2 px-4  text-[#8851d9] rounded-md border-2 border-[#8851d9] font-medium cursor-pointer">
          Sign In
        </div>
        <div className="py-2 px-4 bg-[#8851d9] border-2 rounded-md border-[#8851d9] text-white font-medium cursor-pointer">
          Sign up
        </div>
      </div>
    </div>
  );
}

export default Navbar;
