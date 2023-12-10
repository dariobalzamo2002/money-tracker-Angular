import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { Transazione } from '../models/transazione.model';
import { Conto } from '../models/conto.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // PROPRIETA' 
  @Output() sendTransazione = new EventEmitter<Transazione>();

  public myConto!: Conto;
  public transazione!: Transazione;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.myConto = new Conto();
    this.myConto.saldo = 0;
  }


  // OPERAZIONI 
  public addTransaction(): void {
    // Apre il modale FormComponent utilizzando il servizio di MatDialog. 
    const dialogRef = this.dialog.open(FormComponent, { width: '500px' });
    /* 
      Quando il dialogo FormComponent viene chiuso, questo blocco di codice è eseguito. 
      afterClosed() restituisce un'istanza di MatDialogRef (Observable) su cui possiamo sottoscriverci per ottenere i dati 
      inviati dal dialogo quando viene chiuso.
    */
    dialogRef.afterClosed().subscribe(
      (result: Transazione) => { // Prelevo i dati inizializzo l'oggetto transazione con i valori ricevuti dall'Observable
        this.transazione = {
          causale: result.causale,
          importo: result.importo,
          isEntry: result.isEntry
        };
        const valoreTransazione: number = this.transazione.isEntry ? this.transazione.importo : -this.transazione.importo;
        this.myConto.saldo += valoreTransazione; // Aggiorna il saldo
        this.sendEventTransaction(this.transazione);
      }
    );
  }

  public sendEventTransaction(transazione: Transazione) {
    this.sendTransazione.emit(transazione);
  }

}