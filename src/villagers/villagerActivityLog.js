import React from 'react';
import styled from 'styled-components';



const ActivityList = styled.div`
    text-align: left;
    margin-left: 15px;
`;

const activities = [];

function VillageActivityLog({ villagers, currentTime }) {
    const buildVillagerActivity = () => {
        villagers.forEach((villager) => {
            const villagerLastActivity = villager.getLastActivity();
            const villagerActivity = villager.getActivity(currentTime.day, currentTime.hours);

            if (villagerActivity !== villagerLastActivity) {
                const villagerActivity = {
                    villagerName: villager.getName(),
                    activityText: `${villager.getName()}: ${villager.getActivity(currentTime.day, currentTime.hours)}`
                };
                activities.push(villagerActivity);
            }
        }); 
    };
    buildVillagerActivity();
    console.log(activities.length);
    return (
        <ActivityList>
            {activities.map((activity) => {
                return (
                    <div key={`${activity.villagerName}-${activity.activityText}`}> {activity.activityText} </div>
                )
            })}
        </ActivityList>
    );
}


export default VillageActivityLog;