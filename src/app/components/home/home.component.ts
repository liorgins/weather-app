import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, switchMap } from 'rxjs';
import { WeatherData, WeatherItem } from 'src/app/models/weather-response';
import { IconRegistryService } from 'src/app/services/icon-registry.service';
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

  data$ = new BehaviorSubject<WeatherData | null>(null);

  currentPosition$ = this.currentLocation;

  constructor(private weatherService: OpenWeatherService,
    private iconRegistrySrervice: IconRegistryService,
    private localstorageService: LocalstorageService) { }

  ngOnInit(): void {

    this.data$.subscribe({
      next: (data) => {
        if (this.isWeatherData(data)) {
          [this.mainItem, ...this.additionalItems] = data.list;
        }
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete .data$.subscribe')
    });

    const cachedLocation = this.localstorageService.getHomeLocation();
    if (cachedLocation) {
      this.data$.next(cachedLocation);
    } else {
      this.currentPosition$.pipe(
        switchMap((res: GeolocationPosition) =>
          this.weatherService.searchByLongLat(res.coords)),
        catchError(e => {
          console.log(e);
          this.data$.next(null);
          this.error = true;
          return of({} as WeatherData);
        })
      ).subscribe({ next: (data: WeatherData) => this.data$.next(data) });
    }

    


  }

  searchClicked() {
    this.weatherService.searchByLocation(this.search).subscribe({
      next: (data) => this.data$.next(data),
      error: (e) => {
        console.log('searchByLongLat error', e)
        this.data$.next(null);
        this.error = true;
      },
      complete: () => {
        console.log('complete searchByLocation for ', this.search);
        this.search = '';
      }
    });
  }

  saveToLocations() {
    let location = this.data$.getValue();
    if (this.isWeatherData(location)) {
      this.localstorageService.addToSavedLocations(location);
    }
  }

  toWeatherIcon(icon: string) {
    return this.iconRegistrySrervice.codeToImage(icon);
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