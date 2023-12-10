import { Component, OnInit } from '@angular/core';
import { Transazione } from '../models/transazione.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movimenti: Transazione[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public addTransazione(movimento: Transazione) {
    this.movimenti.push(movimento);
  }
}
