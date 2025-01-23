import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ConfirmDialogData {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: string;
  cancelColor?: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  public title: string;
  public message: string;
  public confirmText: string;
  public cancelText: string;
  public confirmColor: string;
  public cancelColor: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    {
      title = '',
      message = 'Deseja realmente executar esta ação?',
      confirmText = 'Sim',
      cancelText = 'Não',
      confirmColor = 'accent',
      cancelColor = 'warn',
    }: ConfirmDialogData
  ) {
    this.title = title;
    this.message = message;
    this.confirmText = confirmText;
    this.cancelText = cancelText;
    this.confirmColor = confirmColor;
    this.cancelColor = cancelColor;
  }

  public confirm(): void {
    this.dialogRef.close(true);
  }

  public cancel(): void {
    this.dialogRef.close(false);
  }
}
