import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
// import Assignment from './components/Assignment';
import Item from './components/Item';
import store from './store';
import { useEffect } from 'react';
import { loadUser } from './actions/authAction';
import { Provider } from 'react-redux';
import Assignments from './components/Assignment/Assignments';
import AssignmentState from './context/assignment/AssignmentState';




function App() {
  // useEffect(()=>{
  //   store.dispatch(loadUser)
  // })
  return (
    <AssignmentState>
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          {/* <Route exact path='/assignment' element={<Item />}></Route> */}
          <Route exact path='/assignment' element={<Assignments/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
        </Routes>
        
      </Router>
    </Provider>
    </AssignmentState>
  );
}

export default App;
