import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'list-rest',
  templateUrl: './list-rest.component.html',
  styleUrls: ['./list-rest.component.css']
})
export class ListRestComponent implements OnInit {

  @Input() urlRest: string;
  @Input() columns: string[];
  @Input() actions: string[];

  @Output() actionButton: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Emite action do clique dos botoes pra ser
   * capturado no parent
   * <app-list-rest (actionButton)="onActionButton($event)" ></app-list-rest>
   * @param name
   */
  clickAction(name: string) {
    this.actionButton.emit(name);
  }

}
