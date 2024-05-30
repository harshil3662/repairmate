import React from 'react';
import '../css/Sidebar.css';

const Sidebar = ({isClosed,isOpen}) => {
  return (
    <div className={`border-start d-flex flex-column flex-shrink-0 p-3 sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className='d-flex justify-content-between align-items-center'>
            <i class="bi bi-arrow-right fs-5 text-dark" onClick={isClosed}></i>
            <span className='text-end'>Welcome, Harshil</span>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a href="#" className="nav-link link-dark" aria-current="page">
                    <i className="bi bi-house-door-fill me-2"></i>
                    Home
                </a>
            </li>
            <li>
                <a href="#" className="nav-link link-dark">
                    <i className="bi bi-speedometer2 me-2"></i>
                    Dashboard
                </a>
            </li>
            <li>
                <a href="#" className="nav-link link-dark">
                    <i className="bi bi-table me-2"></i>
                    Orders
                </a>
            </li>
            <li>
                <a href="#" className="nav-link link-dark">
                    <i className="bi bi-grid me-2"></i>
                    Products
                </a>
            </li>
            <li>
                <a href="#" className="nav-link link-dark">
                    <i className="bi bi-people me-2"></i>
                    Customers
                </a>
            </li>
        </ul>
        <hr />
        <div className="dropdown">
            <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://via.placeholder.com/40" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>User</strong>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>
    </div>
  );
};

export default Sidebar;
