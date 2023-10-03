import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Education from './components/education';
import Interest from './components/interest';
import { useRef } from 'react';
import Projects from './components/projects';

function App() {
  const ho=useRef(null),inte=useRef(null),pro=useRef(null);
  return (
    <div className="">
      <Navbar ho={ho} inte={inte} pro={pro}/>
      <Home refer={ho}/>
      <Education />
      <Interest refer={inte}/>
      <Projects refe={pro}/>
    </div>
  );
}

export default App;
