import { Component, OnInit } from '@angular/core';
import { WeatherData, WeatherItem } from 'src/app/models/weather-response';
import { IconRegistryService } from 'src/app/services/icon-registry.service';
import { OpenWeatherService } from 'src/app/services/open-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  search = '';
  data!: WeatherData;

  mainItem!: WeatherItem;
  additionalItems!: WeatherItem[];

  constructor(private weatherService: OpenWeatherService, private iconRegistrySrervice: IconRegistryService) { }
  
  
  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      this.weatherService.searchByLongLat(position.coords).subscribe({
        next: (data) => this.handleNewData(data),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    }, (err)=>{});

    // fetch cache data for current location and show it.

    // if none exists fetch from api

  }

  searchClicked() {
    this.weatherService.searchByLocation(this.search).subscribe({
      next: (data) => this.handleNewData(data),
      error: (e) => console.error(e),
      complete: () => {
        this.search = '';
      }
    });
  }

  toWeatherIcon(icon: string) {
    return this.iconRegistrySrervice.codeToImage(icon);
  }

  handleNewData(data: WeatherData): void {
    this.data = data;
    [this.mainItem, ...this.additionalItems] = data.list;
  }
}
