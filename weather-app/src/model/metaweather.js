import axios from "axios";

class MetaWeather {
  constructor() {
    this.base_url = "https://www.metaweather.com/api/";
  }

  async get_countries(country_name) {
      try {
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country_name}&appid=6e648ae1e727710c3697055e604c5ef6`)
        console.log(res)
      } catch(error) {
        console.log(error)
      }
}
}

export default MetaWeather;
