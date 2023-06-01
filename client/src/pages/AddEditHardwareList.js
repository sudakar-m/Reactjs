import React,{useEffect,useState} from "react";
import Nav from "./Nav";
import axios from 'axios';
import { Link,useParams  } from 'react-router-dom';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
//import dateFormat, { masks } from "dateformat";
//import {format} from 'date-fns';
//import Moment from 'react-moment';
const moment= require('moment') 
//import {format} from 'date-fns';
const AddEditHardwareList=()=>{
const [Hardware,setHardware]=useState([]);
const [Asset,setAsset]=useState([]);
const [Window,setWindow]=useState([]);
const [Manufacturer,setManufacturer]=useState([]);
const initialstate={
    employeeName:"",
    employeeIdcardNo:"",
    assetId:"",
    assetType:"",
    Processor:"",
    windowType:"",
    ram:"",
    storageType:"",
    storageCapacity:"",
    systemSize:"",
    manufacturer:"",
    model:"",
    floor:"",
    room:"",
    status:"",
    purchaseDate:null,
    warrantyInformation:"",
    otherNotes:""

};
const [SystemMaint,setSystemMaint]=useState(initialstate);
let history = useNavigate();
//const [date, setDate] = useState(new Date());
//date=purchaseDate;
//purchaseDate=date;
// const setVariable = (SystemMaint) => {
  
//}
// setVariable(SystemMaint);
// const {InputEmployeeName,InputEmployeeIdCardNo,InputAssetId,InputAssetType,
//     inputProcessor,inputWindowType,inputRam,inputStorageType,inputStorageCapacity,inputSize,
//     inputManufacturer,inputModel,inputFloor,inputRoom,inputStatus,inputPurchaseDate,
//     inputWarrantyInformation,inputOtherNotes}=SystemMaint;

const {employeeName,employeeIdcardNo ,assetId,assetType,
    Processor,windowType,ram,storageType,storageCapacity,systemSize,
    manufacturer,model,floor,room,status,purchaseDate,
    warrantlyInformation,otherNotes}=SystemMaint;
   // initialstate=SystemMaint;
  //  SystemMaint={initialstate};

const handlesubmit=(e)=>{
    console.log('test')
  //  console.log('test'+InputEmployeeName+'-'+InputEmployeeIdCardNo+'-'+InputAssetId+'-'+InputAssetType);
  if(Id)
  {
    axios.put("http://localhost:5000/api/hardware/put/"+Id, 
    SystemMaint
  )
  .then(function (response) {
    console.log(response);
    
    toast.success("HardwareList is Updated successfully");
    history("/HardwareList");
  })
  .catch(function (error) {
    console.log(error);
  });
 }
else{
    axios.post('http://localhost:5000/api/hardware/post', 
    SystemMaint).then(function (response) {
    console.log(response);
    
    toast.success("HardwareList is added successfully");
    history("/HardwareList");
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
            //const employee = res.data;
            setHardware(response.data);
            console.log(Hardware);
        });
        axios.get('http://localhost:5000/api/AssetInfo/get').then(function(response){
            
        setAsset(response.data);
        console.log(Asset);
        });
        axios.get('http://localhost:5000/api/WindowInfo/get').then(function(response){  
        setWindow(response.data);
        console.log(Window);
        });
        axios.get('http://localhost:5000/api/ManufacturerInfo/get').then(function(response){  
            setManufacturer(response.data);
        console.log(Manufacturer);
        });
        axios.get("http://localhost:5000/api/hardwarelist/get/"+Id).then(function (response) {
           // console.log(response.data[0]);
        //     setSystemMaint(response.data[0])
        setSystemMaint({...response.data[0]})
        //    console.log( SystemMaint)
          })
          .catch(function (error) {
           console.log(error);
          });
          //setDate(purchaseDate)
    },[]);
//     var curr = new Date();
// curr.setDate(curr.getDate() + 3);
// var test = curr.toISOString().substring(0,10);
// console.log(test)
//const [date, setDate] = useState("");
    const handleinputchange=(e)=>{
        const{name,value}=e.target;
        setSystemMaint({...SystemMaint,[name]:value});
        console.log(SystemMaint)
    }
    
    // function handleDateChange(event) {
    //     setDate(event.target.value);
    //   }


    return(
        <div className="AddEditHardwareList">
            <Nav/>
<h1 style={{textAlign: "center",color:"blue"}}>{Id?'Update HardwareList Form':'Add HardwareList Form'}</h1>
<div class="container-fluid py-5">
    <div class="row">
        <div class="col-md-10 mx-auto">
            <form>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="InputEmployeeName">Employee Name<span class="required" style={{color:"red"}}>*</span></label>
                        <select  class="form-control" id="employeeName" name="employeeName" value={employeeName|| ""} onChange={handleinputchange}>
                        <option value='0' > ----Please Select EmployeeName---- </option>
        {Hardware.map((option, index) => (
          
          <option key={index} value={option.Id} >
            {option.EmployeeName}
          </option>
        ))}
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <label for="InputEmployeeIdCardNo">Employee IdCardNo<span class="required" style={{color:"red"}}>*</span></label>
                        <select type="text" class="form-control" id="InputEmployeeIdCardNo" name="employeeIdcardNo" value={employeeIdcardNo  || ''} onChange={handleinputchange}>
                        <option value='0' > ----Please Select IDCard---- </option>
                        {Hardware.map((option, index) => (
          
          <option key={index} value={option.Id} >
            {option.IdCardRollNo}
          </option>
        ))} 
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="InputAssetId">Asset Id <span class="required" style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="InputAssetId" name="assetId" value={assetId || ''} placeholder="Asset Id " onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="InputAssetType">Asset Type <span class="required" style={{color:"red"}}>*</span></label>
                        <select type="text" class="form-control" id="InputAssetType" name="assetType" onChange={handleinputchange} value={assetType ||'' } >
                        <option value='0' > ----Please Select AssetType---- </option>
                        {Asset.map((option, index) => (
          
          <option key={index} value={option.assetId} >
            {option.assetType}
          </option>
        ))} 
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputProcessor">Processor<span class="required" style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="inputProcessor" name="Processor" placeholder="Processor" onChange={handleinputchange} value={Processor||''}/>
                    </div>
                    <div class="col-sm-3">
                        <label for="inputWindowType">WindowType<span class="required" style={{color:"red"}}>*</span></label>
                        <select type="text" class="form-control" id="inputWindowType" name="windowType" placeholder="Windows Type" onChange={handleinputchange} value={windowType||''}>
                        <option value='0' > ----Please Select WindowType---- </option>
                        {Window.map((option, index) => (
          
          <option key={index} value={option.windowId} >
            {option.windowType}
          </option>
        ))} 
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <label for="inputRam">Ram<span class="required" style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="inputRam" name="ram" placeholder="Rom" onChange={handleinputchange} value={ram || " "}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputStorageType">StorageType<span class="required" style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="storageType" name="storageType" placeholder="StorageType" onChange={handleinputchange} value={storageType || " "}/>
                    </div>
                    <div class="col-sm-3">
                        <label for="inputStorageCapacity">StorageCapacity<span class="required" style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="inputStorageCapacity" name="storageCapacity" placeholder="StorageCapacity" onChange={handleinputchange} value={storageCapacity || " "}/>
                    </div>
                    <div class="col-sm-3">
                        <label for="inputSize">Size<span class="required" style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="inputSize" name="systemSize" placeholder="system Size" onChange={handleinputchange} value={systemSize || " "}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputManufacturer">Manufacturer<span class="required" style={{color:"red"}}>*</span></label>
                        <select type="text" class="form-control" id="inputManufacturer" name="manufacturer" placeholder="Manufacturer" onChange={handleinputchange} value={manufacturer || " "}> 
                         <option value='0' > ----Please Select BrandType---- </option>
                        {Manufacturer.map((option, index) => (
          
          <option key={index} value={option.manufacturerId} >
            {option.brand}
          </option>
        ))} 
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputModel">Model<span class="required" style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="inputModel" name="model" placeholder="Model" onChange={handleinputchange} value={model || " "}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputFloor">Floor<span class="required" style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="floor" name="floor" placeholder="Floor" onChange={handleinputchange} value={floor || " "}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputRoom">Room<span class="required" style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="inputRoom" name="room" placeholder="Room" onChange={handleinputchange} value={room || " "}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputStatus">Status<span class="required" style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="status" name="status" placeholder="Status" onChange={handleinputchange} value={status || " "}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputPurchaseDate">PurchaseDate<span class="required" style={{color:"red"}}>*</span></label>
                        <input type="date" class="form-control" id="inputPurchaseDate" name="purchaseDate" placeholder="purchaseDate" onChange={handleinputchange} value={purchaseDate?moment(purchaseDate).utcOffset("+05:30").format('YYYY-MM-DD'):""}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputWarrantyInformation">WarrantyInformation<span class="required" style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="warrantlyInformation" name="warrantlyInformation" placeholder="WarrantyInformation" onChange={handleinputchange} value={warrantlyInformation || " "}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputOtherNotes">OtherNotes<span class="required" style={{color:"red"}}>*</span></label>
                        <textarea type="text" class="form-control" id="inputOtherNotes" name="otherNotes" placeholder="OtherNotes" onChange={handleinputchange} value={otherNotes || " "}/>
                    </div>
                </div>
                <div class="col-sm-12">
                 <button type="button" class="btn btn-primary" onClick={handlesubmit} style={{float:"right"}}>{Id?'Update':'Save'}</button>
                 <Link to='/HardwareList'><button type="button" class="btn btn-outline-light" style={{float:"right"}}>GoBack </button>
                </Link>
                </div>
            </form>
        </div>
    </div>
</div>
        </div>
    )
}
export default AddEditHardwareList;