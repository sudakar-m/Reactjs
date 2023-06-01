import React,{useEffect,useState} from 'react';
import { Link  } from 'react-router-dom';
// import { format } from 'date-fns';
import dateFormat, { masks } from "dateformat";
import {toast } from 'react-toastify';
import Nav from './Nav';
import axios from 'axios';
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
const EmployeeList=()=>{
    const[EmployeeList,setEmployeeList]=useState([]);

useEffect(()=>{
 axios.get('http://localhost:5000/api/EmployeeInfo/get').then(function(response){
        //const employee = res.data;
        setEmployeeList(response.data);
        console.log(response.data);
})
},[]);
$(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable();
     } ,10);
});
return(
    <div className='EmployeeList'>
    <Nav/>
    <h4 style={{textAlign: "center",color:"blue"}}>EmployeeList Table</h4>
    <Link to="/AddEditEmployeeList"><button class="btn btn-primary btn-rounded" style={{float: "right"}}>Add EmployeeList</button></Link><br></br><br></br>
    <table id="example" class="display" style={{"width" : "100%"}}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Id CardNo</th>
      <th scope="col">DOB</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {EmployeeList.map((item,index)=>{
        return(
            <tr key={item.Id}>
               
                <td>{index+1}</td>
                <td>{item.EmployeeName}</td>
                <td>{item.IdCardRollNo}</td>
                <td >{dateFormat(item.DOB, "dd-mm-yyyy")}</td>
                <td><Link to={`/View/EmployeeList/${item.Id}`}><button class="btn btn-light btn-sm">View</button>
                </Link>&nbsp;
                <Link to={`/Update/EmployeeList/${item.Id} `} >
                <button class="btn btn-primary btn-sm">Update</button>
                </Link>&nbsp;
                
                <button class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>
        )
    })}
    
    
  </tbody>
</table>
    </div>
)
}
export default EmployeeList