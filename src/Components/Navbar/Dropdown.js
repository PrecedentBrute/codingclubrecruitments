import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
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
    </div>
  );
};

export default Dropdown;
