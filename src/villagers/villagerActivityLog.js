import React from 'react';

function VillageActivityLog({ villagers, currentTime }) {
    const buildVillagerActivity = () => {
        return villagers.map((villager) => {
            return `${villager.getName()}: ${villager.getActivity(currentTime.day, currentTime.hours)}`;
        }); 
    };
    console.log(buildVillagerActivity())
    return (
        <div>
            {buildVillagerActivity().map((item) => {
                console.log(item);
                return (
                    <div> {item} </div>
                )
            })}
        </div>
    );
}


export default VillageActivityLog;