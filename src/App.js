import React from 'react';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (
    <div>
      <div className='container'>
        <Router>
        <HeaderComponent />
          <Routes>
            <Route exact path='/' element={<ListEmployeeComponent />}></Route>
            <Route exact path='add-employee' element={<CreateEmployee />}></Route>
            <Route exact path='employees/edit/:id' element={<CreateEmployee />}></Route>
          </Routes>
        </Router>
      </div>
      <FooterComponent />
    </div>
    
  );
}

export default App;
