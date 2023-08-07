import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetProfiles = () => {

    const [get,setGet] = useState({})



    useEffect(()=>{
        return async ()=> {

            try{
                const token =localStorage.getItem('token')
                const response = await axios("https://carbon-api-test.azurewebsites.net/api/v1/user/profile",{
                    method: 'GET',
                    headers: {
                         'Content-Type': 'application/json;',
                         'Authorization': `Bearer ${token}`
                    },
                    
                  })
                  console.log("respnse", response)
                  const results =setGet(response.data.data)
            }
            catch(e){
                console.log(e)
            }
        }
    },[])

  return (
    <div>

        <p>{get.email}</p>
        <p>{get.othernames}</p>
        <p>{get.surname}</p>
        <p>{get.dob}</p>
        <p>{get.gender}</p>
        <p>{get.phone}</p>
        <p>{get.marital_status}</p>

        
       
    </div>
  )
}

export default GetProfiles
