import { Component } from 'react';
import Home from "./Container/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Contact/navbar";
import {Form1} from "./Container/Form";
import {Form2} from "./Container/Form";
import AboutUs from "./Container/Aboutus";
import Services from "./Container/Services";
import AppRouter from "./config/router"


class App extends Component{
  render(){
    return(
      <div>
        <AppRouter /> 
    
        {/* <Home /> */}

        {/* <Form1 />
        <Form2 /> */}

        {/* <AboutUs /> */}

        {/* <Services /> */}



      </div>
    )
  }
}

export default App;
