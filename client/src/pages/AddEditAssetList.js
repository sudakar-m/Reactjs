import React,{useState,useEffect} from "react";
import Nav from "./Nav";
import axios from 'axios';
import { Link,useParams  } from 'react-router-dom';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AddEditAssetList=()=>{
   // const [Status,setStatus]=useState([]);
   
   const [AssetName,setAssetName]=useState([]);
   const [EmployeeNames,setEmployeeNames]=useState([]);
   const initialstate={
    employeeId:"",
    hardwareId:"",
    status:""
}
const [Asset,setAsset]=useState(initialstate);
const{employeeId,hardwareId,status}=Asset;
const status1=[
    {id:1,values:"Active"},
     {id:2,values:"InActive"},    
];
let history = useNavigate();
const handlesubmit=(e)=>{
    if(Id)
    {
      axios.put("http://localhost:5000/api/asset/put/"+Id, 
      Asset
    )
    .then(function (response) {
      console.log(response);
      
      toast.success("AssetList is Updated successfully");
      history("/AssetList");
    })
    .catch(function (error) {
      console.log(error);
    });
   }
else{
    axios.post('http://localhost:5000/api/assetlist/post', 
    Asset).then(function (response) {
    console.log(response);
    
    toast.success("AssetList is added successfully");
    history("/AssetList");
  })
  .catch(function (error) {
    console.log(error);
  });
}
}
const {Id}=useParams();
    console.log(Id);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/EmployeeInfo/get').then(function(response){
           
            setEmployeeNames(response.data);
            console.log(EmployeeNames);
        });
        axios.get('http://localhost:5000/api/get/asset').then(function(response){  
            setAssetName(response.data);
        console.log(AssetName);
        });
        axios.get("http://localhost:5000/api/get/assetdetails/"+Id).then(function (response) {
            console.log(response);
            setAsset({...response.data[0]})
           // toast.success("User is Updated successfully");
           // history("/");
          })
          .catch(function (error) {
            console.log(error);
          });;
     
    },[]);

    const handleinputchange=(e)=>{
const{name,value}=e.target;
setAsset({...Asset,[name]:value})
console.log(Asset);


    }
    return(
<div>
<Nav/>
    <h4 style={{textAlign: "center",color:"blue"}}>{Id?'Update Asset Form':'Add Asset Form'}</h4>
    <div class="container py-5">
    <div class="row">
        <div class="col-md-10 mx-auto">
            <form>
                <div class="form-group row">
                    <div class="col-sm-12">
                        <label for="inputemployeeName">Employee Name</label>
                        <select  class="form-control" id="employeeId" name="employeeId" value={employeeId || ""} onChange={handleinputchange}>
                        <option value='0' > ----Please Select EmployeeName---- </option>
        {EmployeeNames.map((option, index) => (
          
          <option key={index} value={option.Id} >
            {option.EmployeeName}
          </option>
        ))}
                        </select>
                    </div>
                    
                </div>
                <div class="form-group row">
                    <div class="col-sm-12">
                        <label for="inputassetName">Asset Name</label>
                        <select type="text" class="form-control" id="hardwareId" name="hardwareId" value={hardwareId || ""} onChange={handleinputchange}>
                        <option value='0' > ----Please Select AssetID---- </option>
        {AssetName.map((option, index) => (
          
          <option key={index} value={option.hardwareId} >
            {option.assetId}
          </option>
        ))}
         </select>
                    </div>
                   
                </div>
                <div class="form-group row">
                    <div class="col-sm-12">
                        <label for="inputstatus">Status</label>
                        <select type="text" class="form-control" id="status"  name="status" value={status || ""} onChange={handleinputchange}>
                        <option value='0' > ----Please Select status---- </option>
        {status1.map((option, index) => (
          
          <option key={index} value={option.values} >
            {option.values}
          </option>
        ))}
         </select>
                    </div>
                   
                </div>
               
                <button type="button" class="btn btn-primary px-4" onClick={handlesubmit} style={{float:"right"}}>{Id?'Update':'Save'}</button>
                <Link to='/AssetList'><button type="button" class="btn btn-outline-light" style={{float:"right"}}>GoBack </button>
                </Link>
            </form>
        </div>
    </div>
</div>
</div>
    )
}
export default AddEditAssetList;