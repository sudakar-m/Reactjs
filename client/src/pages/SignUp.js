import React,{useEffect,useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import './SignUp.css';
import Nav from './Nav';
const SignUp=()=>{
   
    return(
        


 
        <div class="container-fluid mt-5" style={{backgroundColor:"red",height: "100vh",overflow:"auto"}}>
        <div class="row d-flex justify-content-center " >
        <div class="col-md-6 mx-auto" style={{float:"none",margin:"auto",marginTop:"140px",backgroundColor:"white"}}>
                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br></br>
                                <input type="text" name="username" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br></br>
                                <input type="text" name="password" id="password" class="form-control"/>
                            </div><br></br>
                            <div class="form-group">
                                {/* <label for="remember-me" class="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br></br> */}
                                <button type="button" id ="submit" name="submit" class="btn btn-info " value="submit" >Submit</button>&nbsp;&nbsp;
                                <Link to='/'><button class="btn btn-info" type="button">Go Back</button></Link>
                            </div>
                            {/* <div id="register-link" class="text-right">
                                <a href="#" class="text-info">Register here</a>
                            </div> */}
                        </form>
                    </div>
                </div>
                </div>
    
      
    )
}
export default SignUp;