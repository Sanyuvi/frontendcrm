import "./App.css";
import React from "react";
import UsersList from "./Components/Users/usersList";
import AddUsers from "./Components/Users/addUsers";
import EditUser from "./Components/Users/editUsers";
import { Routes, Route } from "react-router-dom";
import NoPage from "./Pages/NoPage.js";
import LoginPage from "./Pages/login";
import EditLead from "./Components/Leads/editLeads";
import AddLeads from "./Components/Leads/addLeads";
import LeadsList from "./Components/Leads/leadsList";
import AddRequest from "./Components/ServiceRequest/addRqst";
import EditRequest from "./Components/ServiceRequest/editRqst";
import RequestList from "./Components/ServiceRequest/rqstList";
import HomePage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users/add" element={<AddUsers />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/users/all" element={<UsersList />} />
        <Route path="/leads/add" element={<AddLeads />} />
        <Route path="/leads/edit/:id" element={<EditLead />} />
        <Route path="/leads/all" element={<LeadsList />} />
        <Route path="/request/add" element={<AddRequest />} />
        <Route path="/request/edit/:id" element={<EditRequest />} />
        <Route path="/request/all" element={<RequestList />} />
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </div>
  );
}
export default App;

//
