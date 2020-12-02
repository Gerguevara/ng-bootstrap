import { Component, OnInit } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.scss']
})
export class JokerComponent {


  constructor(private configAlert: NgbAlertConfig) {

   // configuraciones de alerts
    configAlert.type = 'success' ;
    configAlert.dismissible = false;
   }



  // foprma chafa
  cerrar( alerta: string) {
    // tslint:disable-next-line: prefer-const
    let aler = (document.getElementById(alerta)) ? document.getElementById(alerta) : null;
    if (aler) {
      aler.style.display = 'none';
    }


  }



}


