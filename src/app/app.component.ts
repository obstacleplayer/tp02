import { Component } from '@angular/core';
import {ClientModel} from '../models/client.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp02';


  client: ClientModel = new ClientModel();


}
