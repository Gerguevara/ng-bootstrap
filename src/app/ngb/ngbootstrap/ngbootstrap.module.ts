import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


const components: any[] = [ NgbModalModule];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],
  exports: [components]
})
export class NgbootstrapModule { }
