import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-ccblack'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4'>
        Home
      </Link>
      <Link to='/projects' className='p-4'>
        Projects
      </Link>
      <Link to='/recruitments' className='p-4'>
        Recruitment
      </Link>
      <Link to='/login' className='p-4'>
        Login
      </Link>
      <Link to='/registration' className='p-4'>
        Registration
      </Link>
    </div>
  );
};

export default Dropdown;
