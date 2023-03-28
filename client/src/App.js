import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Assignment from './components/Assignment';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/assignment' element={<Assignment/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
