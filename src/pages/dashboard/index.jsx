import React from "react";
import Main from "../../components/main";
import Container from "../../components/sharedComponent/container";
import LandingPage from "../landing_page/LandingPage";
import SettingBoard from "../settingboard/SettingBoard";
import ComplaintBoard from "../complaint_board/ComplaintBoard";
import VerifyDash from "../verify_dash/VerifyDash";
import SignUp from "../signup/SignUp";
import Login from "../Login/Login";
import AirtimeDash from "../airtime_dash/AirtimeDash";
import CableDash from "../cable_dash/CableDash";
import HotelBookings from "../hotel_bookings/HotelBookings";
import InternetDash from "../internet_dash/InternetDash";




const Dashboard = () => {
  
  return (
    <div>
      <LandingPage/>
      <SettingBoard/>
      <ComplaintBoard/>
      <VerifyDash/>
      <SignUp/>
      <Login/>
      <AirtimeDash/>
      <CableDash/>
      <HotelBookings/>
      <InternetDash/>

      {/* <Container>
        <Main/>
    </Container> */}
    </div>
   
  );
};

export default Dashboard;
