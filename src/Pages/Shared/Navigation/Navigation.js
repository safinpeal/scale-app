import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AdminContext } from '../../../Context/AdminContext';
import { NotificationContext } from '../../../Context/NotificationContext';
import Dropdown from 'react-bootstrap/Dropdown';
import './Navigation.css';
import logo from '../../../images/innovative-01.png'

const Navigation = () => {
  const navigate = useNavigate();
  const [admin,setAdmin]= useContext(AdminContext);
  const {notification,setNotification}=useContext(NotificationContext);
  const logout=()=>{
    
    localStorage.removeItem('Token');
    setAdmin('');
    //navigate('/');
    
  }
  console.log(notification.length);
    return (
           
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/"><img src={logo}alt="Logo"/></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink exact to="/" className="nav-link active">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/productslist" className="nav-link active">Products List</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/about" className="nav-link">About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/employee" className="nav-link">Employees</NavLink>
        </li>
        {!admin?
        <li class="nav-item">
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </li> :''}
        <li class="nav-item">
         <NavLink to="contact" className="nav-link">Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/my-gallery" className="nav-link">Gallery</NavLink>
        </li>
    {admin? 
      <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Admin Section
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown">
        <div><Link to='/update-admin' className="dropdown-link">Update Admin</Link></div>
        <div><Link to='/admin' className="dropdown-link">Upload Products</Link></div>
        <div><Link to='/addemployee' className="dropdown-link">Add Employee</Link></div>
        <div><Link to='/change-image' className="dropdown-link">Carousel Picture</Link></div>
        <div><Link to='/change-partners' className="dropdown-link">Update Partners</Link></div>
        <div><Link to='/gallery-image' className="dropdown-link">Gallery Control</Link></div>
      </Dropdown.Menu>
    </Dropdown>
    :''}

        {admin?<li class="nav-item">
        <NavLink to="/admin" className="nav-link"><button onClick={logout} className='btn btn-secondary'>Logout</button></NavLink>
        </li>:''}
        {admin?
        <li class="nav-item">
        <NavLink to="/notification" className="nav-link"><button className='btn btn-secondary'>Notifications({notification.length})</button></NavLink>
        </li>
        :""}
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