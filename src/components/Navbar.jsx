import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  
  return (
    <div className='flex flex-row gap-4 place-content-evenly navibar'>
      <NavLink to="/" className="">Home</NavLink>
      <NavLink to="/Nots" className="">Notes</NavLink>
      
    </div>
  );
};
