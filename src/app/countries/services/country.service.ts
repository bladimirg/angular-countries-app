import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v2';

  get HttpParams(){
    return new HttpParams()
    .set('fields','name,capital,alpha2Code,flag,population');
  };


  public searchCountry(txtSearch:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${txtSearch}`;
    return this.http.get<Country[]>(url,{params:this.HttpParams});
  }

  
  public searchByCapital(txtSearch:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${txtSearch}`;
    return this.http.get<Country[]>(url,{params:this.HttpParams});
  }

  public getCountryByCode(txtCountryCode:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${txtCountryCode}`;
    return this.http.get<Country>(url);
  }
  
  public searchByRegion(txtSearch:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${txtSearch}`;
    return this.http.get<Country[]>(url,{params:this.HttpParams})
    .pipe(
      tap(console.log)
    );
  }

  
  constructor(private http:HttpClient) { }
}
