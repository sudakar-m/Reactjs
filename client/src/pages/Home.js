import React,{useEffect,useState} from 'react';
import { Link  } from 'react-router-dom';

import {toast } from 'react-toastify';

import axios from 'axios';
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import Nav from './Nav';
import './Home.css';
const Home=()=>{
 
  const pathname = window.location.pathname;
  console.log(pathname);
 
  

    const[datas,setdata]=useState([]);
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/api/get");
        setdata(response.data);
        console.log(response.data);
        console.log(response.data.lenght);
        console.log( Object.keys(response.data).length);
        var count=Object.keys(response.data).length;
        const employee=    axios.get('http://localhost:5000/api/EmployeeInfo/get').then(function(test){
     console.log(test.data) ;
       
        var test1=Object.keys(test.data).length;
        for(var i=0;i<count;i++){
          for(var j=0;j<test1;j++){
            var Names=response.data[i].Name;
            var valueofid=test.data[j].Id;
            var valueofName=test.data[j].EmployeeName;
            if(Names==valueofid){
              response.data[i].Name=  test.data[j].EmployeeName;
              //response=  test.data[j].EmployeeName;
            }
            console.log(response.data[i].Name)
           // console.log(Names);
          }
          
          
        }
        setdata(response.data);
      });
      
        console.log(setdata);
    };
   
 

    const DeleteContact=(Id)=>{
      if( window.confirm('Are you sure want to delete this record?')) {
        axios.delete('http://localhost:5000/api/Remove/'+Id);
       // axios.delete('http://localhost:5000/api/Remove',{params: { Id:  Id}});
       loaddata();
        toast.success("Contact deleted successfully");
       
          
        
      }

    }
    useEffect(()=>{
        loaddata();
    },[]);

    $(document).ready(function () {
      setTimeout(function(){
      $('#example').DataTable();
       } ,10);
  });

return(
  
    <div className="Home">
      <Nav/>
      <h4 style={{textAlign: "center",color:"blue"}}>Contact User Table</h4>
        <Link to="/AddEditContact"><button class="btn btn-primary" style={{float:"right"}}> AddContact</button></Link><br></br><br></br>
        <table id="example" class="display" style={{"width" : "100%"}}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {datas.map((item,index)=>{
        return(
            <tr key={item.Id}>
               
                <td>{index+1}</td>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td >{item.Phone}</td>
                <td><Link to={`/View/${item.Id}`}><button class="btn btn-light btn-sm">View</button>
                </Link>&nbsp;
                <Link to={`/Update/${item.Id} `} >
                <button class="btn btn-primary btn-sm">Update</button>
                </Link>&nbsp;
                
                <button class="btn btn-danger btn-sm" onClick={()=>DeleteContact(item.Id)}>Delete</button>
                {/* <Link to={'/Delete/${item.id}'}>
                </Link> */}
                </td>
            </tr>
        )
    })}
    
    
  </tbody>
</table>
    </div>
)
}
export default Home;