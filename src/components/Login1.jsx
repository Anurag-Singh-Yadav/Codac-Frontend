import Signin from "./Signin";
function Login1() {
  return (
    <div className="bg-[url('/wave.svg')] min-h-screen px-8">
      <div className="flex justify-between items-center py-6">
        <div>Logo</div>
        <div className="flex justify-center items-center gap-2">
          <div className="font-semibold">Don't have an account?</div>
          <div className="py-2 px-4 bg-[#8851d9] rounded-md text-white font-medium cursor-pointer">Sign up</div>
        </div>
      </div>

      <div className="px-[30%] pt-10">
        <Signin></Signin>
      </div>

      
    </div>
  );
}

export default Login1;
