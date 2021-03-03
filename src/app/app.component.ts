import { Component } from '@angular/core';
import {Client} from './client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp02';


  client: Client = new Client();


}
