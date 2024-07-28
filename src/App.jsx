import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/loginPage";
import Home from "./components/main/Accueil";
import RegisterPage from "./components/auth/registerPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path="/*" element={<Home/>} />
      </Routes>
    </div>
  )
};



export default App;
