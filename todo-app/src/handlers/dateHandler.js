import { localStorageDM } from "../dm/localStorage";

export const initDateHandler = () => {
  let localStorage = new localStorageDM("dateStorage");
  let dateHandler = new DateHandler(localStorage);

  return dateHandler;
};

class DateHandler {
    constructor(dateDM) {
        this.dateDM = dateDM
        this.dateObj = this.getDefaultDate()
    }

    getDate() {
        return this.dateObj;
    }

    addDay(day) {
        this.dateObj.setDate(this.dateObj.getDate() + day);
        this.dateDM.save(this.dateObj.getTime())

        return this.dateObj
    }

    getDefaultDate() {
        let d = new Date()

        return d
    }
}