import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v2';

  public searchCountry(txtSearch:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${txtSearch}`;
    return this.http.get<Country[]>(url);
  }

  
  public searchByCapital(txtSearch:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${txtSearch}`;
    return this.http.get<Country[]>(url);
  }

  public getCountryByCode(txtCountryCode:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${txtCountryCode}`;
    return this.http.get<Country>(url);
  }

  
  public searchByRegion(txtSearch:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${txtSearch}`;
    return this.http.get<Country[]>(url);
  }

  
  constructor(private http:HttpClient) { }
}
