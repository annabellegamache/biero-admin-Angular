import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { ListeBiere } from './liste-biere';

import { Biere } from './biere';
import { BiereComponent } from './biere/biere.component';



@Injectable({
  providedIn: 'root'
})
export class ApiBieroService {

  biere!:Biere[];
  url:string ="http://127.0.0.1:8000/webservice/php/biere/";
  httpOptions = {
    headers : new HttpHeaders({
      'Content-type' : "application/json",
      'Authorization' : 'Basic ' + btoa('biero:biero')
    })
  }
  

  constructor(private http:HttpClient) {  }

  

  //get liste des bieres
  getBieres():Observable<ListeBiere>{
    return this.http.get<ListeBiere>(this.url);
  }

  // get Une biere
   getBiere(id:number):Observable<Biere>{
    return this.http.get<Biere>(this.url + id);
  }

  // post une biere
  updateBiere(biere:Biere):Observable<any>{
    return this.http.post<Biere>(this.url + biere.id_biere, biere, this.httpOptions);
  }

  // put une biere
  ajoutBiere(biere:Biere):Observable<any>{
    console.log(biere);
    return this.http.put<Biere>(this.url, biere, this.httpOptions);
  }

  // delete une biere
  supprimeBiere(id:number):Observable<any>{
    return this.http.delete<Biere>(this.url + id, this.httpOptions);
  }

}
