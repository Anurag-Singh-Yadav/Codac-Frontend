import React from "react";

function Navbar() {
  return (
    <div className=" bg-[#eef5f8] flex justify-between items-center py-6 fixed top-0 w-full">
      <div>Logo</div>
      <div className="flex justify-center items-center gap-2">
        <div className="font-semibold">Don't have an account?</div>
        <div className="py-2 px-4 bg-[#8851d9] rounded-md text-white font-medium cursor-pointer">
          Sign up
        </div>
      </div>
    </div>
  );
}

export default Navbar;
