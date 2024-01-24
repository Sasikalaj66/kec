import logo from './logo.svg';
import './App.css';
import TestComponent from './component/functionalComp/testComp';
import ReiteratingClassComp from './component/classComp/testClassComp';

function App() {
  return (
    <div className="App">
      <ReiteratingClassComp/>
      <header className="App-header">
      <TestComponent/>
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
      </header>
    </div>
  );
}

export default App;
