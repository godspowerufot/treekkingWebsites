 import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";

import LoginPage from "./component/Login";
import SignUp from "./component/signUp";
import Bodypage from "./body";
import TrekFunction from "./component/funtionality";
import Autcontextprovider from "./component/contextapi";
import DisplayPage from "./component/functionality/dispay";
import AboutDetailsPage from "./component/functionality/DetailsPage";
import ProfileCard from "./component/functionality/profile";

function App() {
  return (
    <>
      <Autcontextprovider>
        <Router>
          <Routes>
            <Route path="/" element={<Bodypage />} />
            <Route path="/signIn" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/function" element={<TrekFunction />} />
            <Route path="/displaypage/:location" element={<DisplayPage />} />
            <Route path="/AboutDetailsPage" element={<AboutDetailsPage />} />
            <Route path="/Yourprofile" element={<ProfileCard />} />
          </Routes>
        </Router>
      </Autcontextprovider>
    </>
  );
}

export default App;
