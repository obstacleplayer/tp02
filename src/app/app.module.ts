import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FormComponent } from './form/form.component';
import { RecapComponent } from './recap/recap.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {Data} from './form/provider';
import { PhonePipe } from './phone.pipe'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TetiereComponent,
    FormComponent,
    RecapComponent,
    PhonePipe
  ],
    imports: [
        BrowserModule,
        ClarityModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
  providers: [Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
