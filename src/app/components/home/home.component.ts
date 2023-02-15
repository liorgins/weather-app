import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-response';
import { OpenWeatherService } from 'src/app/services/open-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  search = '';
  data!: WeatherData;

  constructor(private weatherService: OpenWeatherService) { }
  
  
  ngOnInit(): void {
    // fetch cache data for current location and show it.

    // if none exists fetch from api

  }

  searchClicked() {
    this.weatherService.search(this.search).subscribe({
      next: (data) => this.data = data,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }
}
