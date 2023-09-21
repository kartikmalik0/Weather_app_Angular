import { Component } from '@angular/core';
import { WeatherDataService } from '../service/weather-data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  public finalData: any = []
  public dateArray: any = []
  public bottomWeatherData: any = []
  public currentDate: any = []
  public lat: any
  public lon: any
  public cityName: any

  //gettin city from child
  getCity(city: any) {
    if (city) {
      this.cityName = city
      this.constructorFnc();
    }
  }
  filterData() {
    for (let i = 0; i < this.bottomWeatherData.length; i++) {

      this.currentDate = this.bottomWeatherData[i].dt_txt?.split(' ')[0];

      if (this.currentDate && !this.dateArray.includes(this.currentDate)) {
        this.finalData.push(this.bottomWeatherData[i]);
        // console.log(currentDate);
        // console.log(this.count);
        // console.log(this.count,this.finalData);
        this.bottomWeatherData[i].main.temp = (parseInt(this.bottomWeatherData[i].main.temp) - 273.18).toFixed(1);
        this.dateArray.push(this.currentDate);
      }
    }
    console.log("final", this.finalData);


  }

  getLocation() {

    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude
      this.lon = position.coords.longitude
      if (this.lat && this.lon && this.finalData) {
        this.cityName = `&lat=${this.lat}&lon=${this.lon}`
        this.constructorFnc()
      }
    }
    );
  }
  constructor(public weatherData: WeatherDataService) {
    this.getLocation()
  }


  public constructorFnc() {

    this.weatherData.getWeatherData(this.cityName).subscribe((data: any) => {

      console.log(data);
      //assing the bottom data
      this.bottomWeatherData = data.list
      //operations with left-data
      // console.log("xyz:",data);
      this.weatherData.leftData = {
        "humidity": data.list[0].main.humidity,
        "name": data.city.name,
        "temp": Math.floor(data.list[0].main.temp - 273),
        "day": data.list[0].dt,
        "weather_status": data.list[0].weather[0].main,
        "visibility": data.list[0].visibility / 1000
      }
      //operation for right component
      this.weatherData.rightData = {
        "humidity": data.list[0].main.humidity,
        "sunrise": this.calculateTimestampSunRise(data.city.sunrise),
        "sunset": this.calculateTimestampSunSet(data.city.sunset),
        "windSpeed": data.list[0].wind.speed,
        "visibility": data.list[0].visibility / 1000,
        "temp_max": Math.floor(data.list[0].main.temp - 273),
        "right_bottom": this.finalData,
      }
      //  console.log(this.weatherData.rightData.list);
      this.filterData()
      this.weatherData.right_bottom_data = {
        'right_bottom': this?.finalData
      }
      console.log(this.weatherData.right_bottom_data.right_bottom[0]);
    })

  }

  public calculateTimestampSunSet(sunsetTimestamp: any): any {
    const sunsetDate = new Date(sunsetTimestamp * 1000);
    const hours = sunsetDate.getHours();
    const minutes = sunsetDate.getMinutes();
    return `${hours % 12}:${minutes < 10 ? '0' : ''}${minutes} ${hours < 12 ? 'AM' : 'PM'}`;
  }

  public calculateTimestampSunRise(sunriseTimestamp: any): any {
    const sunriseDate = new Date(sunriseTimestamp * 1000);
    const hourss = sunriseDate.getHours();
    const minutess = sunriseDate.getMinutes();
    return `${hourss % 12}:${minutess < 10 ? '0' : ''}${minutess} ${hourss < 12 ? 'AM' : 'PM'}`;
  }

  //filter data of 6 days
}
