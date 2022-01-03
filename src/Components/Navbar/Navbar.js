import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='flex justify-between items-center h-16 topbarr text-white relative shadow-sm'
      role='navigation'
    >
      <Link to='/' className='pl-8'>
        <img width="50" height = "50" src="/assets/logo.svg" className="" alt="logo"/>
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
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
        Projects
      </Link>
      <Link to='/test' className='p-4'>
        Test
      </Link>
      <Link to='/login' className='p-4'>
        Login
      </Link>
      <Link to='/registration' className='p-4'>
        Registration
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
