import Villager from "./villager";

const name = "Lillian Brookfern";
const age = "28";

const sleepActivity = {
    startHour: 0,
    endHour: 11,
    activity: 'Sleep'
}

const breakfastActivity = {
    startHour: 11,
    endHour: 12,
    activity: 'Eating breakfast'
}

const drinkingActivity = {
    startHour: 20,
    endhour: 18,
    activity: 'Drinking at The Vicious Horde'
};

const highActivity = {
    starthour: 12,
    endHour: 13,
    activity: 'Getting High'
};

const poemActivity = {
    startHour: 13,
    endHour: 15,
    activity: 'Writing Poems'
};

const spellActivity = {
    startHour: 13,
    endHour: 15,
    activity: 'Writing Spells'
};

const wanderActivity = {
    startHour: 15,
    endHour: 16,
    activity: 'Wandering the village'
};

const mightyTreeActivity = {
    startHour: 16,
    endHour: 19,
    activity: 'Open Hours at the Mighty Tree'
};

const graveyardActivity = {
    startHour: 16,
    endHour: 17,
    activity: 'Visting the graveyard'
};

const cryingActivity = {
    startHour: 17,
    endHour: 18,
    activity: 'Crying'
};

const foragingActivity = {
    startHour: 19,
    endHour: 20,
    activity: 'Foraging in the forest'
};

const napActivity = {
    startHour: 17,
    endHour: 18,
    activity: 'Napping'
};

const schedule = new Map();

schedule.set('Sunday', [
    sleepActivity,
    breakfastActivity,
    highActivity,
    poemActivity,
    wanderActivity,
    graveyardActivity,
    cryingActivity,
    {
        ...highActivity,
        startHour: 18,
        endHour: 19
    },
    foragingActivity,
    drinkingActivity
]);

schedule.set('Monday', [
    sleepActivity,
    breakfastActivity,
    highActivity,
    spellActivity,
    wanderActivity,
    mightyTreeActivity,
    foragingActivity,
    drinkingActivity
]);

schedule.set('Tuesday', [
    sleepActivity,
    breakfastActivity,
    highActivity,
    poemActivity,
    wanderActivity,
    mightyTreeActivity,
    foragingActivity,
    drinkingActivity
]);

schedule.set('Wednesday', [
    sleepActivity,
    breakfastActivity,
    highActivity,
    spellActivity,
    wanderActivity,
    mightyTreeActivity,
    foragingActivity,
    drinkingActivity
]);

schedule.set('Thursday', [
    sleepActivity,
    breakfastActivity,
    highActivity,
    spellActivity,
    wanderActivity,
    mightyTreeActivity,
    foragingActivity,
    drinkingActivity
]);

schedule.set('Friday', [
    sleepActivity,
    breakfastActivity,
    highActivity,
    poemActivity,
    wanderActivity,
    mightyTreeActivity,
    foragingActivity,
    drinkingActivity
]);

schedule.set('Saturday', [
    sleepActivity,
    breakfastActivity,
    highActivity,
    spellActivity,
    poemActivity,
    {
        ...highActivity,
        startHour: 16,
        endHour: 17
    },
    napActivity,
    {
        ...highActivity,
        startHour: 18,
        endHour: 19
    },
    foragingActivity,
    drinkingActivity
]);

export default class MsBrookfern extends Villager {
    constructor() {
        super(name, age, schedule);
    }    
}