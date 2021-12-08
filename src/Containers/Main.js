import React from 'react';
import Home from "./Home";
import Recruitment from './Recruitment/Recruitment';
import Login from '../Components/Login/Login';
import Navbar from "../Components/Navbar/Navbar";
import OurProjects from './OurProjects/Ourprojects';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

 const Main = () => {
    return (
        <div>
        <BrowserRouter>       
        <div className= "text-white">
        {/*<Navbar />*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/projects" component={OurProjects} />
          <Route path="/recruitments" component={Recruitment} />
        </Switch>
      </div>
      
        </BrowserRouter>
        </div>
    )
}

export default Main;
