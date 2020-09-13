import React, { useEffect, useState } from 'react';
import VillagerActivityLog from './villagers/villagerActivityLog';
import { calculateVillageTime } from './timeCalculator';



function ActivityLog({ villagers }) {

    const [villageTime, setVillageTime] = useState(calculateVillageTime());

    useEffect(() => {
        setTimeout(() => {
            setVillageTime(calculateVillageTime());
        }, 60000);
      });

    return (
        <div>
            <VillagerActivityLog
                villagers={villagers}
                currentTime={villageTime}
            />
        </div>
    );
}

export default ActivityLog;