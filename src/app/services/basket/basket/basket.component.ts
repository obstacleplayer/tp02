import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {Product} from "../../../../../shared/model/product.model";
import {DelProduct} from "../../../../../shared/action/DelProduct";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  numberArticle: number;
  article: Observable<Product[]>;
  isEmpty: Boolean = true;

  constructor(private store: Store) {
    this.store.select(state => state.basket.basket).subscribe( i => this.numberArticle = i.length);
    this.store.select(state => state.basket.basket).subscribe(i => this.isEmpty = i.length < 1);
    this.article = this.store.select(state => state.basket.basket);
  }

  ngOnInit() {
  }

  delClick(product){
    this.delProduct(product)
  }

  private delProduct(product) {
    this.store.dispatch(new DelProduct(product))

  }
}
