import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";

import LoginPage from "./component/Login";
import SignUp from "./component/signUp";
import Bodypage from "./body";
import TrekFunction from "./component/funtionality";
import Autcontextprovider from "./component/contextapi";
import DisplayPage from "./component/functionality/dispay";
import AccountPage from "./component/functionality/Accountpage";
import AboutDetailsPage from "./component/functionality/DetailsPage";

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
            <Route path="/Account" element={<AccountPage />} />
            <Route path="/AboutDetailsPage" element={<AboutDetailsPage />} />
          </Routes>
        </Router>
      </Autcontextprovider>
    </>
  );
}

export default App;
