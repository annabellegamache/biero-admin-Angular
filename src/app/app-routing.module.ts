import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnteteComponent } from './entete/entete.component';

import { ListeBiereComponent } from './liste-biere/liste-biere.component';

import {ModifierBiereComponent } from './modifier-biere/modifier-biere.component';
import {AjouterBiereComponent} from './ajouter-biere/ajouter-biere.component';
import { BiereComponent } from './biere/biere.component';
import { NonTrouveComponent} from './non-trouve/non-trouve.component';

const routes: Routes = [
  {path: "", component:ListeBiereComponent},
  {path: "biere", component:ListeBiereComponent},
  {path: "biere/add", component:AjouterBiereComponent},
  {path: "biere/edit/:id", component:ModifierBiereComponent},
  //{path: "**", redirectTo: ""},
  {path: "**", component:NonTrouveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
