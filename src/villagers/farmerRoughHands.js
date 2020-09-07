import Villager from "./villager";

const name = "Farmer Rough Hands";
const age = "48";

const sleepActivity = {
    startHour: 0,
    endHour: 5,
    activity: 'Sleep', 
};

const breakfastActivity = {
    startHour: 5,
    endHour: 6,
    activity: 'Eating Breakfast',
};

const workActivity = {
    startHour: 6,
    endHour: 11,
    activity: 'Work the farm'
};

const lunchActivity = {
    startHour: 11,
    endHour: 12,
    activity: 'Lunch'
};

const workActivityAgain = {
    startHour: 12,
    endHour: 15,
    activity: 'Work the farm'
};

const churchActivity = {
    startHour: 15,
    endHour: 16,
    activity: 'Church'
};

const drinkingActivity = {
    startHour: 15,
    endHour: 18,
    activity: 'Drinking at The Vicious Horde'
};

const dinnerActivity = {
    startHour: 18,
    endHour: 19,
    activity: 'Dinner'
};

const readActivity = {
    startHour: 19,
    endHour: 21,
    activity: 'Reading'
};

const nightSleepActivity = {
    startHour: 21,
    endHour: 24,
    activity: 'Sleeping'
};

const schedule = new Map();

schedule.set('Sunday', [
    sleepActivity,
    breakfastActivity,
    workActivity,
    lunchActivity,
    workActivityAgain,
    churchActivity,
    {
        ...drinkingActivity,
        startHour: 16,
    },
    dinnerActivity,
    readActivity,
    nightSleepActivity
]);

schedule.set('Monday', [
    sleepActivity,
    breakfastActivity,
    workActivity,
    lunchActivity,
    workActivityAgain,
    drinkingActivity,
    dinnerActivity,
    readActivity,
    nightSleepActivity
]);

schedule.set('Tuesday', [
    sleepActivity,
    breakfastActivity,
    workActivity,
    lunchActivity,
    workActivityAgain,
    drinkingActivity,
    dinnerActivity,
    readActivity,
    nightSleepActivity
]);

schedule.set('Wednesday', [
    sleepActivity,
    breakfastActivity,
    workActivity,
    lunchActivity,
    workActivityAgain,
    churchActivity,
    drinkingActivity,
    dinnerActivity,
    readActivity,
    nightSleepActivity
]);

schedule.set('Thursday', [
    sleepActivity,
    breakfastActivity,
    workActivity,
    lunchActivity,
    workActivityAgain,
    {
        ...drinkingActivity,
        endHour: 22,
    },
    nightSleepActivity
]);

schedule.set('Friday', [
    sleepActivity,
    breakfastActivity,
    workActivity,
    lunchActivity,
    workActivityAgain,
    {
        ...drinkingActivity,
        endHour: 22,
    },
    nightSleepActivity
]);

schedule.set('Saturday', [
    sleepActivity,
    breakfastActivity,
    workActivity,
    lunchActivity,
    workActivityAgain,
    {
        ...drinkingActivity,
        endHour: 22,
    },
    nightSleepActivity
]);

export default class FarmerRoughHands extends Villager {
    constructor() {
        super(name, age, schedule);
    }    
}

