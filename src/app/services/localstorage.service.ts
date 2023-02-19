import { Injectable } from '@angular/core';
import { SavedLocations } from '../models/saved-locations';
import { WeatherData } from '../models/weather-response';
import { DataService } from './data.service';

const SAVED_LOACATIONS_KEY = 'savedLocations';
const HOME_LOCATION_KEY = 'homeLocation';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  
  constructor(private dataService: DataService) { }

  getHomeLocation(): WeatherData | null {
    const homeLocation = localStorage.getItem(HOME_LOCATION_KEY);
    if(this.isString(homeLocation)) {
      return this.parseData<WeatherData>(homeLocation);
    }
    return null;
  }

  setHomeLocation(weatherData: WeatherData): void {
    this.setData(HOME_LOCATION_KEY, weatherData);
  }

  addToSavedLocations(location: WeatherData): void {
    let locations = this.getSavedLocations();
    locations[location.city.name] = location;
    const data = JSON.stringify(locations);
    localStorage.setItem(SAVED_LOACATIONS_KEY, data);
    this.dataService.setSavedLocation(locations);
  }

  addAllSavedLocations(savedLocations: SavedLocations): void {
    this.setData(SAVED_LOACATIONS_KEY, savedLocations);
  }

  getSavedLocations(): SavedLocations {
    let defaultLocations = {} as SavedLocations;
    let locations = localStorage.getItem(SAVED_LOACATIONS_KEY);
    if(this.isString(locations)) {
      const savedLocations = this.parseData<SavedLocations>(locations);
      return savedLocations !== null? savedLocations : defaultLocations;
    }
    return defaultLocations;
  }

  private isString(str: string | null): str is string {
    return typeof str === 'string';
  }

  private setData(key: string, data: unknown) {
    let strData = JSON.stringify(data);
    localStorage.setItem(key, strData);
  }
  private parseData = <T>(data: string): T | null => {
    try {
      return JSON.parse(data) as T;
    } catch (error) {
      // TODO - add error handling
      console.log(error);
      return null;
    }
  }
} 
