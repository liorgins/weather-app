import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { YourLocationsComponent } from './components/your-locations/your-locations.component';

const routes: Routes = [
{
  path: 'home',
  component: HomeComponent
},
{ 
  path: 'your-locations',
  component: YourLocationsComponent
},
{ path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
