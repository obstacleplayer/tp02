import { Component, OnInit } from '@angular/core';
import {Client} from '../model/client';
import {Data} from '../form/provider';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  client: Client;

  constructor(private data: Data)
  {
    this.client = this.data.storage;

  }

  ngOnInit(): void {
  }

}
