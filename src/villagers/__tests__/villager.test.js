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
    endHour: 11,
    activity: 'Working the farm'
};

const lunchActivity = {
    startHour: 11,
    endHour: 12,
    activity: 'Lunch'
};

const workActivityAgain = {
    startHour: 12,
    endHour: 15,
    activity: 'Working the farm'
};

const churchActivity = {
    startHour: 15,
    endHour: 16,
    activity: 'Church'
};

const drinkingActivity = {
    startHour: 16,
    endHour: 18,
    activity: 'Drink at The Vicious Horde'
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

        expect(villager.getActivity('Sunday', 19)).toEqual('Reading');
    })
})