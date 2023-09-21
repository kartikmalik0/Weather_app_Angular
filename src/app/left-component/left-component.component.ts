import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeatherDataService } from '../service/weather-data.service';

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrls: ['./left-component.component.css']
})
export class LeftComponentComponent {
  @Output() getCityEvent = new EventEmitter<any>();

  constructor(public weatherData: WeatherDataService) { }
  cityName: string = '';

  setCity(cityName: string) {
    // Emit the city using your event emitter or handle it as needed
    this.getCityEvent.emit(cityName)

  }

  clearCity() {
    this.cityName=''
   this.setCity(this.cityName)
  }

  // code for digital clock

  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  public hour: any
  public date = new Date()
  public minute: any
  public second: any
  public ampm: any
  public day: any

  ngOnInit() { // Corrected typo from ngOnInt to ngOnInit
    setInterval(() => {
      const date = new Date()
      this.updateDate(date)
      this.day = this.daysArray[this.date.getDay()]
    }, 1000)

  }

  public updateDate(date: any) { // Use the date parameter
    const hours = date.getHours() // get the hours from the date
    this.ampm = hours >= 12 ? 'PM' : 'AM'
    this.hour = hours % 12 // 24 hours to 12
    this.hour = this.hour ? this.hour : 12 // if hours is 0, convert it into 12
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour

    const minutes = date.getMinutes()
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString()

    const seconds = date.getSeconds()
    this.second = seconds < 10 ? '0' + seconds : seconds.toString()
  }
}
