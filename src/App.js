import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import './App.css';
import Navbar from './components/Navbar';
import React ,{useState}from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [Mode ,setMode]=useState('light');
 const [alert,setAlert]=useState('');
 

 const showAlert=(message,type)=>{
setAlert({
message:message,
type:type}
);

setTimeout(() => {
  setAlert(null);
},1500);
 }
 
 
  const toggleMode=()=>{

if(Mode==='light'){
setMode('dark');
document.body.style.backgroundColor='black';
showAlert("Dark Mode Has been Enabled ",('success').charAt(0).toUpperCase()+('success').slice(1).toLowerCase());
document.title='Textutile -Dark Mode';
setInterval(() => {
  document.title='Textutile is Amazing .';
},2000);
setInterval(() => {
  document.title='Install Textutile Now.';
}, 1500);
}
else{

setMode('light');
document.body.style.backgroundColor="white";
showAlert('Light Mode Has Been Enalbed',('success').charAt(0).toUpperCase()+('success').slice(1).toLowerCase());
document.title='Textutile -Light Mode';
}
  }

  return (
    <>
<Router>
     <Navbar   title='Textutile'  Mode={Mode}   toggleMode={toggleMode}/>
     <Alert  alert={alert}  />
     <div className="container  my-3 ">
     <Routes>
     <Route exact path='/' element={ <TextForm  showAlert={showAlert}  handling={'Enter Text To Analyze Here..'}  Mode={Mode}/>} /> 
     <Route exact path='/about' element={ <About  Mode={Mode}/>} >
     </Route>
  </Routes>
   </div>
   
  
  
   
</Router>
    </>
            );
}

export default App;
