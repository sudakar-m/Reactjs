import React,{useEffect,useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Select from 'react-select';
import { data } from 'jquery';

const AddEdit=()=>{
    const initialstate={
        Name:"",
        Email:"",
        Phone:""
  
    }
    const [employee,setEmployee] = useState([]);
    const pathname = window.location.pathname ;
    console.log(pathname);
    let history = useNavigate();
const [user,setUser]=useState(initialstate);
const {Name,Email,Phone}=user;

const handlesubmit=(e)=>{
    //e.preventdefault();
    console.log(Name+'_'+Email+'-'+Phone);
    if ((Name=='0' || Name==undefined) ||!Email||!Phone){
    
      
toast.error("Please enter the each input field;")
// if(){
//   toast.error("Please enter the each input field;")
//       }
    }else{
        //console.log('fgfg');
        if(Id){
            axios.put("http://localhost:5000/api/put/"+Id, 
            user
          )
          .then(function (response) {
            console.log(response);
            
            toast.success("User is Updated successfully");
            history("/");
          })
          .catch(function (error) {
            console.log(error);
          });
        }
       else{
        axios.post('http://localhost:5000/api/post', 
            user
          )
          .then(function (response) {
            console.log(response);
            
            toast.success("User is added successfully");
            history("/");
          })
          .catch(function (error) {
            console.log(error);
          });
          //setTimeout(()=>history.pushState('/'),500);
       
}
}
}
const handleinputchange=(e)=>{
    const{name,value}=e.target;
    setUser({...user,[name]:value});
    console.log(user)
}

const {Id}=useParams();


     

	//  .then(user => this.setState({ setUser }))
	//  .catch(err => console.log(err))
useEffect(()=>{
    axios.get("http://localhost:5000/api/get/"+Id).then(function (response) {
        console.log(response);
        setUser({...response.data[0]})
        console.log(setUser({...response.data[0]}));
       // toast.success("User is Updated successfully");
       // history("/");
      })
      .catch(function (error) {
        console.log(error);
      });;
      axios.get('http://localhost:5000/api/EmployeeInfo/get').then(function(response){
  //const employee = res.data;
  setEmployee(response.data);
  console.log(employee);
  //this.setState({ Name });
});
},[Id])



const Countries = [
  { label: "Albania", value: 355 },
  { label: "Argentina", value: 54 },
  { label: "Austria", value: 43 },
  { label: "Cocos Islands", value: 61 },
  { label: "Kuwait", value: 965 },
  { label: "Sweden", value: 46 },
  { label: "Venezuela", value: 58 }
];

return(
<div>
{/* <h2>{Id?'Contact EditForm':'Contact AddForm'}</h2>
    <form style={{margin:"auto",padding:"15px",maxWidth:"400px",alignContent:"center"}} 
   >
        <label htmlFor='name'>Name</label>
        <input type="text" id="Name" name="Name" placeholder='Your Name....' value={Name || ''} onChange={handleinputchange}/>
        <label htmlFor='Email'>Email</label>
        <input type="email" id="Email" name="Email" placeholder='Your EmailID....' value={Email || ''} onChange={handleinputchange}/>
        <label htmlFor='Number'>Phone</label>
        <input type="number" id="Phone" name="Phone" placeholder='Your Phone....' value={Phone || ''} onChange={handleinputchange}/>
        <button type="button" onClick={handlesubmit} >{Id?'Update':'Save'}</button>
        <Link to='/'><button>Go Back</button>
                </Link>
        
    </form> */}
    <Nav/>
    <div class="container">
      
  <h2 style={{textAlign: "center",color:"blue"}}>{Id?'Contact EditForm':'Contact AddForm'}</h2>
  <form>
    <div class="form-group">
  
<label>
            Name: 
           </label>
          <select  class="form-control" id="Name" name="Name" value={Name ||''} onChange={handleinputchange}>
          <option value='0' > ----Please Select---- </option>
        {employee.map((option, index) => (
          
          <option key={index} value={option.Id} selected>
            {option.EmployeeName}
          </option>
        ))}
      </select>
     
       
     
      
    </div>
    <div class="form-group">
      <label htmlFor='Email'>Email:</label>
      <input class="form-control" type="email" id="Email" name="Email" placeholder='Your EmailID....' value={Email || ''} onChange={handleinputchange}/>
    </div>
    <div class="form-group">
      <label htmlFor='Phone'>Phone:</label>
      <input class="form-control" type="number" id="Phone" name="Phone" placeholder='Your Phone....' value={Phone || ''} onChange={handleinputchange}/>
    </div>
    {/* <div className="form-group">
    <label htmlFor='Phone'>Country:</label>
            <Select options={Countries} />
          </div> */}
    <button type="button" class="btn btn-primary" onClick={handlesubmit} >{Id?'Update':'Save'}</button>&nbsp;&nbsp;
    <Link to='/'><button class="btn btn-info" type="button">Go Back</button></Link>
                
  </form>
</div>
</div>

)
}
export default AddEdit;