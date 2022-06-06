import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; submitButton: string, cancelButton?: string }
  ) {}

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close('cancel');
  }
  confirm() {
    this.dialogRef.close('confirm');
  }
}
