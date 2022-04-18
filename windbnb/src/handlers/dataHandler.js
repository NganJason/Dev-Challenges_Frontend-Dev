import { data } from "../assets/stays";

export class StayData {
  constructor() {
    this.data = this.getDefaultData();
    this.guestFilter = ""
    this.locationFilter = ""
  }

  FilterGuest(f) {
      this.guestFilter = f
      return this
  }

  FilterLocation(f) {
      this.locationFilter = f
      return this
  }

  GetData() {
    let result = this.data
    if (this.guestFilter !== "") {
        result = this.data.filter((d) => this.guestFilter <= d.maxGuests);
    }

    if (this.locationFilter !== "") {
        result = result.filter(
          (d) => d.city.toLowerCase() === this.locationFilter.toLowerCase()
        );
    }
    
    return result
  }

  getDefaultData() {
    return data;
  }
}