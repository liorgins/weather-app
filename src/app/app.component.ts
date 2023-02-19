import { Component } from '@angular/core';
import { forkJoin, map, of, Subject, switchMap, takeUntil, tap, timer } from 'rxjs';
import { SavedLocations } from './models/saved-locations';
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
    private localstorageService: LocalstorageService) { }

  ngOnInit(): void {
    timer(0, 15000).pipe(
      takeUntil(this.unsub),
      switchMap(() => this.refreshCache())
    ).subscribe();
  }

  refreshCache() {
    console.log('Refreshing...');
    
    const homeLocation = this.localstorageService.getHomeLocation();
    if(homeLocation !== null) {
      this.weatherService.searchByLocation(homeLocation.city.name).subscribe()
    }

    const locations = this.localstorageService.getSavedLocations();
    const list = Object.keys(locations);

    let observerList = list.map(item => this.weatherService.searchByLocation(item));

    return forkJoin(observerList).pipe(map(results => {
      const savedLocations = results
      .filter(item => item.cod === '200')
      .reduce((obj, item) => (obj[item.city.name] = item, obj) ,{} as SavedLocations);
      console.log(savedLocations);
      this.localstorageService.addAllSavedLocations(savedLocations);
    }));
  }

  toggleMode($event: Event) {

    const bodyElement = document.body;
    bodyElement.classList.add('dark');

    const toggle = $event.target as HTMLInputElement;
    toggle.checked ?
      bodyElement.classList.remove('dark') :
      bodyElement.classList.add('dark');
  }

  ngOnDestroy(): void {
    this.unsub.next();
    this.unsub.complete();
  }
}
