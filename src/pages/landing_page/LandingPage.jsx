import React from "react";
import Navwrapper from "./Navwrapper";
import landingBG from '../../assets/landingBG.png'

const LandingPage = () => {
  return (
    <div >
      <Navwrapper>
        
        <div className="flex  h-[100vh]  ">
         
          <div className=" w-[53%] lg:pt-52 pt-[8rem] sm:px-6 lg:pl-[6.25rem] sm:w-full ">
            <h1 className="text-[#2B007A] w-[50rem] sm:w-[25rem] text-[3.5rem] sm:text-[2.5rem] font-semibold ">
              Digital Banking For All <span className="bg-[#0C7A1A] text-white px-2 rounded-md text-[3.5rem] sm:text-[2.5rem] font-semibold">
              Lifestyles
            </span>
            </h1>
            

            <p className="text-[1.5rem] sm:text-[1.2rem] py-[3rem] w-[40rem] sm:w-[24rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              architecto qui earum inventore quaerat nulla quod eligendi, quidem
              eaque omnis unde similique! Quidem, nobis optio.
            </p>
            <button className="bg-[#2B007A] text-white px-6 py-2 rounded-lg font-semibold text-lg">
              Get Started
            </button>
          </div>

          <div className="w-[47%] bg-landingBG bg-cover bg-no-repeat lg:block sm:hidden ">
            <img src={landingBG} alt="" className="w-full h-screen " />
          </div>
          
        </div>

      </Navwrapper>
    </div>
  );
};

export default LandingPage;
