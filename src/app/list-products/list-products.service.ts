import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/produit";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts() : Observable<Produit[]>
  {
    return this.httpClient.get<Produit[]>(environment.products);
  }
}
