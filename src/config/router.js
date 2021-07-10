import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Container/Home";
import AboutUs from "../Container/Aboutus";
import {Form1,Form2} from "../Container/Form";
import Services from "../Container/Services";

class AppRouter extends Component{
    render(){
        return(
            <Router>
                <Route exact path= "/" component={Home} />
                <Route exact path= "/Aboutus" component={AboutUs} />
                <Route exact path= "/Form" component={Form1} />
                <Route exact path= "/Form" component={Form2} />
                <Route exact path= "/Services" component={Services} />
            </Router>
        )
    }
}

export default AppRouter;