import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from 'axios';
import { Link,useParams  } from 'react-router-dom';
import dateFormat, { masks } from "dateformat";
const HardWareListDetails=()=>{
    const [HardwareDetails,setHardwareDetails]=useState([]);
    
    const {Id}=useParams();
useEffect(()=>{
    axios.get("http://localhost:5000/api/get/hardwarelistdetails/"+Id).then(function (response) {
        console.log(response);
        setHardwareDetails({...response.data[0]})
       // toast.success("User is Updated successfully");
       // history("/");
      })
      .catch(function (error) {
        console.log(error);
      });;
},[Id])
return(
    <div>
    <Nav/>
    <div class="container" >
    <h2 style={{textAlign: "center"}}>HardwareList Details</h2>
    <div class="panel panel-default" >
      {/* <div class="panel-heading">Panel Heading</div> */}
      <div class="panel-body" style={{border: '1px solid rgba(173, 216, 230)'}}>
      <div class="container-fluid py-5">
    <div class="row">
        <div class="col-md-10 mx-auto">
            
                <div class="form-group row">
                    <div class="col-sm-4">
                        <label for="InputEmployeeName">Employee Name:  </label>
                        <span>  {HardwareDetails.EmployeeName}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">Employee IdCardNo:</label>
                        <span>  {HardwareDetails.IdCardRollNo}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">Asset Id :</label>
                        <span>  {HardwareDetails.assetId}</span>
                    </div>
                    
                </div>

                <div class="form-group row">
                <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">Asset Type :</label>
                        <span>  {HardwareDetails.assetType}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeName">Processor:  </label>
                        <span>  {HardwareDetails.Processor}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">WindowType:</label>
                        <span>  {HardwareDetails.windowType}</span>
                    </div>
                    
                </div>


                <div class="form-group row">
                <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">Ram :</label>
                        <span>  {HardwareDetails.ram}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">StorageType :</label>
                        <span>  {HardwareDetails.storageType}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeName">StorageCapacity:  </label>
                        <span>  {HardwareDetails.storageCapacity}</span>
                    </div>
                    
                </div>

                <div class="form-group row">
                <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">Size:</label>
                        <span>  {HardwareDetails.systemSize}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">Manufacturer :</label>
                        <span>  {HardwareDetails.brand}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">Model :</label>
                        <span>  {HardwareDetails.model}</span>
                    </div>
                    
                </div>

                <div class="form-group row">
                <div class="col-sm-4">
                        <label for="InputEmployeeName">Floor:  </label>
                        <span>  {HardwareDetails.floor}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">Room:</label>
                        <span>  {HardwareDetails.room}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">Status :</label>
                        <span>  {HardwareDetails.status}</span>
                    </div>
                    
                </div>
                <div class="form-group row">
                <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">PurchaseDate :</label>
                        <span>  {dateFormat(HardwareDetails.purchaseDate,"dd-mm-yyyy")}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeName">WarrantyInformation:  </label>
                        <span>  {HardwareDetails.warrantlyInformation}</span>
                    </div>
                    <div class="col-sm-4">
                        <label for="InputEmployeeIdCardNo">OtherNotes:</label>
                        <span>  {HardwareDetails.otherNotes}</span>
                    </div>
                    
                </div>
                </div>
</div>
</div>
<div style={{textAlign: "center"}}><Link to='/HardwareList' ><button class="btn btn-info" type="button" >Go Back</button></Link></div>
      </div>
    </div>
  </div>
  </div>
)
}
export default HardWareListDetails;