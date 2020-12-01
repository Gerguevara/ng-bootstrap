import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig , NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.scss']
})
export class JokerComponent {

  // este componente solo tiene 2 metodos de configuracion
  constructor(private config: NgbAccordionConfig) {
   // this.config.closeOthers = true; // cerrar los demas al abrir uno
   }

  noModificar($event: NgbPanelChangeEvent): void {
    if ($event.panelId === 'pane1') {
      $event.preventDefault();
    }
 }

}
