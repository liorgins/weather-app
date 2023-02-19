import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SavedLocations } from 'src/app/models/saved-locations';
import { WeatherData } from 'src/app/models/weather-response';
import { DataService } from 'src/app/services/data.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';



@Component({
  selector: 'app-your-locations',
  templateUrl: './your-locations.component.html',
  styleUrls: ['./your-locations.component.scss']
})
export class YourLocationsComponent implements OnInit {

  savedLocations!: SavedLocations;

  constructor (private localstorageService: LocalstorageService,
    private dataService: DataService) {}

  ngOnInit(): void {
    this.savedLocations = this.localstorageService.getSavedLocations();
    console.log(this.savedLocations)
    this.dataService.savedLocationsData$.subscribe(locations => {
      console.log('got locations from service data');
      this.savedLocations = locations;
    })
  }

  trackByFn(index: number, item: KeyValue<string, WeatherData>): number {
    return item.value.city.id;
 }  
  

}
