import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link  } from 'react-router-dom';
import axios from 'axios';
import {toast } from 'react-toastify';
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
const HardwareList=()=>{

    const[Hardwaredata,setHardwaredata]=useState([]);
    let history = useNavigate();

const DeleteHardwareList=(Id)=>{
   if(Id){
    if( window.confirm('Are you sure want to delete this record?')) {
      //  axios.delete('http://localhost:5000/api/Hardware/Remove/'+Id);
      //  toast.success("HardwareList is deleted successfully");
       // history("/HardwareList");
       axios.delete('http://localhost:5000/api/Hardware/Remove/'+Id)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);
        if (res.data.message=='success')  {
            toast.success("HardwareList is deleted successfully");
window.location.reload(false);

        }
    
         
      }) 
       
       }
    }     
        
      
       
}
const loadhardware=async()=>{
    axios.get('http://localhost:5000/api/HardwareInfo/get').then(function(response){  
        setHardwaredata(response.data);
    console.log(Hardwaredata);
    });
}

useEffect(()=>{
    loadhardware();
},[]);
$(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,10);
});
    return(
        <div class="container-fluid" className="HardwareList">
            <Nav/>
        {/* <div>Welcome back to hardwarelist</div> */}
        <Link to="/AddEditHardwareList"><button class="btn btn-primary btn-rounded" style={{float: "right"}}>Add HardwareList</button></Link><br></br><br></br>
        <table id="example" class="display" style={{"width" : "100%"}}>
  <thead>
    <tr>
      <th scope="col">ID</th>
       <th scope="col">EmployeeName</th> 
      <th scope="col">EmployeeIdcardNo</th>
      <th scope="col">Asset Type</th>
      <th scope="col">Processor</th>
      <th scope="col">Brand</th>
      <th scope="col">Window Type</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {Hardwaredata.map((item,index)=>{
        return(
            <tr key={item.hardwareId}>
               
                <td>{index+1}</td>
                <td>{item.EmployeeName}</td> 
                <td>{item.IdCardRollNo}</td>
                <td>{item.assetType}</td>
                <td >{item.Processor}</td>
                <td >{item.brand}</td>
                <td >{item.windowType}</td>
                <td>
                
                    <Link to={`/View/HardwareList/${item.hardwareId}`}>
                        <button class="btn btn-light btn-sm">View</button>
                        </Link>&nbsp;
                
                
                <Link to={`/AddEditHardwareList/Update/${item.hardwareId} `} >
                <button class="btn btn-primary btn-sm  ">Update</button>
                </Link>&nbsp;
               
                <button class="btn btn-danger btn-sm " onClick={()=>DeleteHardwareList(item.hardwareId)}>Delete</button>
               
                
                
                
                </td>
               
            </tr>
        )
    })}
    
    
  </tbody>
</table>
        </div>
    )
}
export default HardwareList;