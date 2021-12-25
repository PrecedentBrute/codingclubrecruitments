import React from 'react';
import Home from "./Home";
import Recruitment from './Recruitment/Recruitment';
import Login from '../Components/Login/Login';
import OurProjects from './OurProjects/Ourprojects';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Dropdown from '../Components/Navbar/Dropdown';
import Navbar from '../Components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import RegForm from '../Components/RegForm/RegForm';
import Slide from 'react-reveal/Slide';

const Main = () => {
   
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

    return (
        <div>
        <BrowserRouter>       
        
        <Slide top>
        <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
          </Slide>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={RegForm} />
          <Route path="/projects" component={OurProjects} />
          <Route path="/recruitments" component={Recruitment} />
        </Switch>
      
      
        </BrowserRouter>
        </div>
    )
}

export default Main;
