import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../../../../models/product.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(environment.products);
  }
}
