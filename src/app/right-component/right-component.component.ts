import { Component } from '@angular/core';
import { WeatherDataService } from '../service/weather-data.service';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.css']
})
export class RightComponentComponent {
  clickedItemData: any | null = null; // Initialize to null
  openOneDayCard = false
  constructor(public weatherData: WeatherDataService) {}

  public closeOneDayCard(){
    this.openOneDayCard = false
  }



  printId(data: any) {

    this.clickedItemData = data;
    this.openOneDayCard = true

  }
}
