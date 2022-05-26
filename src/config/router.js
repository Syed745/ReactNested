import React from "react";
import {  BrowserRouter as Router,   Route,   Routes,} from "react-router-dom";
import SignUp from "../screens/Signup";
import Dashboard from "../screens/Dashboard";
import Profile from "../screens/profile";
import Analysis from '../screens/analysis'
import Accounting from "../screens/accounting";
import Messages from "../screens/messages";
import Project from "../screens/project";

export default function RouterApp() {
    return (
        <div>
                <Router>
                <Routes>
                    <Route exact path="/*" element={<SignUp/>}/>
                    <Route path="dashboard/:id" element={<Dashboard/>} />
                    <Route path="profile" element={<Profile/>}  />
                    <Route path="analysis" element={<Analysis/>}  />
                    <Route path="accounting" element={<Accounting/>}  />
                    <Route path="message" element={<Messages/>}  />
                    <Route path="project" element={<Project/>}  />
                </Routes>
           
        </Router>
            </div>
    );
}