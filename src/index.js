import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import App from './App';
import Dashboard from './pages/dashboard';
import Login from './pages/Login/Login';
import SignUp from './pages/signup/SignUp';
import SettingBoard from './pages/settingboard/SettingBoard';
import UtilityDash from './pages/utility_dash/UtilityDash';
import AirtimeDash from './pages/airtime_dash/AirtimeDash';
import CableDash from './pages/cable_dash/CableDash';
import LandingPage from './pages/landing_page/LandingPage';
import VerifyDash from './pages/verify_dash/VerifyDash';
import InternetDash from './pages/internet_dash/InternetDash';
import HotelBookings from './pages/hotel_bookings/HotelBookings';
import ComplaintBoard from './pages/complaint_board/ComplaintBoard';




// const router = createBrowserRouter([
//   {
//     path: "/",
//     // element: 
//   },
//   {
//     path: "/activity",
//     element: <Activity/>,
//   },
//   {
//     path: "/bill",
//     element: <Bills/>,
//   },
//   {
//     path: "/transactions",
//     element: <Transactions/>,
//   },
//   {
//     path: "/complaints",
//     element: <Complaints/>,
//   },
//   {
//     path: "/settings",
//     element: <Settings/>,
//   },
//   {
//     path: "/logout",
//     element: <Dashboard/>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard/>
  </React.StrictMode>
);

reportWebVitals();
