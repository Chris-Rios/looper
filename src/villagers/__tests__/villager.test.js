import Villager from '../villager';

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
    activity: 'Drink at The Vicious Horde'
};

const dinnerActivity = {
    startHour: 18,
    endhour: 19,
    activity: 'Dinner'
};

const readActivity = {
    startHour: 19,
    endhour: 21,
    activity: 'Read'
};

const nightSleepActivity = {
    startHour: 21,
    endhour: 24,
    activity: 'Sleep'
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




schedule.set('Sunday', [
    sleepActivity,
    {
        startHour: 0,
        endHour: 4,
        activity: 'Sleep', 
    },
    {
        startHour: 0,
        endHour: 4,
        activity: 'Sleep', 
    }
])

describe('Villager Tests', () => {
    let villager;
    beforeEach(() => {
        villager = new Villager('Tim', 45, schedule);
    })
    it('Should create a villager and returns its basic information', () => {
        expect(villager.getName()).toEqual('Tim');
        expect(villager.getAge()).toEqual(45);
    });

    it('Should identify where a villager is on a given day and time', () => {
        expect(villager.getSchedule()).toEqual(schedule);
    })
})