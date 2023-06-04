import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import About from './Components/About';
import  {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState("light");

// const removeBodyClasses = ()=>{
//   document.body.classList.remove("bg-light")
//   document.body.classList.remove("bg-dark")
//   document.body.classList.remove("bg-success")
//   document.body.classList.remove("bg-danger")
// }

  // const toggleMode = (cls)=>{
  //   removeBodyClasses();
  //   console.log(cls);
  //   document.body.classList.add("bg-"+cls)
  //   if (mode=== "light") {
  //     setmode("dark");
  //     document.body.style.backgroundColor = "grey";
  //   }

  //   else{
  //     setmode("light");
  //     document.body.style.backgroundColor = "white";
  //   }
  // }

  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  

  const toggleMode = ()=>{
    
    if (mode=== "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      // showAlert();
      showAlert("Dark mode has been enabled" , "success");
    }

    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled" , "success");
      // showAlert();
    }
  }
  
  // const showAlert = () => {
  //   return (
  //     <div>
  //       <Alert message="This is a success message!" type="success" />
  //       <Alert message="This is a warning message!" type="warning" />
  //       <Alert message="This is an error message!" type="danger" />
  //     </div>
  //   );
  // };
  

  return (
    <>
  <Router>
    <Navbar title = "textutils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className='container my-3'>

      <Routes>
     <Route  path = "about" element= {<About mode = {mode}/>}/> 
      </Routes>

      <Routes>
      <Route  path = "/" element={ <TextForm showAlert={showAlert} heading = "Enter your analyze" mode = {mode}/> }/>
      </Routes>
    </div>
    </Router>

     


    </>
  );
}

export default App;
