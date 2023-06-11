import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit{

  //country:Country = any;
  isError:boolean=false;

  constructor(
    private activatedRouther :ActivatedRoute,
    private countriesService :CountryService
    ){

  }
  ngOnInit(): void {
    this.activatedRouther.params.subscribe(
      ({id})=>{
        this.countriesService.getCountryByCode(id).subscribe(
          (country)=>{
             console.log(country);
             this.isError=false;
          },(error)=>{
            this.isError = true;
          }
        );
      }
    )
  }

}
