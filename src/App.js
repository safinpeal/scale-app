import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/AboutUS/AboutUs';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Contact from './Pages/Contact/Contact';
import AdminPage from './Pages/Admin/AdminPage/AdminPage';
import Login from './Pages/Login/Login';
import { AdminContext } from './Context/AdminContext';
import { useEffect, useState } from 'react';
import ProtectedAdmin from './Auth/ProtectedAdmin';
import axios from 'axios';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';

function App() {
  const token = localStorage.getItem('Token');
  const [admin,setAdmin] = useState();
  const [check,setCheck]=useState(true);
  useEffect(()=>{
      if(token){
        axios.post('http://localhost:5000/check-authentication',token)
        .then((res)=>{
          setAdmin(res.data)
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
          <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<AboutUs></AboutUs>}/>
            <Route path="/contact" element={<Contact></Contact>}/>
            <Route path="/productdetails/:id" element={<ProductDetails/>}/>
            <Route path="/admin" element={<ProtectedAdmin><AdminPage/></ProtectedAdmin>}/>
          </Routes>
        </BrowserRouter>
        </AdminContext.Provider>
      </div>
    );
  }

}

export default App;
