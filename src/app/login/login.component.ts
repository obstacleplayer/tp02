import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ListProductsService} from "../services/catalogue/list-products/list-products.service";
import {FormsLoginService} from "../forms-login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forms: FormGroup;

  constructor(private formsLoginService : FormsLoginService) {
    this.forms = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(){
  }


  onSubmit(){
    this.formsLoginService.login(this.forms)
  }

}
