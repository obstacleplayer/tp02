import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FormComponent } from './form/form.component';
import { RecapComponent } from './recap/recap.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {Data} from './form/provider';
import { PhonePipe } from './phone.pipe';
import { FilterProductsComponent } from './filter-products/filter-products.component';
import { ListProductsComponent } from './list-products/list-products.component'
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TetiereComponent,
    FormComponent,
    RecapComponent,
    PhonePipe,
    FilterProductsComponent,
    ListProductsComponent
  ],
    imports: [
        BrowserModule,
        ClarityModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
