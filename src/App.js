import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Education from './components/education';
import Interest from './components/interest';
import { useRef } from 'react';

function App() {
  const ho=useRef(null),inte=useRef(null);
  return (
    <div className="">
      <Navbar ho={ho} inte={inte}/>
      <Home refer={ho}/>
      <Education />
      <Interest refer={inte}/>
    </div>
  );
}

export default App;
