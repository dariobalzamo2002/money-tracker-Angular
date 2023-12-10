import { Component, Input, OnInit } from '@angular/core';
import { Transazione } from '../models/transazione.model';

@Component({
  selector: 'app-movimenti',
  templateUrl: './movimenti.component.html',
  styleUrls: ['./movimenti.component.scss']
})
export class MovimentiComponent implements OnInit {

  @Input('trans_list') movimenti: Transazione[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
