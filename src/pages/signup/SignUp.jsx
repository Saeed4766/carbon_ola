import React, { useState } from "react";
import signUp_bg from "../../assets/signUp_bg.png";
import Logo from "../../assets/Logo.png";
import Container from "../../components/sharedComponent/container";
import { useForm } from "../postcontext/formcontext/Form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const SignUp = () => {
  const { state, dispatch } = useForm();

  const info = {
    surname: state.surname,
    othernames: state.othernames,
    email: state.email,
    phone: state.phone,
    password: state.password,
    repeat_password: state.repeat_password,
    gender: state.gender,
    dob: state.dob,
  };
 

  function handlesubmit(e) {
    e.preventDefault();
    if (
      !info.surname ||
      !info.othernames ||
      !info.email ||
      !info.phone ||
      !info.password ||
      !info.repeat_password ||
      !info.gender ||
      !info.dob 
    
    ) {
      toast.error("Please fill in all fields.");
          
    }

    if(info.password !== info.repeat_password){
      toast.error('please password and repeat password does not match.')
    }

    dispatch({ type: "START_FETCH" });

    fetch("https://carbon-api-test.azurewebsites.net/api/v1/user/register", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
    
      .then((json) => {
        console.log(json);
        dispatch({ type: "DATA_FETCHED", payload: json });
        // toast.success("Data sent successfully!");
      })

      .catch((error) => {
        console.log(error);
        toast.error(error.message)
        dispatch({ type: "ERROR" });
        
      })
    };


    // try{
    //   e.preventDefault()
    //  const callData = await fetch("https://carbon-api-test.azurewebsites.net/api/v1/user/register", {
    //   method: "POST",
    //   body: JSON.stringify(info),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   const convert =await callData.json

    //   console.log(convert)

    // }catch(err){
    //   console.log(err)
    // }

  function getSurname(e) {
    dispatch({
      type: "DATA_FETCHED",
      field: "surname",
      payload: e.target.value,
    });
  }
  function getOther(e) {
    dispatch({
      type: "DATA_FETCHED",
      field: "othernames",
      payload: e.target.value,
    });
  }

  // function getOthername(e) {
  //   dispatch({
  //     type: "DATA_FETCHED",
  //     field: "othernames",
  //     payload: e.target.value,
  //   });
  // }

  function getEmail(e) {
    dispatch({ type: "DATA_FETCHED", field: "email", payload: e.target.value });
  }

  function getPhone(e) {
    dispatch({ type: "DATA_FETCHED", field: "phone", payload: e.target.value });
  }

  function getPassword(e) {
    dispatch({
      type: "DATA_FETCHED",
      field: "password",
      payload: e.target.value,
    });
  }

  function getRepeatpassword(e) {
    dispatch({
      type: "DATA_FETCHED",
      field: "repeat_password",
      payload: e.target.value,
    });
  }

  function getGender(e) {
    dispatch({
      type: "DATA_FETCHED",
      field: "gender",
      payload: e.target.value,
    });
  }

  function getDOB(e) {
    dispatch({
      type: "DATA_FETCHED",
      field: "dob",
      payload: e.target.value,
    });
  }
  return (
    <div className=" bg-[#d6d2e1] flex items-center justify-center w-full h-screen sm:h-full">
      <div className=" bg-white border-gray-400 ">
        <div className="bg-white mb-7 ">
          <img src={Logo} alt="" className="px-20 sm:px-6" />
        </div>

        <div className="flex px-20 sm:flex sm:flex-col gap-2 sm:px-1 bg-white  ">
          <div className="w-1/2 sm:w-full">
            <img src={signUp_bg} alt="" className="w-[90%] h-[full]" />
          </div>

          <div className="w-1/2 sm:w-full flex flex-col gap-4 mb-20">
            <h2 className="text-2xl font-semibold text-center">
              {" "}
              Sign Up for an Account
            </h2>
            <p className="text-center text-sm font-semibold text-[#303030]">
              Let's get you all set up for Carbon experience
            </p>

            <form className="flex flex-col gap-5" onSubmit={handlesubmit}>
              <div className="flex gap-5 px-20 sm:px-2">
                <div className="flex flex-col w-full">
                  <label htmlFor="surname" className="text-[15px] font-bold">
                    SURNAME
                  </label>
                  <input
                    type="text"
                    placeholder="SURNAME"
                    onChange={getSurname}
                    className="border border-gray-400 py-2 px-2 w-full text-[10.5px] font-semibold rounded-sm"
                  />
                </div>

                <div className="flex flex-col w-full ">
                  <label htmlFor="other name" className="text-[15px] font-bold">
                    OTHER NAME
                  </label>
                  <input
                    type="text"
                    placeholder="OTHER NAME"
                    onChange={getOther}
                    className=" text-[10.5px] font-semibold border border-gray-400 py-2 px-2 w-full rounded-sm"
                  />
                </div>
              </div>

              <div className="flex gap-5 px-20 sm:px-2">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="Email Address"
                    className="text-[15px] font-bold"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="text"
                    placeholder="EMAIL ADDRESS"
                    onChange={getEmail}
                    className="border border-gray-400 py-2 px-2 w-full text-[10.5px] font-semibold rounded-sm"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="phone" className="text-[15px] font-bold">
                    PHONE
                  </label>
                  <input
                    type="text"
                    placeholder="PHONE"
                    onChange={getPhone}
                    className="border border-gray-400 text-[10.5px] font-semibold py-2 px-2 w-full rounded-sm"
                  />
                </div>
              </div>

              <div className="flex gap-5 px-20 sm:px-2">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="Email Address"
                    className="text-[15px] font-bold"
                  >
                    PASSWORD
                  </label>
                  <input
                    type="text"
                    placeholder="PASSWORD"
                    onChange={getPassword}
                    className="border border-gray-400 py-2 px-2 w-full text-[10.5px] font-semibold rounded-sm"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="surname" className="text-[15px] font-bold">
                    REPEAT PASSWORD
                  </label>
                  <input
                    type="text"
                    placeholder="REPEAT PASSWORD"
                    onChange={getRepeatpassword}
                    className="border border-gray-400 text-[10.5px] font-semibold py-2 px-2 w-full rounded-sm"
                  />
                </div>
              </div>

              <div className="flex gap-5 px-20 sm:px-2">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="Date of Birth"
                    className="text-[15px] font-bold"
                  >
                    DATE OF BIRTH
                  </label>
                  <input
                    type="date"
                    placeholder="01/01/1996"
                    onChange={getDOB}
                    className="border border-gray-400 py-2 px-2 w-full text-[10.5px] font-semibold rounded-sm"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label htmlFor="Gender" className="text-[15px] font-bold">
                    GENDER
                  </label>
                  {/* <select
                    type="text"
                    placeholder="GENDER"
                    onChange={getGender}
                    className="border border-gray-400 py-2 px-2 w-full
                    text-[10.5px] font-semibold rounded-sm"
                  >
                    <option value="gender">Male</option>
                    <option value="gender">Female</option>
                  </select> */}
                  <input type="text" className="border border-gray-400 py-2 px-2 w-full
                    text-[10.5px] font-semibold rounded-sm"
                    onChange={getGender}
                    placeholder="GENDER"/>
                </div>
              </div>

              {/* <div className="flex gap-2 px-20">
                <input type="checkbox" className="" />
                <p className="text-[12px] font-normal">
                  I agree to Carbon{" "}
                  <span className="text-[#957fbc] text-[12px] font-semibold">
                    <a href="#">terms and condition</a>{" "}
                  </span>
                </p>
              </div> */}

              <div className=" px-20">
                <button className=" bg-[#2b007a] w-full py-2 text-sm font-normal rounded-md text-center text-white">
                  Create Account
                </button>
              </div>

              <div className="px-20">
                <p className="text-sm font-semibold text-[#202020]">
                  Already have an account?
                  <span className="text-[#60409b] text-sm font-semibold">
                    Log in
                  </span>
                </p>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );

}

export default SignUp



  
