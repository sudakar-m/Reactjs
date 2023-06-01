import React,{useEffect,useState} from "react";
import Nav from "./Nav";
import axios from 'axios';
import { Link,useParams  } from 'react-router-dom';
const AddEditEmployeeList=()=>{
    const initialstate={
        firstName:"",
        lastName:"",
        gender:"",
        DateOfBirth:"",
        DateOfJoin:"",
        spouseName:"",
        bloodGroups:"",
        maritalStatus:"",
        panCard:"",
        aadharNumber:"",
        permanentAddressLine1:"",
        temporaryAddressLine1:"",
        permanentAddressLine2:"",
        temporaryAddressLine2:"",
        permanentStreetName:"",
        temporaryStreetName:"",
        permanentCity:"",
        temporaryCity:"",
        permanentState:"",
        temporaryState:"",
        permanentPinCode:"",
        temporaryPinCode:"",
        flexCheck:"",
        contactNumber:"",
        ContactEmail:"",
        qualification:"",
        institution:"",
        experience:"",
        contactName:"",
        contactAddressLine1:"",
        contactmobile:"",
        contactAddressLine2:"",
        relationShip:"",
        contactStreetName:"",
        contactCity:"",
        contactEmail:"",
        contactState:"",
        contactPinCode:"",
        currentDepartment:"",
        currentDesignation:"",
        uploadResume:"",
        ProfilePicture:"",
        refferedBy:""
    }
    const [EmployeeList,setEmployeeList]=useState([]);
    const [BloodGroup, setbloodGroup] = useState([]);
    const [martialStatus, setmartialStatus] = useState([]);
    const{firstName,lastName,gender,DateOfBirth,DateOfJoin,spouseName,bloodGroups,maritalStatus,panCard,
        aadharNumber,permanentAddressLine1,temporaryAddressLine1,permanentAddressLine2,temporaryAddressLine2,
        permanentStreetName,temporaryStreetName,permanentCity,temporaryCity,permanentState,temporaryState,
        permanentPinCode,temporaryPinCode,flexCheck,contactNumber,ContactEmail,qualification,institution,
        experience,contactName,contactAddressLine1,contactmobile,contactAddressLine2,relationShip,contactStreetName,
        contactCity,contactEmail,contactState,contactPinCode,currentDepartment,currentDesignation,uploadResume,ProfilePicture,refferedBy}=EmployeeList;
    useEffect(()=>{
        axios.get('http://localhost:5000/api/bloodgroup/get').then(function(response){  
            setbloodGroup(response.data);
        console.log(BloodGroup);
        });
        axios.get('http://localhost:5000/api/martialstatus/get').then(function(response){  
            setmartialStatus(response.data);
        console.log(martialStatus);
        });
    },[]);
    const handleinputchange=(e)=>{
        const{name,value}=e.target;
        setEmployeeList({...EmployeeList,[name]:value});
        console.log(EmployeeList)
    }
    return(
        <div>
             <Nav/>
             <h4 style={{textAlign: "center",color:"blue"}}>Employee Form </h4>
      {/* <h5><b>Personal Information</b></h5> */}
        <div class="container py-5">
    <div class="row">
        <div class="col-md-10 mx-auto">
            <form>
            <h3><b>Personal Information</b></h3>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputFirstname">First Name</label>
                        <input type="text" class="form-control" id="inputFirstname" name="firstName" placeholder="First Name" value={firstName|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputLastname">Last Name</label>
                        <input type="text" class="form-control" id="inputLastname" name="lastName" placeholder="Last Name" value={lastName|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-12">
                        <label for="inputGender">Gender</label>
                     </div>   
                <div class="col-sm-12">         
        <input type="radio" id="customRadioInline1" name="gender" class="custom-control-input" value={gender|| ""} onChange={handleinputchange}/> &nbsp;   
        <label class="custom-control-label" for="customRadioInline1" > MEN </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     
       
        <input type="radio" id="customRadioInline2" name="gender" class="custom-control-input" value={gender|| ""} onChange={handleinputchange}></input>&nbsp;   
        <label class="custom-control-label" for="customRadioInline2"> WOMEN </label> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
       
       
        <input type="radio" id="customRadioInline3" name="gender" class="custom-control-input" value={gender|| ""} onChange={handleinputchange}/>  &nbsp;
        <label class="custom-control-label" for="customRadioInline3"> Transgender </label>  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      
                  
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputDateOfBirth">Date Of Birth</label>
                        <input type="date" class="form-control" id="DateOfBirth" name="DateOfBirth" placeholder="Date Of Birth" value={DateOfBirth|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputDateOfJoin">Date Of Join</label>
                        <input type="date" class="form-control" id="DateOfBirth" name="DateOfJoin" placeholder="Date Of Join" value={DateOfJoin|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputSpouseName">Father/Spouse Name</label>
                        <input type="text" class="form-control" id="spouseName" name="spouseName" placeholder="Father/Spouse Name"  value={spouseName|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputBloodGroup">Blood Group</label>
                        <select type="text" class="form-control" id="bloodGroup" name="bloodGroups" placeholder="Blood Group" value={bloodGroups|| ""} onChange={handleinputchange}>
                        <option value='0' > ----Please Select Blood Group---- </option>
                        {BloodGroup.map((option, index) => (
          
          <option key={index} value={option.bloodGroupId} >
            {option.bloodGroupName}
          </option>
        ))} 
        </select>
                    </div>
                    
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputMaritalStatus">Marital Status</label>
                        <select type="text" class="form-control" id="inputMaritalStatus" name="maritalStatus" placeholder="Marital Status" value={maritalStatus|| ""} onChange={handleinputchange}>
                        <option value='0' > ----Please Select Marital Status---- </option>
                        {martialStatus.map((option, index) => (
          
          <option key={index} value={option.maritalStatusId} >
            {option.maritalType }
          </option>
        ))} 
        </select>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputPANCard">PAN Card</label>
                        <input type="text" class="form-control" id="PANCard" name="panCard" placeholder="PAN Card" value={panCard|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputAadharNumber">Aadhar Number</label>
                        <input type="text" class="form-control" id="inputAadharNumber" name="aadharNumber" placeholder="Aadhar Number" value={aadharNumber|| ""} onChange={handleinputchange}/>
                    </div>
                    </div>
                    <h3><b>Contact Information</b></h3>
                    <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputPermanentAddressLine1">Permanent Address (Address Line 1)</label>
                        <input type="text" class="form-control" id="PermanentAddressLine1" name="permanentAddressLine1" placeholder="Address Line1" value={permanentAddressLine1|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputTemporaryAddress">Temporary Address (Address Line 1)</label>
                        <input type="text" class="form-control" id="inputTemporaryAddress" name="temporaryAddressLine1" placeholder="Address Line1" value={temporaryAddressLine1|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputAddressLine2">Address Line 2</label>
                        <input type="text" class="form-control" id="PermanentAddressLine2" name="permanentAddressLine2" placeholder="Address Line2" value={permanentAddressLine2|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputWebsite">Address Line 2</label>
                        <input type="text" class="form-control" id="TemporaryAddressLine2" name="temporaryAddressLine2" placeholder="Address Line2" value={temporaryAddressLine2|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputStreetName">Street Name</label>
                        <input type="text" class="form-control" id="PermanentStreetName" name="permanentStreetName" placeholder="Street Name" value={permanentStreetName|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputTemporaryStreetName">Street Name</label>
                        <input type="text" class="form-control" id="TemporaryStreetName" name="temporaryStreetName" placeholder="Street Name" value={temporaryStreetName|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="PermanentCity" name="permanentCity" placeholder="City" value={permanentCity|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputTemporaryCity">City</label>
                        <input type="text" class="form-control" id="TemporaryCity" name="temporaryCity" placeholder="City" value={temporaryCity|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputPermanentState">State</label>
                        <input type="text" class="form-control" id="PermanentState" name="permanentState" placeholder="State" value={permanentState|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="TemporaryState">State</label>
                        <input type="text" class="form-control" id="TemporaryState" name="temporaryState" placeholder="State" value={temporaryState|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6"> 
                        <label for="inputPermanentPinCode">Pin Code</label>
                        <input type="text" class="form-control" id="PermanentPinCode" name="permanentPinCode" placeholder="Pin Code" value={permanentPinCode|| ""} onChange={handleinputchange} />
                    </div>
                    <div class="col-sm-6">
                        <label for="inputTemporaryPinCode">Pin Code</label>
                        <input type="text" class="form-control" id="TemporaryPinCode" name="temporaryPinCode" placeholder="Pin Code" value={temporaryPinCode|| ""} onChange={handleinputchange} />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        
                    </div>
                    <div class="col-sm-6 form-check">
                    <input class="form-check-input" type="checkbox"  id="flexCheck" name="flexCheck" value={flexCheck|| ""} onChange={handleinputchange} />&nbsp;
  <label class="form-check-label" for="flexCheckDisabled"> Same as Permanent Address</label>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputContactNumber">Contact Number</label>
                        <input type="text" class="form-control" id="inputContactNumber" name="contactNumber" placeholder="Contact Number" value={contactNumber|| ""} onChange={handleinputchange} />
                    </div>
                    <div class="col-sm-6">
                        <label for="Email">Email</label>
                        <input type="email" class="form-control" id="Email" name="ContactEmail" placeholder="Email" value={ContactEmail|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <h3><b>Education Information</b></h3>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputQualification">Qualification</label>
                        <select type="text" class="form-control" id="Qualification" name="qualification" placeholder="Qualification" value={qualification|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputInstitution">Institution</label>
                        <input type="email" class="form-control" id="Institution" name="institution"  placeholder="Institution" value={institution|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <h3><b>Work Experience</b></h3>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputExperience">Experience</label>
                        <input type="text" class="form-control" id="inputExperience"  name= "experience" placeholder="Experience" value={experience|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        
                    </div>
                </div>
                <h3><b>Emergency Contact Information</b></h3>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputContactNumber">Contact Name</label>
                        <input type="text" class="form-control" id="inputContactName" name="contactName" placeholder="Contact Name" value={contactName|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputContactAddress">Contact Address (Address Line1)</label>
                        <input type="email" class="form-control" id="inputContactAddress" name="contactAddressLine1" placeholder="Address Line1" value={contactAddressLine1|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputContactMobile">Contact Mobile</label>
                        <input type="text" class="form-control" id="inputContactMobile" name="contactmobile" placeholder="Contact Mobile" value={contactmobile|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputAddressLine2"> Address Line2</label>
                        <input type="email" class="form-control" id="AddressLine2" name="contactAddressLine2" placeholder="Address Line2" value={contactAddressLine2|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputRelationShip">Relation Ship</label>
                        <input type="text" class="form-control" id="RelationShip" name="relationShip" placeholder="RelationShip" value={relationShip|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-3">
                        <label for="StreetName"> Street Name</label>
                        <input type="email" class="form-control" id="StreetName" name="contactStreetName" placeholder="Street" value={contactStreetName|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-3">
                        <label for="City"> City</label>
                        <input type="text" class="form-control" id="City" name="contactCity" placeholder="City" value={contactCity|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="ContactEmail">Contact Email</label>
                        <input type="email" class="form-control" id="ContactEmail" name="contactEmail" placeholder="Contact Email" value={contactEmail|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-3">
                        <label for="inputState"> State</label>
                        <input type="email" class="form-control" id="State" name="contactState" placeholder="State" value={contactState|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-3">
                        <label for="inputPinCode"> Pin Code</label>
                        <input type="email" class="form-control" id="PinCode" name="contactPinCode" placeholder="Pin Code" value={contactPinCode|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <h3><b>Office Information</b></h3>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputCurrentDepartment">Current Department</label>
                        <input type="text" class="form-control" id="inputCurrentDepartment" name="currentDepartment" placeholder="Current Department" value={currentDepartment|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputCurrentDesignation">Current Designation</label>
                        <input type="text" class="form-control" id="CurrentDesignation" name="currentDesignation" placeholder="Current Designation" value={currentDesignation|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <h3><b>Resume</b></h3>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputUploadResume">Upload Resume</label>
                        <input type="file" class="form-control" id="inputUploadResume" name="uploadResume" placeholder="Upload Resume" value={uploadResume|| ""} onChange={handleinputchange}/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputProfilePicture">Profile Picture</label>
                        <input type="file" class="form-control" id="inputWebsite" name="ProfilePicture" placeholder="Profile Picture" value={ProfilePicture|| ""} onChange={handleinputchange}/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputRefferedBy">Reffered By</label>
                        <input type="text" class="form-control" id="inputRefferedBy" name="refferedBy" placeholder="Reffered By" value={refferedBy|| ""} onChange={handleinputchange}/>
                    </div>
                    </div>
                <button type="button" class="btn btn-primary px-4" style={{float:"right"}}>Submit</button>
                <Link to='/EmployeeList'><button type="button" class="btn btn-outline-light" style={{float:"right"}}>GoBack </button>
                </Link>
            </form>
        </div>
    </div>
</div>
</div>
    )
}
export default AddEditEmployeeList;