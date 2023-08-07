import React, { useState } from "react";
import Container from "../../components/sharedComponent/container";
import Logo from "../../assets/Logo.png";
import LoginPana from "../../assets/LoginPana.png";
import { useForm } from "../postcontext/formcontext/Form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] =useState('')
console.log(email,password)

function getEmail (e){
    setEmail(e.target.value)
  }

  function getPassword (e){
    setPassword(e.target.value)
  }

 async function handleSubmit(e){
  try{
    e.preventDefault()
    const res = await axios.post("https://carbon-api-test.azurewebsites.net/api/v1/user/login",{
      email:email,
      password:password
    })
    console.log(res)

    localStorage.setItem("email",JSON.stringify(email))
    localStorage.setItem('token', res.data.token)
  } catch(error){
    console.log(error)
  }
   
  }

  // const { state, dispatch } = useForm();

  // const info = {
  //   email: state.email,
  //   password: state.password,
  // }
  
  
  // function handleSubmit(e){
  //   e.preventDefault()
  //   if(
  //     !info.email ||
  //     !info.password 
  //   ) {
  //     toast.error("Please fill in all fields.")
  //   }

  //   dispatch({ type: "START_FETCH" });

  //   fetch("https://carbon-api-test.azurewebsites.net/api/v1/user/login",{
  //     method: "POST",
  //     body: JSON.stringify(info),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })

  //   .then((response) => response.json())
  //   .then((json)=>{
  //     console.log(json)
  //     dispatch({type: 'DATA_FETCHED', payload: json})
  //   })

  //   .catch((error) => {
  //     console.log(error);
  //     toast.error(error.message)
  //     dispatch({ type: "ERROR" });
      
  //   })
  // }
  //   function getEmail(e){
  //     dispatch({
  //       type: "DATA_FETCHED",
  //       field: "email",
  //       payload: e.target.value,
  //     })
  //   }

  //   function getPassword(e){
  //     dispatch({
  //       type: "DATA_FETCHED",
  //       field:"password",
  //       payload: e.target.value,
  //     })
  //   }

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

              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
                    value={email}
                    onChange={getEmail}
                    className=" rounded-md px-2 w-full text-[11px] py-3 font-light"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="pin"
                    className="text-black font-bold text-[10.2px]"
                  >
                    Enter Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter PASSWORD"
                    value={password}
                    onChange={getPassword}
                    className=" rounded-md px-2 w-full border text-[11px] py-3 font-light"
                  />
                </div>

                <div className="w-full flex items-center mb-4 pl-2">
                  <input type="checkbox" className="w-3 h-3 mr-2 " />
                  <p className="text-sm">Forgot Password?</p>
                </div>

                <button className="bg-[#2b007a] w-full p-2 rounded-md text-white 
                text-sm flex items-center justify-center " >
                  Log in
                </button>

                <p className="text-sm font-semibold ">
                  Don't have an account?{" "}
                  <span className="text-[#2b007a]">Sign up</span>
                </p>
                <ToastContainer />
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
