import React from "react";
import signUp_bg from "../../assets/signUp_bg.png";
import Logo from "../../assets/Logo.png";
import Container from "../../components/sharedComponent/container";

const SignUp = () => {
  return (
    <div className=" bg-[#d6d2e1] flex items-center justify-center w-full h-screen sm:h-full">
      <div className=" bg-white border-gray-400 ">
        <div className="bg-white mb-7 ">
          <img src={Logo} alt="" className="px-20 sm:px-6" />
        </div>

        <div className="flex px-20 sm:flex sm:flex-col gap-2 sm:px-1 bg-white  ">
          <div className="w-1/2 sm:w-full">
            <img src={signUp_bg} alt="" className="w-[90%] h-[full]"/>
          </div>

          <div className="w-1/2 sm:w-full flex flex-col gap-4 mb-20">
            <h2 className="text-2xl font-semibold text-center"> Sign Up for an Account</h2>
            <p className="text-center text-sm font-semibold text-[#303030]">Let's get you all set up for Carbon experience</p>

            <form className="flex flex-col gap-5">
                <div className="flex gap-5 px-20 sm:px-2">
                    <div className="flex flex-col w-full">
                        <label htmlFor="surname" className="text-[10.5px] font-semibold">Surname</label>
                        <input 
                        type="text" 
                        placeholder="surname" 
                        className="border border-gray-400 py-2 px-2 w-full text-[10.5px] font-semibold rounded-sm"
                        />
                    </div>

                    <div className="flex flex-col w-full ">
                        <label htmlFor="surname" className="text-[10.5px] font-semibold">Othername</label>
                        <input 
                        type="text" 
                        placeholder="othername" 
                        className=" text-[12px] font-semibold border border-gray-400 py-2 px-2 w-full rounded-sm" 
                        />
                    </div>
                    
                </div>

                <div className="flex gap-5 px-20 sm:px-2">
                    <div className="flex flex-col w-full">
                        <label htmlFor="Email Address" className="text-[10.5px] font-semibold">Email Address</label>
                        <input 
                        type="text" 
                        placeholder="Email Address" 
                        className="border border-gray-400 py-2 px-2 w-full text-[10.5px] font-semibold rounded-sm" 
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="surname" className="text-[10.5px] font-semibold">PIN</label>
                        <input 
                        type="PIN" 
                        placeholder="PIN" 
                        className="border border-gray-400 text-[10.5px] font-semibold py-3 px-2 w-full rounded-sm" 
                        />
                    </div>
                    
                </div>

                <div className="flex gap-5 px-20 sm:px-2">
                    <div className="flex flex-col w-full">
                        <label htmlFor="Date of Birth" className="text-[10.5px] font-semibold">Date of Birth</label>
                        <input 
                        type="text" 
                        placeholder="01/01/1996" 
                        className="border border-gray-400 py-2 px-2 w-full text-[10.5px] font-semibold rounded-sm" 
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="Gender" className="text-[10.5px] font-semibold">Gender</label>
                        <input 
                        type="text" 
                        placeholder="Gender" 
                        className="border border-gray-400 py-2 px-2 w-full text-[10.5px] font-semibold rounded-sm" 
                        />
                    </div>
                    
                </div>

                <div className="flex gap-2 px-20">
                    <input type="checkbox" className="" />
                    <p className="text-[12px] font-normal">I agree to Carbon <span className="text-[#957fbc] text-[12px] font-semibold"><a href="#">terms and condition</a> </span></p>
                </div>

                <div className=" px-20">
                    <button className=" bg-[#2b007a] w-full py-2 text-sm font-normal rounded-md text-center text-white">Create Account</button>
                </div>

                <div className="px-20">
                    <p className="text-sm font-semibold text-[#202020]">Already have an account?<span className="text-[#60409b] text-sm font-semibold">Log in</span></p>
                </div>   
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default SignUp;
