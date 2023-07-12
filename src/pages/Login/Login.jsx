import React from "react";
import Container from "../../components/sharedComponent/container";
import Logo from "../../assets/Logo.png";
import LoginPana from "../../assets/LoginPana.png";

const Login = () => {
  return (
    
    
      <div className=" bg-white ">
        <div className="bg-white ">
          <img src={Logo} alt="" className="px-20 sm:px-6" />
        </div>

        <div className="w-full flex items-start gap-5 bg-white mx-10 sm:mx-0 sm:px-2 sm:flex-col-reverse sm:flex ">
          <div className="w-1/2 flex flex-col sm:w-full ">
            <div className="p-20 sm:p-1 bg-white">
              <div className=" mb-3">
                <h2 className="font-semibold text-black text-center text-2xl my-4 ">
                  Log in to your Account
                </h2>
                <p className="font-semibold text-[12px] text-[#202020] text-center my-4 ">
                  Log in to your Account to continue the Carbon experience
                </p>
              </div>

              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-black font-bold text-[10.2px]"
                  >
                    Enter Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Email Address"
                    className=" rounded-md px-2 w-full text-[11px] py-3 font-light"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="pin"
                    className="text-black font-bold text-[10.2px]"
                  >
                    Enter PIN
                  </label>
                  <input
                    type="password"
                    name="pin"
                    id="pin"
                    placeholder="Enter PIN"
                    className=" rounded-md px-2 w-full border text-[11px] py-3 font-light"
                  />
                </div>

                <div className="w-full flex items-center mb-4 pl-2">
                  <input type="checkbox" className="w-3 h-3 mr-2 " />
                  <p className="text-sm">Forgot Password?</p>
                </div>

                <button className="bg-[#2b007a] w-full p-2 rounded-md text-white text-sm flex items-center justify-center">
                  Log in
                </button>

                <p className="text-sm font-semibold ">
                  Don't have an account?{" "}
                  <span className="text-[#2b007a]">Sign up</span>
                </p>
              </form>
            </div>
          </div>

          <div className="">
            <img src={LoginPana} alt="" className="w-full " />
          </div>
        </div>
      </div>
    
  );
};

export default Login;
