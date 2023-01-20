/*ref https://github.com/cornflourblue/angular-10-custom-modal*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ModalComponent],
    exports: [ModalComponent]
})
export class ModalModule { }