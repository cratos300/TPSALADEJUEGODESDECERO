import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = "https://restcountries.eu/rest/v2/regionalbloc/usan";
  constructor(private http:HttpClient) { }

  obtenerImagenes(){
    return this.http.get(this.url);
  }
}
