import React,{useState,useEffect} from "react";
import { Link  } from 'react-router-dom';
import {toast } from 'react-toastify';
import Nav from './Nav';
import axios from 'axios';
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

const AssetList=()=>{
    const[AssetValueList,setAssetValueList]=useState([]);
    const[StatusList,setStatusList]=useState([]);
    const status1=[
        {id:1,values:"Active"},
         {id:2,values:"InActive"},    
    ];
    useEffect(()=>{
        axios.get('http://localhost:5000/api/AssetList/get').then(function(response){
           
            setAssetValueList(response.data);
            console.log(response.data);
    })
    },[]);
    $(document).ready(function () {
        setTimeout(function(){
        $('#example').DataTable();
         } ,10);
    });
    const handleinputchange=(e)=>{
        const{name,value}=e.target;
        setStatusList(e.target)
        const selectedValue = e.target.value;
        
        console.log(selectedValue)
        //if(selectedValue=="Active"){
            axios.get("http://localhost:5000/api/get/assetdetailsList/"+selectedValue).then(function (response) {
                console.log(response);
               setAssetValueList(response.data)
               
              })
              .catch(function (error) {
                console.log(error);
              });;
        // }else{
        //     axios.get("http://localhost:5000/api/get/assetdetailsList/"+selectedValue).then(function (response) {
        //         console.log(response);
        //         setAssetValueList({...response})
               
        //       })
        //       .catch(function (error) {
        //         console.log(error);
        //       });;
        // }
        // setAssetValueList({...AssetValueList,[name]:value})
        // console.log(AssetValueList);
        
        
            }
    return(
        <div>
            <Nav/>
            <div class="col-sm-2" style={{float:"right"}}>
        <label for="inputStatus" >Status:</label>
                        <select type="text" class="form-control" id="status"  name="status1"  onChange={handleinputchange}>
                        {/* <option value='0' > ----Please Select status---- </option> */}
        {status1.map((option, index) => (
          
          <option key={index} value={option.values} >
            {option.values}
          </option>
        ))}
         </select>
                    </div>
        <h4 style={{textAlign: "center",color:"blue"}}>Asset Table</h4>
        <Link to="/AddEditAssetList"><button class="btn btn-primary btn-rounded" style={{float: "right"}}>Add AssetList</button></Link><br></br><br></br>
       
     

        <table id="example" class="display" style={{"width" : "100%"}}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Asset Id</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {AssetValueList.map((item,index)=>{
        return(
            <tr key={item.assetDetailsId}>
               
                <td>{index+1}</td>
                <td>{item.EmployeeName}</td>
                <td>{item.assetId}</td>
                <td >{item.status}</td>
               <td>
                <Link to={`/Update/AssetList/${item.assetDetailsId} `} >
                <button class="btn btn-primary btn-sm">Update</button>
                </Link>&nbsp;
                
                {/* <button class="btn btn-danger btn-sm" onClick={()=>DeleteContact(item.Id)}>Delete</button> */}
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
export default AssetList;