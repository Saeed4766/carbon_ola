import React, {useState}from 'react'
import { ToastContainer } from "react-toastify";
import axios from 'axios';



const Update = () => {
 
    const[profileData, setProfileData] = useState(null)

    const [surname, setSurname] =useState('')
    const [othername, setOthername] =useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')

    const info = {surname,othername,email,password} 
    

    const getSurname = (e)=>{
        setSurname(e.target.value)
    }

    const getOthername = (e)=>{
      setOthername(e.target.value)
  }

  const getEmail = (e)=>{
    setEmail(e.target.value)
}

const getPassword = (e)=>{
  setPassword(e.target.value)
}

    const handleFormSubmit = async (e)=>{

      const token =localStorage.getItem('token')
      try{
        e.preventDefault()
        const response =await axios("https://carbon-api-test.azurewebsites.net/api/v1/user/profile/update",{
          method: 'PATCH',
          headers: {
               'Content-Type': 'application/json;',
               'Authorization': `Bearer ${token}`
          },
          body: {
            surname,
            othername,
            email,
            password,
          }
          ,
        })
        console.log('profile updated:', response)
        setProfileData(response)
        
      }catch(error){
        console.log(error)
    }
  }

  return (
    <div>
      <div className="flex justify-center ">

      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col-2 sm:flex flex-col">
          <label htmlFor="surname">surname</label>
          <input
            type="text"
            name="surname"
            placeholder="surname"
            value={surname}
            onChange={getSurname}
           
          />

          <label htmlFor="othername">othername</label>
          <input
            type="text"
            name="othername"
            id="othername"
            placeholder="other Name"
            value={othername}
            onChange={getOthername}
           
          />

          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={getEmail}
            
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter PASSWORD"
            value={password}
            onChange={getPassword}
            
          />

          <button
            type="submit"
            className="bg-[#2b007a] w-full p-2 rounded-md text-white 
            text-sm flex items-center justify-center"
          >
            Update Profile
          </button>
        </div>
        <ToastContainer/>
      </form>
      </div>
     
    </div>
  )
}

export default Update
