import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./User";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import ReadUser from "./ReadUser";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/getUser/:id" element={<ReadUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
