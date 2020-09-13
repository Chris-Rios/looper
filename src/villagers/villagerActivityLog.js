import React from 'react';

function VillageActivityLog({ villagers, currentTime }) {
    const buildVillagerActivity = () => {
        return villagers.map((villager) => {
            return {
                villagerName: villager.getName(),
                activityText: `${villager.getName()}: ${villager.getActivity(currentTime.day, currentTime.hours)}`
            }
        }); 
    };

    return (
        <div>
            {buildVillagerActivity().map((villager) => {
                return (
                    <div key={villager.villagerName}> {villager.activityText} </div>
                )
            })}
        </div>
    );
}


export default VillageActivityLog;