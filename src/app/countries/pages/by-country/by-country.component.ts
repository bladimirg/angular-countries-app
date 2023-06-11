import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `li{
      cursor:pointer;
    }`
  ]
})
export class ByCountryComponent {
  isError:boolean=false;
  txtInput:string='';
  countries:Country[]=[];
  countriesSugestion:Country[]=[];
  placeHolder:string = 'Search Country';

  public suggestions(txtInput:string){
    this.countriesSugestion = [];
    this.isError = false;


    if(txtInput.length<=2) return;
    this.countryService.searchCountry(txtInput).subscribe(
      countries=>{
        this.countriesSugestion = countries.slice(0,5);
      },
      error=>this.countriesSugestion=[]
    );
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