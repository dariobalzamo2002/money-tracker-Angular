import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public profileForm = this.fb.group(
    {
      causale: [''],
      importo: 0,
      isEntry: false
    }
  );

  constructor(private dialogRef: MatDialogRef<FormComponent>, private fb: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit(): void {
    // Alla chusura del modale Invia i dati del form al chiamante
    this.dialogRef.close(this.profileForm.value);
  }
}
