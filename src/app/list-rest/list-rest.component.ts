import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

export interface IActions {
  label: string;
  func: string;
  ico?: string;
  color?: string;
}

export interface IColumns {
  label: string;
  field: string;
}

@Component({
  selector: 'list-rest',
  templateUrl: './list-rest.component.html',
  styleUrls: ['./list-rest.component.css']
})
export class ListRestComponent implements OnInit {

  @Input() urlRest: string;
  @Input() columns: Array<IColumns[]>;
  @Input() actions: Array<IActions[]>;

  @Output() actionButton: EventEmitter<any> = new EventEmitter();

  totalRecords: number;
  payload: any[];

  constructor() {
  }

  ngOnInit() {
    this.payload = [
      {
        nome: 'Fulado de tal',
        estado: 'Santa catarina'
      },
      {
        nome: 'Fulado de tal 2',
        estado: 'Florianopolis'
      }
    ];
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
