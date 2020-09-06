import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import FarmerRoughHands from './villagers/farmerRoughHands';
import MsBrookfern from './villagers/msBrookfern';

const farmerRoughHands = new FarmerRoughHands();
const msBrookfern = new MsBrookfern();

const RoughHandsButton = styled(Button)`
  margin-bottom: 15px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <RoughHandsButton
          label="See what farmer rough hands is up to"
          onClick={() => {
            console.log(farmerRoughHands.getActivity('Sunday', 5));
          }}
        />
        <Button
          label="See what Ms Brookfern is up to"
          onClick={() => {
            console.log(msBrookfern.getActivity('Monday', 13));
          }}
        />  
      </header>
    </div>
  );
}

export default App;
