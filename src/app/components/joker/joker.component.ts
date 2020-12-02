import { OtherComponent } from './../other/other.component';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.scss']
})
export class JokerComponent {
  constructor(private modalService: NgbModal) { }

  open(): void{
    /** size : sm, ls , xl
     * centered: true
     * scrollable : true
     *
    */
    const modalRef = this.modalService.open(OtherComponent, {centered: true});
    modalRef.componentInstance.name = 'Gerardo';
    modalRef.result.then((data) => {
      console.log(data);
    },
    (reason) => {
      console.log(reason);
    });
/* espera un promsesa para cuando el modal de cierre, then para close, o dismis para
un dismis y si es un click afuer entonces es retorna un 0*/

  }


}

