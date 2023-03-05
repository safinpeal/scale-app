import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink exact to="/" className="nav-link active">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/about" className="nav-link">About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </li>
        <li class="nav-item">
         <NavLink to="contact" className="nav-link">Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/language" className="nav-link">Language</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/admin" className="nav-link">Admin</NavLink>
        </li>
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
        
    );
};

export default Navigation;