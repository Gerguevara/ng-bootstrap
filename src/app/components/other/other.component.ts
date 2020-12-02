import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  @Input() name: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  confirm() {
    this.activeModal.close('Huy Huy Huy');
  }
}
