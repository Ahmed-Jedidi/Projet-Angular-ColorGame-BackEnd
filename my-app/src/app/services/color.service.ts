import { Color } from './../model/color.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//API REST
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})

export class ColorService {



  //API REST
  apiURL: string = 'http://localhost:8085/colorBackEnd/api';
  colors !: Color[];
  //API REST

  constructor(private router: Router,
              //API REST 
              private http: HttpClient) { }



  listeColors(): Observable<Color[]> {
    return this.http.get<Color[]>(this.apiURL);
  }

  ajouterColor(col: Color): Observable<Color> {
    return this.http.post<Color>(this.apiURL, col, httpOptions);
  }
}
