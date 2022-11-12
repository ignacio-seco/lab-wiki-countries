import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CountriesList from './components/CountriesList/CountriesList'
import CountriesData from './countries.json'
import { useState } from 'react';
import CountryDetails from "./components/CountryDetails/CountryDetails"

function App() {
  const [myData,setMyData]= useState(CountriesData)
  return (
    <div className="App">
    <NavBar/>
    <div className="wikiBody">
    <div className="listSide">
    <CountriesList myData={myData} setMyData={setMyData}/>
    </div>
    <div className="informationSide">
     <Routes>
        <Route path="/:alpha3Code" element={ <CountryDetails myData={myData} /> } />
  </Routes>
    </div>
   </div>
    </div>
  );
}

export default App;
