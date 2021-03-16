import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form/form.component';
import {RecapComponent} from "./recap/recap.component";
import {ListProductsComponent} from "./list-products/list-products.component";

const route: Routes = [
  {path: "", component: FormComponent},
  {path: "recap", component: RecapComponent},
  {path: "list-products", component: ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


