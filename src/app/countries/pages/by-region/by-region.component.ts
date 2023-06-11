import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `button{margin-right:5px;}`
  ]
})
export class ByRegionComponent {
 regions :string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];
 activeRegtion:string='';
 countries:Country[]=[];

 constructor(private countryService: CountryService){
 }
 getCssClass(region:string):string{
  return (region===this.activeRegtion)
    ?'btn btn-primary'
    :'btn btn-outline-primary'
 }

 enableRegion(txtRegion:string){
  if(txtRegion===this.activeRegtion) return;
  this.activeRegtion= txtRegion;
  this.countries=[];
  this.countryService.searchByRegion(txtRegion)
  .subscribe(
    countries=>{
      this.countries=countries;
    })
 }

}
