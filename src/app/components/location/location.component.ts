import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from 'src/app/models/weather-response';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit{
  

  @Input() data!: any;

  mainItem!: WeatherItem;
  additionalItems!: WeatherItem[];

  constructor() {}

  ngOnInit(): void {
    [this.mainItem, ...this.additionalItems] = this.data.list;
  }

}
