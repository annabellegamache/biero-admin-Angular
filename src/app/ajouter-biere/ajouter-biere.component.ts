import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiBieroService } from '../api-biero.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Biere } from '../biere';
import { ModalService } from '../_modal/modal.service';

@Component({
  selector: 'app-ajouter-biere',
  templateUrl: './ajouter-biere.component.html',
  styleUrls: ['./ajouter-biere.component.scss']
})

export class AjouterBiereComponent {

  uneBiere: Biere;
  id: number;
  formAjout: FormGroup;


  constructor(
    private apibiero: ApiBieroService, 
    private route: ActivatedRoute, 
    private routeur: Router, 
    private modalService: ModalService
  ) { }

  /*INIT*/
  ngOnInit() {

    this.formAjout = new FormGroup(
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
      this.apibiero.getBiere(this.id).subscribe((biere: any) => {
        this.uneBiere = biere.data;
      })
    })

  }


  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  /*POST BIERE*/
  ajouterBiere(): void {
    console.log(this.formAjout);
    if (this.formAjout.status == "VALID") {
      this.uneBiere = this.formAjout.value;
      this.apibiero.ajoutBiere(this.uneBiere).subscribe((data: any) => {
        if (data.data) {
          this.modalService.open('custom-modal-1');
          setTimeout(() => {                           // <<<---using ()=> syntax
            this.modalService.close('custom-modal-1');
            this.routeur.navigate(['biere']);
          }, 5000);
        }
      });
    }
  }

}
