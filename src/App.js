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
import { useState } from 'react';
import ProtectedAdmin from './Auth/ProtectedAdmin';

function App() {
  console.log("app");
  const [admin,setAdmin] = useState();
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
          <Route path="/admin" element={<ProtectedAdmin><AdminPage/></ProtectedAdmin>}/>
        </Routes>
      </BrowserRouter>
      </AdminContext.Provider>
    </div>
  );
}

export default App;
