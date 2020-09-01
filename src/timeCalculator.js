/**
 * Used to convert real time to game time
 */
const startTime = Date.now();
const TIME_MULTIPLIER = 10;


 const calculateVillageTime = () => {
    const currentTime = Date.now();
    const timeDifference = (Date.now() - startTime) * TIME_MULTIPLIER;
    const newTime = new Date(timeDifference + startTime);

    return newTime;
 }


 export {
     calculateVillageTime
 }