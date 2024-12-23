/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import SignUp from "./pages/SignUp";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUsers } from "./logic/auth/authSignUpAPI";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import NotificationManager from "./components/_common/NotificationManager";
import { addError, addInfo, addSuccess } from "./logic/global/globalSlice";
import { getCurrentFullUnixTime } from "./utils/time";
import Trash from "./components/Trash";
import LrnMore from "./pages/LrnMore";
import Indev from "./pages/Indev";

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.global);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const geolocation = navigator.geolocation;
    console.log(geolocation);
    console.log(navigator);
    dispatch(addInfo(userAgent))
  }, []);

  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth]); 

  return (
    <div className="h-[100vh] flex flex-grow flex-col bg-background text-text">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/lrnmore" element={<LrnMore />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/indev" element={<Indev />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <NotificationManager />
    </div>
  );
}

export default App;
