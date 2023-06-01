import logo from './logo.svg';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
// import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit'
import View from './pages/View';
import Nav from './pages/Nav';
import $ from 'jquery'; 
import SignUp from './pages/SignUp';
import EmployeeList from './pages/EmployeeList';
import HardwareList from './pages/HardwareList';
import AddEditHardwareList from './pages/AddEditHardwareList'
import HardWareListDetails from './pages/HardwareListDetails';
import AddEditEmployeeList from './pages/AddEditEmployeeList';
import AssetList from './pages/AssetList';
import AddEditAssetList from './pages/AddEditAssetList';

function App() {
 
  return (
    <Router>
   

      {/* <h1>Welcome to ReactJS</h1> */}
<ToastContainer position='top-center'/>
      
    <Routes>
    {/* <Route exact path='/Nav' element={<Nav/>}/> */}
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/AddEditContact'  element={<AddEdit/>}/> 
      <Route exact path='/Update/:Id' element={<AddEdit/>}/> 
      <Route exact path='/View/:Id' element={<View/>}/> 
      <Route exact path='/SignUp' element={<SignUp/>} /> 
      <Route exact path='/EmployeeList' element={<EmployeeList/>} /> 
      <Route exact path='/HardwareList' element={<HardwareList/>} /> 
      <Route exact path='/AddEditHardwareList' element={<AddEditHardwareList/>} /> 
      <Route exact path='/AddEditHardwareList/Update/:Id' element={<AddEditHardwareList/>} /> 
      <Route exact path='/View/HardwareList/:Id' element={<HardWareListDetails/>}/> 
      <Route exact path='/AddEditEmployeeList' element={<AddEditEmployeeList/>} /> 
      <Route exact path='/AssetList' element={<AssetList/>} /> 
      <Route exact path='/AddEditAssetList' element={<AddEditAssetList/>} /> 
      <Route exact path='/Update/AssetList/:Id' element={<AddEditAssetList/>}/> 
    </Routes>
   
    </Router>
  );
}

export default App;
