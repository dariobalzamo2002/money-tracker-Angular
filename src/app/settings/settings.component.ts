import { Component, OnInit } from '@angular/core';
import { Conto } from '../models/conto.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public myConto!: Conto;
  hide = true;

  constructor() { }

  ngOnInit(): void {
    this.myConto = new Conto();
  }

}
