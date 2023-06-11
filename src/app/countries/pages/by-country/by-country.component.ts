import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  isError:boolean=false;
  txtInput:string='';
  countries:Country[]=[];
  placeHolder:string = 'Search Country';

  public suggestions(txtInput:string){
    this.isError = false;
  }
  
  public search(txtInput:string){
    this.txtInput = txtInput;
    this.countryService
      .searchCountry(this.txtInput)
      .subscribe(
          (countries)=>{
            this.countries = countries;
            this.isError = false;
          },
          (error)=>{
            this.isError=true;
            this.countries = [];
          }
      );
  }
  constructor(private countryService:CountryService){
  }
}