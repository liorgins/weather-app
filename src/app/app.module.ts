import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { YourLocationsComponent } from './components/your-locations/your-locations.component';
import { LocationComponent } from './components/location/location.component';
import { LocalTimePipe } from './pipes/local-time.pipe';
import { CodeToImagePipe } from './pipes/code-to-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YourLocationsComponent,
    LocationComponent,
    LocalTimePipe,
    CodeToImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
