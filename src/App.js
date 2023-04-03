import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/AboutUS/AboutUs';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Contact from './Pages/Contact/Contact';
import AdminPage from './Pages/Admin/AdminPage/AdminPage';
import Login from './Pages/Login/Login';
import {NotificationContext} from './Context/NotificationContext'
import { AdminContext } from './Context/AdminContext';
import { useEffect, useState } from 'react';
import ProtectedAdmin from './Auth/ProtectedAdmin';
import axios from 'axios';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import Notifications from './Pages/Admin/Notifications/Notifications';
import Employee from './Pages/Admin/AddEmployee/Employee';
import ImageController from './Pages/Admin/CarouselImage/Imagecontrol';
import AllProducts from './Pages/AllProducts/AllProducts';
import Footer from './Pages/Shared/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.css';


import 'aos/dist/aos.css';
import AOS from 'aos';

import Location from './Pages/Location/Location';
import Gallery from './Pages/Admin/Gallery/Gallery';
import Mygallery from './Pages/Mygallery/Mygallery';
//dbb92a44fcba5870b3a29def07b832b3fcb72db1

function App() {
  const token = localStorage.getItem('Token');
  const [admin,setAdmin] = useState();
  const [check,setCheck]=useState(true);
  const [notification,setNotification]=useState([]);
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);
  useEffect(()=>{
    axios.get('http://localhost:5000/notification')
    .then(response => {
      
      setNotification(response.data);
      
    })
    .catch(error => {
      console.error(error);
    });
},[])
  useEffect(()=>{
      if(token){
        axios.post('http://localhost:5000/check-authentication',{token})
        .then((res)=>{
          setAdmin(res.data.id)
          //console.log(res.data);
        })
      }
      setCheck(false);
  },[]);
  if(check) {
    return(<div>Loading</div>)
  }
  else
  {
    return (
      <div className="App">
        <AdminContext.Provider value={[admin,setAdmin]}>
          <NotificationContext.Provider value={{notification,setNotification}}>
          <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/productslist" element={<AllProducts></AllProducts>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<AboutUs></AboutUs>}/>
            <Route path="/contact" element={<Contact></Contact>}/>
            <Route path="/productdetails/:id" element={<ProductDetails/>}/>
            <Route path="/admin" element={<ProtectedAdmin><AdminPage/></ProtectedAdmin>}/>
            <Route path="/admin/:id" element={<ProtectedAdmin><AdminPage/></ProtectedAdmin>}/>
            <Route path="/addemployee" element={<ProtectedAdmin><Employee/></ProtectedAdmin>}/>
            <Route path="/change-image" element={<ProtectedAdmin><ImageController/></ProtectedAdmin>}/>
            <Route path="/notification" element={<Notifications/>}/>
            <Route path="/my-gallery" element={<Mygallery></Mygallery>}/>
            <Route path="/gallery-image" element={<ProtectedAdmin><Gallery></Gallery></ProtectedAdmin>}/>

            
          </Routes>
          <Footer className="footer"></Footer>
        </BrowserRouter>
        </NotificationContext.Provider>
        </AdminContext.Provider>
      </div>
    );
  }

}

export default App;
