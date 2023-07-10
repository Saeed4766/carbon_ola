import React from "react";

const InternetDash = () => {
  return (
    <div className="bg-[#d6d2e1] flex items-center justify-center w-full h-screen sm:px-1"> 
      <form className="bg-white rounded-md sm:w-full">
        <div className="flex sm:flex-col gap-5 px-5 w-[25rem]  mb-[3rem] pt-2">
          <div className="flex flex-col w-full">
            <label
              htmlFor="intenet provider"
              className="text-[14px] font-semibold"
            >
              Internet Provider
            </label>

            <select
              name="internet provider"
              id=""
              className="border border-gray-400 py-1.5 px-2.5 w-full text-[14px] font-semibold rounded-md"
            >
              <option value="internet provider" className="">
                Internet Provider
              </option>
            </select>
          </div>

          <div className="flex flex-col w-full ">
            <label htmlFor="Amount" className="text-[14px] font-semibold">
              Amount
            </label>

            <select
              name="amount"
              id=""
              className="border border-gray-400 py-1.5 px-2.5 w-full text-[14px] font-semibold rounded-md"
            >
              <option value="amount" className="">
                Amount
              </option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 pb-3">
          <button className=" bg-[#dbd9dd] text-sm font-bold text-[#573693] rounded-[5px] py-1.5 px-5">
            Proceed
          </button>
          <button className="bg-[#573693] text-sm font-bold text-[#dbd9dd] rounded-[5px] py-1.5 px-5">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default InternetDash;
