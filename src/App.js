import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Timer from './Timer';
import ActivityLog from './ActivityLog';
import FarmerRoughHands from './villagers/farmerRoughHands';
import MsBrookfern from './villagers/msBrookfern';

const farmerRoughHands = new FarmerRoughHands();
const msBrookfern = new MsBrookfern();

const StyledTimer = styled(Timer)`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 1.5rem;
  margin-top: 1rem;
`;


function App() {
    return (
    <div className="App">
      <header className="App-header">
      <StyledTimer />
      <ActivityLog
        villagers={[farmerRoughHands, msBrookfern]}
      />
      </header>
    </div>
  );
}

export default App;
