import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SavedLocations } from '../models/saved-locations';
import { WeatherData } from '../models/weather-response';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private savedLocations$ = new BehaviorSubject<SavedLocations>({});
  savedLocationsData$: Observable<SavedLocations> = this.savedLocations$.asObservable();

  private homeLocation$ = new BehaviorSubject<WeatherData | null>(null);
  homeLocationData$: Observable<WeatherData | null> = this.homeLocation$.asObservable();
 
  constructor() { }
 
  setSavedLocation(data: SavedLocations) {
    this.savedLocations$.next(data);
  }

  setHomeLocation(data: WeatherData| null) {
    this.homeLocation$.next(data);
  }

  get savedLocations(): SavedLocations {
    return this.savedLocations$.getValue();
  }

  get homeLocation(): WeatherData | null {
    return this.homeLocation$.getValue();
  }
}
