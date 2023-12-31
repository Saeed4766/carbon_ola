import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Sharednav from "../landing_page/Sharednav";
import { useForm } from "../postcontext/formcontext/Form";
import axios from "axios";

const VerifyDash = () => {
  const {state}= useForm()
  const [otp, setOtp] = useState("");
  const email = state.email
  function sendOtp(){
    axios.patch(`https://carbon-api-test.azurewebsites.net/api/v1/user/verify/${otp}/${email}`
    ).then((response)=>{
      console.log(response.data)
    }).catch((err)=>{console.log(err)})
  }

  

  return (
    <Sharednav>
      <div className="bg-otpBg bg-cover flex items-center justify-center bg-no-repeat h-screen w-full">
        <div className="flex items-center justify-center my-20 flex-col">
          <div className="mb-3">
            <h2 className="text-center mb-5 text-2xl font-bold">
              Verify E-mail
            </h2>
            <p className="mb-3 text-base font-normal">
              Please enter the 6-digit OTP sent to JohnDoe@email.com
            </p>
          </div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              width: "2rem",
              height: "2rem",
              border: "1px solid gray",
            }}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
          <button type="submit" onClick={sendOtp}
          className="mt-2 bg-[#2B007A] text-white px-8 py-2 rounded-lg font-semibold text-lg">
            Verify E-mail
          </button>
        </div>
      </div>
      </Sharednav>
  );
};

export default VerifyDash;
