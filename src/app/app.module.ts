import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeBiereComponent } from './liste-biere/liste-biere.component';
import { BiereComponent } from './biere/biere.component';
import { NonTrouveComponent} from './non-trouve/non-trouve.component';

import { ModifierBiereComponent } from './modifier-biere/modifier-biere.component';
import { AjouterBiereComponent } from './ajouter-biere/ajouter-biere.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import {MatCardModule} from '@angular/material/card';
import { ModalModule } from './_modal';

import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    BiereComponent,
    ListeBiereComponent,
    NonTrouveComponent,
    ModifierBiereComponent,
    AjouterBiereComponent,
    ConfirmationDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ModalModule,
    MatDialogModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
