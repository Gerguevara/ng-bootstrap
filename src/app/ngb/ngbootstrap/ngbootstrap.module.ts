import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


const components: any[] = [ NgbAlertModule];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],
  exports: [components]
})
export class NgbootstrapModule { }
