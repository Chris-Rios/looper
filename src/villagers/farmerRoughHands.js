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
    activity: 'Eat Breakfast',
};

const workActivity = {
    startHour: 6,
    endhour: 11,
    activity: 'Work the farm'
};

const lunchActivity = {
    startHour: 11,
    endhour: 12,
    activity: 'Lunch'
};

const workActivityAgain = {
    startHour: 12,
    endhour: 15,
    activity: 'Work the farm'
};

const churchActivity = {
    startHour: 15,
    endhour: 16,
    activity: 'Church'
};

const drinkingActivity = {
    startHour: 16,
    endhour: 18,
    activity: 'Drinking at The Vicious Horde'
};

const dinnerActivity = {
    startHour: 18,
    endhour: 19,
    activity: 'Dinner'
};

const readActivity = {
    startHour: 19,
    endhour: 21,
    activity: 'Reading'
};

const nightSleepActivity = {
    startHour: 21,
    endhour: 24,
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
    drinkingActivity,
    dinnerActivity,
    readActivity,
    nightSleepActivity
]);

export default class FarmerRoughHands extends Villager {
    constructor() {
        super(name, age, schedule);
    }    
}

