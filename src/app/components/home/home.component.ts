import { Component, OnInit } from '@angular/core';
import {  catchError, Observable, of, switchMap } from 'rxjs';
import { WeatherData, WeatherItem } from 'src/app/models/weather-response';
import { DataService } from 'src/app/services/data.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { OpenWeatherService } from 'src/app/services/open-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  search = '';

  mainItem!: WeatherItem;
  additionalItems!: WeatherItem[];

  error = false;

  data$!: Observable<WeatherData | null>;

  currentPosition$ = this.currentLocation;

  constructor(private weatherService: OpenWeatherService,
    private localstorageService: LocalstorageService,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.data$ = this.dataService.homeLocationData$;
    this.dataService.homeLocationData$.subscribe({
      next: (data) => {
        if (this.isWeatherData(data)) {
          if(data.cod === '200') {
            [this.mainItem, ...this.additionalItems] = data.list;
          } else {
            this.error = true;
          }
        } else {
          this.currentPosition$.pipe(
            switchMap((res: GeolocationPosition) =>
              this.weatherService.searchByLongLat(res.coords)),
            catchError(e => {
              console.log(e);
              this.dataService.setHomeLocation(null);
              this.error = true;
              return of({} as WeatherData);
            })
          ).subscribe({
            next: (data: WeatherData) => {
              console.log(data.cod)
              this.dataService.setHomeLocation(data);
            }
          });
        }
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete .data$.subscribe')
    });
  }

  searchClicked() {
    this.error = false;
    this.weatherService.searchByLocation(this.search).subscribe({
      next: (data) => {
       this.dataService.setHomeLocation(data);
      },
      error: (e) => {
        console.log('searchByLongLat error', e);
        this.dataService.setHomeLocation(null);
        this.error = true;
      },
      complete: () => {
        console.log('complete searchByLocation for ', this.search);
        this.search = '';
      }
    });
  }

  saveToLocations() {
    if(this.error) {
      return;
    }

    let location = this.dataService.homeLocation;
    if (this.isWeatherData(location)) {
      this.localstorageService.addToSavedLocations(location);
    }
  }

  get currentLocation(): Observable<GeolocationPosition> {
    return new Observable(observer => {
      navigator.geolocation.getCurrentPosition(
        (location: GeolocationPosition) => {
          observer.next(location);
        },
        err => observer.error(err))
    });
  }

  isWeatherData(data: WeatherData | null): data is WeatherData {
    return data !== null;
  }
}