import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VillagerActivityLog from './villagers/villagerActivityLog';
import { calculateVillageTime } from './timeCalculator';

const ActivityLogContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 40%;
    bottom: 0;
    margin-bottom: 15px;
`;

function ActivityLog({ villagers }) {

    const [villageTime, setVillageTime] = useState(calculateVillageTime());

    useEffect(() => {
        setTimeout(() => {
            setVillageTime(calculateVillageTime());
        }, 60000);
      });

    return (
        <ActivityLogContainer>
            <VillagerActivityLog
                villagers={villagers}
                currentTime={villageTime}
            />
        </ActivityLogContainer>
    );
}

export default ActivityLog;