import React,{useEffect,useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Nav=()=>{
return(
    <div>
   <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="https://reactjs.org/" target="_blank" style={{color:"Orange",fontFamily: "fantasy"}}>
                    RadiantSolutions</a>
            </div>
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/EmployeeList">Employee List</a></li>
                <li><a href="/HardwareList">Hardware List</a></li>
                <li><a href="/AssetList">Asset</a></li>
                <li><a href="#">Software List</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">
                    <span class="glyphicon glyphicon-user"></span>
                    Register</a></li>
                <li><a href="/SignUp">
                    <span class="glyphicon glyphicon-log-in"></span>
                    LogOut</a></li>
            </ul>
        </div>
    </nav>
    </div>
)

}
export default Nav;