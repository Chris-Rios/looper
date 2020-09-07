/**
 * Used to convert real time to game time
 */
const startTime = Date.now();
const TIME_MULTIPLIER = 60;


const calculateDayString = (dayValue) => {
    switch(dayValue) {
        case 0: 
            return 'Sunday';
        case 1: 
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }
}

 const calculateVillageTime = () => {
    const currentTime = Date.now();
    const timeDifference = (Date.now() - startTime) * TIME_MULTIPLIER;
    const newTime = new Date(timeDifference + startTime);
    return {
        day: calculateDayString(newTime.getDay()),
        hours: newTime.getHours(),
        minutes: newTime.getMinutes()
    }
    return newTime;
 }


 export {
     calculateVillageTime
 }