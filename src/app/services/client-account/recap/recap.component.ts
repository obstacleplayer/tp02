import { Component, OnInit } from '@angular/core';
import {ClientModel} from '../../../../models/client.model';
import {Data} from '../form/provider';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  client: ClientModel;

  constructor(private data: Data)
  {
    this.client = this.data.storage;

  }

  ngOnInit(): void {
  }

}
