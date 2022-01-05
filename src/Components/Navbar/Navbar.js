import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = (props) => {

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
    <nav
      className='flex justify-between items-center h-16 topbarr text-white relative shadow-sm'
      role='navigation'
    >
      <Link to='/' className='flex pl-8'>
        <img width="50" height="50" src="/assets/logo.svg" className="" alt="logo" />
        <p className="mt-0 ml-3 headline">CODING CLUB</p>
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={props.toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block  hidden'>
        <Link to='/' className='p-4'>
        Home
      </Link>
      <Link to='/projects' className='p-4'>
        Our Projects
      </Link>
      <Link to='/test' className='p-4'>
        Recruitment Test
      </Link>
      {!props.loggedIn ? <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/userinfo.profile+https%3A//www.googleapis.com/auth/userinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=https%3A//api.cc-recruitments.tech/rest-auth/google/callback/&client_id=754009890523-f8r6n04j7k09grmf1auf8c872a7j1nbm.apps.googleusercontent.com&hd=pilani.bits-pilani.ac.in" className='p-4'>
        Login
      </a> : <div><Link to='/preferences' className='p-4'>
        Profile
      </Link> <Link to='/' onClick={logout} className='p-4'> Logout </Link></div>}
      
      </div>
    </nav>
  );
};

export default Navbar;
