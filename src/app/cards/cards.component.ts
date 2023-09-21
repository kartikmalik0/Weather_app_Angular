import { Component, Input } from '@angular/core';
import { WeatherDataService } from '../service/weather-data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() topText:any
  @Input() midText:any
  @Input () lastText: any
  @Input () status:any

  constructor(public weatherData:WeatherDataService){

  }

}
