import { Injectable, OnInit } from '@angular/core';
import * as iconMap from '../../assets/icon-map.json';


const iconPath = 'assets/icons/';
const iconData: any = {
  "01n": "clear",
  "01d": "sun",
  "02n": "few-clouds",
  "02d": "few-clouds",
  "03n": "clouds",
  "03d": "clouds",
  "04n": "clouds",
  "04d": "clouds",
  "09n": "rain",
  "09d": "rain",
  "10n": "rain",
  "10d": "rain",
  "11n": "thunderstorm",
  "11d": "thunderstorm",
  "13n": "snow",
  "13d": "snow"
  
}
@Injectable({
  providedIn: 'root'
})
export class IconRegistryService  {

  registryMap = new Map<string, string>();

  constructor () {
    const iconKeys = Object.keys(iconData);
    iconKeys.forEach(key => this.registryMap.set(key, iconData[key]))
    console.log(this.registryMap);
  }


  codeToImage(code: string): string {
    let name = this.registryMap.has(code.toString()) ?
     this.registryMap.get(code.toString()) : 'location-mark';
    return `${iconPath}${name}.svg`
  }
}
