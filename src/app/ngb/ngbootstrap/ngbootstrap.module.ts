import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


const components = [ NgbAccordionModule];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],
  exports: [components]
})
export class NgbootstrapModule { }
