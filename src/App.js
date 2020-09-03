import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import FarmerRoughHands from './villagers/farmerRoughHands';

const farmerRoughHands = new FarmerRoughHands()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          label="test"
          onClick={() => {
            console.log(farmerRoughHands.getActivity('Sunday', 5));
          }}
        /> 
      </header>
    </div>
  );
}

export default App;
