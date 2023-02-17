import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from 'src/app/models/weather-response';
import { IconRegistryService } from 'src/app/services/icon-registry.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit{
  

  @Input() data!: any;

  mainItem!: WeatherItem;
  additionalItems!: WeatherItem[];

  constructor(private iconRegistryService: IconRegistryService) {}

  ngOnInit(): void {
    [this.mainItem, ...this.additionalItems] = this.data.list;
  }


  toWeatherIcon(icon: string) {
    return this.iconRegistryService.codeToImage(icon);
  }

}
