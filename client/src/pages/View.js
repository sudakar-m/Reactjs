import React,{useEffect,useState} from 'react';
import { Link ,useParams} from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
const View=()=>{
    const [user,setUser]=useState({});
    const {Id}=useParams();
useEffect(()=>{
    axios.get("http://localhost:5000/api/get/"+Id).then(function (response) {
        console.log(response);
        setUser({...response.data[0]})
       // toast.success("User is Updated successfully");
       // history("/");
      })
      .catch(function (error) {
        console.log(error);
      });;
},[Id])
return(
    <div>
        {/* <h1>User Contact Details</h1> */}
       <Nav/>
        <div class="container">
  <h2 style={{textAlign: "center"}}>User Contact Details</h2>
  <div class="card" style={{border:"2px solid lightblue"}}>
  <div class="card-body" style={{textAlign: "center"}}><strong >ID: </strong><span>{user.Id}</span></div><br></br>
    <div class="card-body" style={{textAlign: "center"}}><strong>Name: </strong><span>{user.Name}</span></div><br></br>
    <div class="card-body"style={{textAlign: "center"}}><strong>Email: </strong><span>{user.Email}</span></div><br></br>
    <div class="card-body" style={{textAlign: "center"}}><strong>Phone: </strong><span>{user.Phone}</span></div><br></br>
    <div style={{textAlign: "center"}}><Link to='/' ><button class="btn btn-info" type="button" >Go Back</button></Link></div>
  </div>
</div>
    </div>
)
}
export default View;