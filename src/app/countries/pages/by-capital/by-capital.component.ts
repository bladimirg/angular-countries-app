import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {
  isError:boolean=false;
  txtInput:string='';
  countries:Country[]=[];
  placeHolder:string = 'Search Capital';

  public suggestions(txtInput:string){
    this.isError = false;
  }
  
  public search(txtInput:string){
    this.txtInput = txtInput;
    this.countryService
      .searchByCapital(this.txtInput)
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
