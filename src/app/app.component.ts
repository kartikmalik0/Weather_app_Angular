import { Component } from '@angular/core';
import { WeatherDataService } from './service/weather-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cityName = 'bhiwani'
  title = 'Weather-app';
 
}
