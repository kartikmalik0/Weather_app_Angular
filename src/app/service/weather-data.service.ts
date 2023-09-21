import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  public leftData: any;
  public rightData: any;
  public right_bottom_data: any;
  public success = true;
  public errorStatus: any;
  public url: any;
  public isLoading = false; // Initialize isLoading to false

  constructor(public http: HttpClient, public toastr: ToastrService) {}

  getWeatherData(city: any) {
    this.isLoading = true; // Set isLoading to true when making the HTTP request
    this.url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f4aacb330f0fa8f265170d91e9eeb80a`;

    return this.http.get(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.toastr.error('Cannot Find City');
        }
        return [];
      }),
      finalize(() => {
        this.isLoading = false; // Set isLoading to false when the HTTP request completes
      })
    );
  }
}
