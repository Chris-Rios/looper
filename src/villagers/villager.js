
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

    getLastActivity() {
        return this.lastActivity;
    }

    getActivity(day, hour) {
        const dailySchedule = Array.from(this.schedule.get(day).values());
        const location = dailySchedule.find(({ startHour, endHour}) => {
            if (hour >= startHour && hour < endHour) {
                return true;
            }
            return false;
        })
        if (location && location.activity) {
            if (location.activity === this.getLastActivity()) {
                console.log(`${this.getName()} is still ${location.activity}`);
                return location.activity
            }
            else {
                this.lastActivity = location.activity;
                return location.activity;
            }
        }
        return location && location.activity;
    }
}