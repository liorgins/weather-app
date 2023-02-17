import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { WeatherData } from '../models/weather-response';
import { Observable} from 'rxjs';


const baseApi = 'https://api.openweathermap.org/data/2.5/forecast';
const appId = 'bdae69ad230fd93d094e5d0819214cbb';
const cnt = 5;
const units = 'metric';


@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http: HttpClient) {}

  searchByLocation(location: string) {
    let params = new HttpParams().append('q', location);

    return this.search(params);
  }

  searchByLongLat({longitude, latitude}: GeolocationCoordinates) {
    let params = new HttpParams()
      .append('lon', longitude)
      .append('lat', latitude);

    return this.search(params);
  }

  private search(httpParams: HttpParams) {
    httpParams = httpParams
    .append('appId', appId)
    .append('units', units)
    .append('cnt', cnt)

    return this.http.get<WeatherData>(baseApi, {params: httpParams});
  }

}
