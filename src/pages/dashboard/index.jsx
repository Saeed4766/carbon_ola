import React from "react";
import Main from "../../components/main";
import Container from "../../components/sharedComponent/container";
import LandingPage from "../landing_page/LandingPage";
import SettingBoard from "../settingboard/SettingBoard";




const Dashboard = () => {
  
  return (
    <div>
      {/* <LandingPage/> */}
      <SettingBoard/>

      {/* <Container>
        <Main/>
    </Container> */}
    </div>
   
  );
};

export default Dashboard;
