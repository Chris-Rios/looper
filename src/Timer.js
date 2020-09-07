import React, { useEffect, useState } from 'react';
import { calculateVillageTime } from './timeCalculator';
import styled from 'styled-components';



function Timer({ className }) {

    const [villageTime, setVillageTime] = useState(calculateVillageTime());
    
    useEffect(() => {
        setTimeout(() => {
            setVillageTime(calculateVillageTime());
        }, 1000);
      });

    return (
        <div className= {className}>  Current Time: {villageTime.day} {villageTime.hours}:{villageTime.minutes.toString().padStart('2', '0')}</div>
    )
}


export default Timer;

//         
