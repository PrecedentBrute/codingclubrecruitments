import React from 'react';
import Home from "./Home";
import Recruitment from './Recruitment/Recruitment';
import OurProjects from './OurProjects/Ourprojects';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Dropdown from '../Components/Navbar/Dropdown';
import Navbar from '../Components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import RegForm from '../Components/RegForm/RegForm';
import Slide from 'react-reveal/Slide';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {

  const loggedInMessage = (name) => toast.success(`Welcome ${name}!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

  //login state

  const [person, setPerson] = useState(null);

  const [loggedIn, setLoggedIn] = useState(false);

  const [wantsIn, setWantsIn] = useState(true);

  const [preferences, setPreferences] = useState(null);

  const [testStarted, setTestStarted] = useState(false);

  const toggleTestStarted = () => {
    setTestStarted(true);
  }
  
  const toggleLoggedIn = (val) => {
    setLoggedIn(val);
    if (val === false) {
      setPerson(null);
    }
  }

  const toggleWantsIn = (val) => {
    setWantsIn(val);
  }

  const config = {
        url: "https://api.cc-recruitments.tech/user-api/getCSRF",
        method: "get",
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    }

  useEffect(() => {

    if (wantsIn) {
      axios(config).then(res => {

        console.log(res);
        
        
        if (res.status === 200) {
          const cookies = new Cookies();
          const profile = {
            email: res.data.email,
            name: res.data.name,
            csrf: cookies.get('csrftoken'),
            testSubmitted: res.data.exam_given,
            time: res.data.time
          }
          setPerson(profile);
          setLoggedIn(true);
          loggedInMessage(res.data.name);
  
      }
    }).catch(err => {
      console.log(err)
    });
      
    }
    
  }, []);
  //navbar state
   
  useEffect(() => { 
    if (person !== null) {
      var configtwo = {
              method: 'get',
              url: 'https://api.cc-recruitments.tech/user-api/CandidateProfile/',
              headers: { 
                'content-type': 'application/json',
                'X-CSRFToken': person.csrf
              },
              withCredentials: true
              };
              
            axios(configtwo)
              .then( response => {
                if (response.status === 200) {
                  var customer = {
                    pr1: response.data.pr1,
                    pr2: response.data.pr2,
                    pr3: response.data.pr3,
                    pr4: response.data.pr4,
                    pr5: response.data.pr5,
                    pr6: response.data.pr6,
                    pr7: response.data.pr7,
                    github: response.data.github,
                    branch: response.data.bits_id.substring(4, 6),
                    status: response.data.bits_id.substring(6, 8),
                    id: response.data.bits_id.substring(8, 12),
                  }
                  setPreferences(customer);
                }
              }).catch(function (error) {
              console.log(error);
            });
    }
  }, [person]);

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
        <>
        <BrowserRouter>       
        
        <Slide top>
            <Navbar toggle={toggle} loggedIn={loggedIn} toggleLoggedIn={toggleLoggedIn} person={person} toggleWantsIn={toggleWantsIn}/>
            <Dropdown isOpen={isOpen} toggle={toggle} loggedIn={loggedIn} toggleLoggedIn={toggleLoggedIn} person={person} toggleWantsIn={toggleWantsIn} />    
          </Slide>
          <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        <Switch>
          <Route exact path="/" component={Home} />
            <Route path="/preferences" render={() => <RegForm loggedIn={loggedIn} person={person} preferences={preferences}/>} />
          <Route path="/projects" component={OurProjects} />
          <Route path="/test" render={() => <Recruitment loggedIn = {loggedIn} person={person} toggleStarted={toggleTestStarted} testStarted={testStarted} />} />
        </Switch>
      
      
        </BrowserRouter>
        </>
    )
}

export default Main;
