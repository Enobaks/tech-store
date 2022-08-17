import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Signup from "./pages/signUp";
import User from "./pages/user";
import Profile from "./pages/profile";
import Orders from "./pages/orders";
import SavedItems from "./pages/saved_items";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="admin.user" element={<Admin />} />
          <Route path="user" element={<User />}>
            <Route index element={<Profile />} />
            <Route path="order" element={<Orders />} />
            <Route path="saveditem" element={<SavedItems />} />
          </Route>
          <Route path="login.user" element={<Login />} />
          <Route path="signup.user" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
