import { Component } from '@angular/core';
import { forkJoin, map, Subject, switchMap, takeUntil, timer } from 'rxjs';
import { SavedLocations } from './models/saved-locations';
import { DataService } from './services/data.service';
import { LocalstorageService } from './services/localstorage.service';
import { OpenWeatherService } from './services/open-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private unsub = new Subject<void>();



  constructor(private weatherService: OpenWeatherService,
    private localstorageService: LocalstorageService,
    private dataService: DataService) { }

  ngOnInit(): void {
    timer(0, 15000).pipe(
      takeUntil(this.unsub),
      switchMap(() => this.refreshCache())
    ).subscribe();
  }

  refreshCache() {
    
    // const homeLocation = this.dataService.homeLocation;
    // if(homeLocation !== null) {
    //   this.weatherService.searchByLocation(homeLocation.city.name)
    //   .subscribe(data => this.dataService.setHomeLocation(data));
    // }

    const locations = this.localstorageService.getSavedLocations();
    const list = Object.keys(locations);

    let observerList = list.map(item => this.weatherService.searchByLocation(item));

    return forkJoin(observerList).pipe(map(results => {
      const savedLocations = results
      .filter(item => item.cod === '200')
      .reduce((obj, item) => (obj[item.city.name] = item, obj) ,{} as SavedLocations);
      this.localstorageService.addAllSavedLocations(savedLocations);
      this.dataService.setSavedLocation(savedLocations);

    }));
  }

  toggleMode($event: Event) {

    const bodyElement = document.body;

    const toggle = $event.target as HTMLInputElement;
    toggle.checked ?
      bodyElement.classList.add('dark') :
      bodyElement.classList.remove('dark');
  }

  ngOnDestroy(): void {
    this.unsub.next();
    this.unsub.complete();
  }
}
