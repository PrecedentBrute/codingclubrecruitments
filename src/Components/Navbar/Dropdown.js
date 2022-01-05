import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';
import axios from 'axios';

const Dropdown = (props) => {

  const logout = () => {

    if (props.loggedIn && props.person!==null) {
      var config = {
        method: 'get',
        url: 'https://api.cc-recruitments.tech/user-api/LogoutView',
        withCredentials: true
      };


      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    window.alert("Logged out");
    props.toggleLoggedIn(false);
    props.toggleWantsIn(false);
    //code to logout
  }

  return (
    <div
      className={
        props.isOpen
          ? 'grid grid-rows-4 text-center items-center bgdropdown text-white drop'
          : 'hidden text-white drop'
      }
      onClick={props.toggle}
    >
      <Link to='/' className='p-4'>
        Home
      </Link>
      {/* <Link to='/projects' className='p-4'>
        Our Projects
      </Link> */}
      <Link to='/test' className='p-4'>
        Test
      </Link>
      <Link to='/preferences' className='p-4'>
        Preferences
      </Link>
      {!props.loggedIn ? <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/userinfo.profile+https%3A//www.googleapis.com/auth/userinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=https%3A//api.cc-recruitments.tech/rest-auth/google/callback/&client_id=754009890523-f8r6n04j7k09grmf1auf8c872a7j1nbm.apps.googleusercontent.com&hd=pilani.bits-pilani.ac.in" className='p-4'>
        Login
      </a> : <Link to='/' onClick={logout} className='p-4'> Logout </Link>}
      
    </div>
  );
};

export default Dropdown;
