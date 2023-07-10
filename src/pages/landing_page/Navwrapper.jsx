import React from 'react'
import Navbar from './Navbar'


const Navwrapper = ({children}) => {
  return (
    <div >
      <Navbar/>
      {children}
    
    </div>
  )
}

export default Navwrapper
    
