import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { WeatherData } from '../models/weather-response';


const baseApi = 'https://api.openweathermap.org/data/2.5/forecast';
const appId = 'bdae69ad230fd93d094e5d0819214cbb';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  search(location: string) {

    const options = { params: new HttpParams().set('q', location)
                            .set('appId', appId)
                            .set('units', 'metrics')
                            .set('cnt', 5)}
    return this.http.get<WeatherData>(baseApi, options);
  }

}
