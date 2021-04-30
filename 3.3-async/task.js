class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock (time, fn, id) {
        if (!id) {
            throw new Error ('Ошибка');
        } else if (this.alarmCollection.some(item => item.id === id)) {
            console.error ('Таймер уже существует');
        } else {
            this.alarmCollection.push ({
                id: id,
                time: time,
                callback: fn
            })
        }
    }
    removeClock (id) {
        if (this.alarmCollection.some(item => item.id === id)) {
            let index = this.alarmCollection.findIndex(item => item.id = id);
            this.alarmCollection.splice(index, 1);
            return true;
        } else return false;
    }
    getCurrentFormattedTime () {
        let date = new Date();
        const zeroValidation = (date) => {
           if(date.length < 2) {
               return " " + date;
           } else return date;
        }
        return zeroValidation(date.getHours()) + ":" + zeroValidation(date.getMinutes());
    }
    start () {
        const checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval (() => this.alarmCollection.map (item => checkClock (item)), 1000)
        }
    }
    stop () {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms () {
        this.alarmCollection.forEach(item => console.log(`${item.id}:${item.time}`));
    }
    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}