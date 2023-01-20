/*ref: https://www.javachinna.com/angular-confirmation-dialog/ */

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 
@Component({templateUrl: 'confirmation-dialog.component.html'})
export class ConfirmationDialogComponent {
    message: string = "Êtes-vous certain de voulair supprimer?"
    confirmButtonText = "Oui"
    cancelButtonText = "Annuler"
    constructor(
      @Inject(MAT_DIALOG_DATA) private data: any, 
      private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
        if(data){
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
                this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
            }
        }
    }
 
    onConfirmClick(): void {
        this.dialogRef.close(true);
    }
}
