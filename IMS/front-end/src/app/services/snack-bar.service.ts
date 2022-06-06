import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  refSnack: any;
  constructor(
    private snackBar: MatSnackBar,
  ) {}

  // success, warning, error, info

  openSnackBar(
    message: string,
    dialogType: 'info' | 'success' | 'warning' | 'error' = 'info',
    position: 'top' | 'bottom' = 'bottom'
  ) {
    let customClass = 'info-snackbar';
    switch (dialogType) {
      case 'success': {
        customClass = 'success-snackbar';
        break;
      }
      case 'warning': {
        customClass = 'warn-snackbar';
        break;
      }
      case 'error': {
        customClass = 'danger-snackbar';
        break;
      }
      case 'info': {
        customClass = 'info-snackbar';
        break;
      }

      default:
        break;
    }
    this.refSnack = this.snackBar.open(message, 'X', {
      horizontalPosition: 'right',
      verticalPosition: position,
      panelClass: customClass,
      duration: 10000,
    });
    this.refSnack.onAction().subscribe(async () => {
      this.refSnack.dismiss();
    });
  }

}