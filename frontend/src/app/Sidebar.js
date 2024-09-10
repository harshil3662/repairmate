import React from 'react';
import '../css/Sidebar.css';
import { Link } from 'react-router-dom'

const Sidebar = ({isClosed,isOpen}) => {
  return (
    <div className='d-flex flex-column flex-shrink-0 p-3 sidebar border-start'>
        <div className='d-flex justify-content-between align-items-center'>
            <span className='close p-1'><i className="bi bi-x-circle p-2 fs-3 text-dark" onClick={isClosed}></i></span>
            <span className='text-end fs-4 text-dark'>Welcome, Harshil</span>
        </div>
        <hr className='text-dark'/>
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <Link to='/' className="d-flex justify-content-start align-items-center nav-link" aria-current="page">
                    <i className="icons bi bi-house-door-fill fs-4 me-3"></i>
                    <span className='text-dark'>Home</span>
                </Link>
            </li>
            <li>
                <Link to="/orders" className="d-flex justify-content-start align-items-center nav-link">
                    <i className="icons bi bi-table fs-4 me-3"></i>
                    <span className='text-dark'>Orders</span>
                </Link>
            </li>
            <li>
                <Link to="/favourite" className="d-flex justify-content-start align-items-center nav-link">
                    <i className="icons bi bi-heart fs-4 me-3"></i>
                    <span className='text-dark'>Favourite</span>
                </Link>
            </li>
            <li>
                <Link to="/profile" className="d-flex justify-content-start align-items-center nav-link">
                    <i className="icons bi bi-people-fill fs-4 me-3"></i>
                    <span className='text-dark'>Profile</span>
                </Link>
            </li>
            <li>
                <Link to="/signin" className="d-flex justify-content-start align-items-center nav-link">
                    <i className="icons bi bi-person-circle fs-4 me-3"></i>
                    <span className='text-dark'>Sign In</span>
                </Link>
            </li>
        </ul>
    </div>
  );
};

export default Sidebar;
