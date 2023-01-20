import { Component, ViewChild } from '@angular/core';
import { ApiBieroService } from '../api-biero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../_modal/modal.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Biere } from '../biere';


@Component({
  selector: 'app-liste-biere',
  templateUrl: './liste-biere.component.html',
  styleUrls: ['./liste-biere.component.scss']
})



export class ListeBiereComponent {


  biere: Biere[] = [];
  id: number;
  columnsToDisplay: string[] = ['id', 'nom', 'brasserie', 'date_ajout', 'date_modif', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Biere>();
  filterTerm!: string;


  constructor(
    private apibiero: ApiBieroService,
    private route: ActivatedRoute,
    private routeur: Router,
    private modalService: ModalService,
    private dialog: MatDialog
  ) { }

  @ViewChild('biereTbSort') biereTbSort = new MatSort();


  ngAfterViewInit() {
    this.dataSource.sort = this.biereTbSort;
  }

  ngOnInit(): void {
    //Va cherche la liste des bières
    this.apibiero.getBieres().subscribe((bieres) => {
      this.biere = bieres.data;
      this.dataSource.data = this.biere;
    });

  }


  /*filtre de recherche*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*Supprimer biere*/
  deleteBiere(id: number): void {
    /*Supprime une bière*/
    this.apibiero.supprimeBiere(id).subscribe((biere: any) => {
      console.log(biere.data);
      if (biere.data) { // Valider l'opération

        this.apibiero.getBieres().subscribe((bieres) => {
          this.biere = bieres.data;
          //console.log(bieres);
          this.dataSource.data = this.biere;
        });

      }
    })

  }

  /*Confirmation dialogue*/
  /* ref: https://www.javachinna.com/angular-confirmation-dialog/ */
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


}

