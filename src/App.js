import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/AboutUS/AboutUs';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Contact from './Pages/Contact/Contact';
import AdminPage from './Pages/Admin/AdminPage/AdminPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/about" element={<AboutUs></AboutUs>}/>
          <Route path="/contact" element={<Contact></Contact>}/>
          <Route path="/admin" element={<AdminPage></AdminPage>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
