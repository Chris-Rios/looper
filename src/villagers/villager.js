
export default class Villager {
    constructor(name, age, schedule) {
        this.name = name;
        this.age = age;
        this.schedule = schedule;
    }

    getLocation(currentDay, currentTime) {
        return "who knows man";
    }

    getName() {
        return this.name;
    }

    getAge()  {
        return this.age;
    }

    getSchedule() {
        return this.schedule;
    }

    getActivity(day, hour) {
        const dailySchedule = Array.from(this.schedule.get(day).values());
        const location = dailySchedule.find(({ startHour, endHour}) => {
            if (hour >= startHour && hour < endHour) {
                return true;
            }
            return false;
        })

        return location && location.activity;
    }
}