import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ViewRegionComponent } from './pages/view-region/view-region.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByRegionComponent,
    ViewCountryComponent,
    ViewRegionComponent,
    ByCountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ByCountryComponent,
    ByCapitalComponent,
    ViewCountryComponent,
    ByRegionComponent
  ]
})
export class CountriesModule { }
