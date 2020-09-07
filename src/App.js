import React from 'react';
import styled from 'styled-components';
import './App.css';
import Button from './Button';
import Timer from './Timer';
import { calculateVillageTime } from './timeCalculator';
import VillagerActivityLog from './villagers/villagerActivityLog';
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
      <VillagerActivityLog
        villagers={[farmerRoughHands, msBrookfern]}
        currentTime= {calculateVillageTime()}
      />
      </header>
    </div>
  );
}

export default App;
