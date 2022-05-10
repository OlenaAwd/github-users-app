import React from "react";
import { Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";


function App(props) {

  return (
    <>
      <Appbar />
      <Routes>
        <Route index element={<Users />} />
        <Route path="user/:username" element={<UserDetails />} />
      </Routes>

    </>
  );
}

export default App;

