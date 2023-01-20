import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiBieroService } from '../api-biero.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Biere } from '../biere';
import { ModalService } from '../_modal/modal.service';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-modifier-biere',
  templateUrl: './modifier-biere.component.html',
  styleUrls: ['./modifier-biere.component.scss']
})

export class ModifierBiereComponent {

  uneBiere: Biere;
  id: number;
  formModif: FormGroup;

  constructor(
    private apibiero: ApiBieroService,
    private route: ActivatedRoute,
    private routeur: Router,
    private modalService: ModalService,
    private dialog: MatDialog
  ) { }

  /*INIT*/
  ngOnInit() {

    this.formModif = new FormGroup(
      {
        id_biere: new FormControl(""),
        nom: new FormControl("", [Validators.required, Validators.minLength(3)]),
        brasserie: new FormControl("", [Validators.required, Validators.minLength(3)]),
        description: new FormControl("", [Validators.required, Validators.minLength(10)]),
        image: new FormControl(""),
        date_modif: new FormControl(""),
        date_ajout: new FormControl(""),
        actif: new FormControl(""),
      }
    );


    /*GET BIERE*/
    this.route.params.subscribe((params) => {
      console.log(params);
      this.id = params['id'];
      this.apibiero.getBiere(this.id).subscribe((biere: any) => {
        this.uneBiere = biere.data;
        this.formModif.setValue(this.uneBiere);
      })

    })

  }

  /*Modal service*/
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  /*Dialogue service*/
  openDialog(id: number) {
    console.log(id)

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Êtes-vous certain de vouloir supprimer cette bière?'
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteBiere(id);
      }
    });
  }


  /*POST BIERE*/
  modifierBiere(): void {
    if (this.formModif.status == "VALID") {

      this.uneBiere = this.formModif.value;
      this.apibiero.updateBiere(this.uneBiere).subscribe((data: any) => {
        
        if (data.data == this.uneBiere.id_biere) { 
          this.modalService.open('custom-modal-1');
          setTimeout(() => {                           
            this.modalService.close('custom-modal-1');
            this.routeur.navigate(['biere']);
          }, 5000);
        }

      });

    }

  }

/*DELETE BIERE*/
  deleteBiere(id: number): void {
    this.apibiero.supprimeBiere(id).subscribe((biere: any) => {
      console.log(biere.data);
      if (biere.data) { // Valider l'opération
        this.routeur.navigate(['biere']);
      }
    })

  }

}
