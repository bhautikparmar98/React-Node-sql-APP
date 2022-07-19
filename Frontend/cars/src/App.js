import React from "react"; 
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Carshomepage from './components/carshomepage'
import Carsdetailpage from './components/carsdetailpage'
import Addnewcardata from "./components/addnewcardata";
import {useState} from 'react'

function App() {

  const [selectedCarData, setselectedCarData] = useState()

  return (
    <div>
      <Routes>
        <Route path='/' element={<Carshomepage setselectedCarData={setselectedCarData}/>}/>
        <Route path='/details/:id' element={<Carsdetailpage selectedCarData={selectedCarData}/>}/>
        <Route path='/addnew' element={<Addnewcardata/>}/>
      </Routes>
    </div>
  );
}

export default App;
