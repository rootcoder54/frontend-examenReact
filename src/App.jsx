import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/loginPage";
import Home from "./components/main/Accueil";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/auth/login' element={<LoginPage/>} />
        <Route path="/*" element={<Home/>} />
      </Routes>
    </div>
  )
};



export default App;
