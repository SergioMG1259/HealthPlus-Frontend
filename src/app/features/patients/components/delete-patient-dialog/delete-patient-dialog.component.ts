import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-delete-patient-dialog',
  templateUrl: './delete-patient-dialog.component.html',
  styleUrls: ['./delete-patient-dialog.component.css']
})
export class DeletePatientDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletePatientDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:number,
  private _patientService: PatientService) { }

  onCloseClick(): void {
    this.dialogRef.close()
  }

  onClickDelete(): void {
    this.deletePatient()
  }

  deletePatient(): void {
    this.dialogRef.close(true)
  }

  ngOnInit(): void {
  }

}
