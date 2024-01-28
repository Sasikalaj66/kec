//import logo from './logo.svg';
import './App.css';
//import TestComponent from './component/functionalComp/testComp';
//import ReiteratingClassComp from './component/classComp/testClassComp';
//import PropsComponent from './component/functionalComp/PropsComponent';
//import StateComponent from './component/classComp/StateComponent';

import NavBar from './component/functionalComp/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/functionalComp/Home';
import About from './component/functionalComp/About';
import Achievement from './component/functionalComp/Achievement';
import Contact from './component/functionalComp/Contact';
import Content from './component/functionalComp/Content';
import Footer from './component/functionalComp/Footer';
import Login from './component/functionalComp/Login';
import Signup from './component/functionalComp/Signup';
import Reference from './component/functionalComp/Reference';
import Memo from './component/functionalComp/Memo';
import Callback from './component/functionalComp/Callback';


function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/achievement" element={<Achievement />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/ref" element={<Reference/>}></Route>
          <Route path="/memo" element={<Memo/>}></Route>
          <Route path="/callback" element={<Callback/>}></Route>

        </Routes>
        <Content />

      </BrowserRouter>




      {/*<PropsComponent name="sasi" course="Mern" /> */}
      {/*<ReiteratingClassComp/> */}
      {/*<TestComponent/> */}

      {/*<StateComponent /> */}
      {/*<header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
  </a>
  
  </header>*/}
     
        <Footer/>
      
      






    </div>
  );
}

export default App;


