import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FormComponent } from './services/client-account/form/form.component';
import { RecapComponent } from './services/client-account/recap/recap.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {Data} from './services/client-account/form/provider';
import { PhonePipe } from './phone.pipe';
import { FilterProductsComponent } from './services/catalogue/filter-products/filter-products.component';
import { ListProductsComponent } from './services/catalogue/list-products/list-products.component'
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";


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
        HttpClientModule,
        NgxsModule.forRoot()
    ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
