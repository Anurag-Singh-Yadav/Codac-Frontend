/* eslint-disable no-unused-vars */
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { useNavigate , Link} from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const checkLogin = async () => {
    const token = Cookies.get("token");
    try {
      console.log("token", token);
      console.log(
        "url ->",
        `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_CHECK_LOGIN}`
      );
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_CHECK_LOGIN}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          token: token,
        }
      );
      console.log(res);
      setUserDetails(res.data);
    } catch (e) {
      console.log(e);
      setUserDetails(null);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className=" bg-[#eef5f8] px-6 h-[12vh] flex justify-between items-center z-10 py-6 fixed top-0 w-full">
      <Link
        to={'/'}
      >
        <img src="/codac.png" width={150}></img>
      </Link>
      {!userDetails && (
        <div className="flex justify-center items-center gap-2">
          <div
            className="py-2 px-4  text-[#8851d9] rounded-3xl border-2 border-[#8851d9] font-medium cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign In
          </div>
          <div
            className="py-2 px-4 bg-[#8851d9] border-2  rounded-3xl border-[#8851d9] text-white font-medium cursor-pointer"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Sign up
          </div>
        </div>
      )}
      {userDetails && (
        <div
          className="relative cursor-pointer"
          onMouseLeave={() => setOpen(false)}
          onMouseEnter={() => setOpen(true)}
        >
          <Avatar
            onClick={() => setOpen(true)}
            name={userDetails.name}
            size="50"
            round={true}
            src={userDetails.avatar}
          ></Avatar>
          {open && (
            <div className="absolute transition-all flex flex-col justify-evenly gap-2 py-2 px-4 text-sm duration-300 move-animation border-t-[2px] border-t-[#8851d9] rounded-md w-fit text-[#8851d9] bg-primary-bg font-semibold -right-1">
              {userDetails.name && <div>{userDetails.name}</div>}
              {userDetails.email && <div>{userDetails.email}</div>}
              <div className="flex justify-start items-center gap-2">
                <div>Logout</div> <TbLogout2 size={20} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
