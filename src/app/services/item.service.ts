import { Injectable } from "@angular/core";
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';

import { map } from 'rxjs/operators';
import {Item} from "../models/item.model";
import "rxjs/add/operator/map";
import { Observable } from "rxjs";
import { CachcingServiceBase } from "./caching.service";


@Injectable({
  providedIn: 'root'
})
export class ItemService  {

    private items: Observable<Item[]>;

    constructor(private http: HttpClient) { 
       
    }

    

public all(): Observable<Item[]> {

    return this.http.get<Item[]>("http://localhost:3000/v1/expenses");
    

   

  }

/**
 * 
 *    map((response)=>response.json().map((item) =>{
                                  let model=new Item();
                                  model.updateFrom(item);
                                  return model;
                                  }));
  }
 * 
 */




ngOnInit() {
  console.log(" class ItemService-- oninit");
  this.http.get('http://localhost:3000/v1/expenses');
  
  console.log(this.http.get<any>('http://localhost:3000/v1/expenses'));
}      

/*
  public all1(): Observable<Item[]> {
    return this.http.get("http://localhost:8900/api/v1/products").
    map((response) => response.json().map((item) => {
                                      let model = new Item();
                                    model.updateFrom(item);
                                    return model; }));

  }*/

}