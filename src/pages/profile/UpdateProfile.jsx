// import React, { useEffect,useState } from 'react'
// import axios from 'axios';
// import { ToastContainer } from "react-toastify";
// import { Toast, } from 'react-toastify/dist/components';

// const apidata =  "https://carbon-api-test.azurewebsites.net/api/v1/user/profile/update";


// const UpdateProfile = () => {
//     const [profileData, setProfileData] =useState({
//         surname:'',
//         othername:'',
//         email:'',
//         password:'',
//     })

//     const getProfile =(e)=>{
//       setProfileData(e.target.value)
//     }

//     const handleFormSubmit = async (e)=>{
//         try{
//             e.preventDefault()
//             const res =await axios.patch(apidata, profileData)
//             .then(res=>{
//               console.log(res.data)
//             })
//       profileData()
//     }catch(error){
//       console.log(error)
//       Toast("error",error.response.data.message)
//     }

   
//   // useEffect(()=>{
//   //   const update = async() => {
//   //       try{
//   //           const response = await axios(apidata, {
//   //               method: 'PATCH', 
//   //               headers: {
//   //                   'Content-Type': 'application/json;',
//   //                   'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthbWFsaXNsYW00bGlmZUB5YWhvby5jb20iLCJfaWQiOiIwYTI4ZDcxOC0xYTcxLTRkNjEtYWJlMi0yZjJjYzlmYjQ4Y2EiLCJpYXQiOjE2ODk2MDY0MTEsImV4cCI6MTY4OTY5MjgxMX0.k13qKyVU39-50FheWiMdYYLXW0YZfrJlJ5o3SaH1MOQ"
//   //               },
//   //               body :(info),
//   //           })
//   //           console.log('profile updated:, response')
//   //           setProfileData (response.data)
//   //       } catch(error){
//   //           console.log(error)
//   //           Toast("error",error.response.data.message)
//   //       }
//   //   }
//   //   update()
//   // },[])
//   // console.log(profileData)
   
//   return (
//     <div>
      
//       <form onSubmit={handleFormSubmit}>
//         <div className="flex flex-col-2 sm:flex flex-col">
//           <label htmlFor="surname">surname</label>
//           <input
//             type="text"
//             name="surname"
//             placeholder="surname"
//             value={getProfile}
//             // onChange={(e) => setProfileData(e.target.value)}
//             onChange={getProfile}
//           />

//           <label htmlFor="othername">othername</label>
//           <input
//             type="text"
//             name="othername"
//             id="othername"
//             placeholder="other Name"
//             value={getProfile}
//             // onChange={(e) => setProfileData(e.target.value)}
//             onChange={getProfile}
//           />

//           <label htmlFor="email">email</label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             placeholder="Enter Email Address"
//             value={getProfile}
//             // onChange={(e) => setProfileData(e.target)}
//             onChange={getProfile}
//           />

//           <label htmlFor="password">password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="Enter PASSWORD"
//             value={getProfile}
//             // onChange={(e) => setProfileData(e.target.value)}
//             onChange={getProfile}
//           />

//           <button
//             type="submit"
//             className="py-2 px-4  rounded-2xl bg-[#600AFF] text-white"
//           >
//             Update Profile
//           </button>
//         </div>
//         <ToastContainer />
//       </form>
//     </div>
//   )
// }
// }

// export default UpdateProfile
