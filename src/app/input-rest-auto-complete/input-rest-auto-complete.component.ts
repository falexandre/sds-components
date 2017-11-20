import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {InputRestAutoCompleteService} from './input-rest-auto-complete.service';

export interface IConditions {
  fields: Array<string[]>;
  value: string;
}

@Component({
  selector: 'input-rest-auto-complete',
  templateUrl: './input-rest-auto-complete.component.html',
  styleUrls: ['./input-rest-auto-complete.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class InputRestAutoCompleteComponent implements OnInit {

  @Input() table: string;
  @Input() order: string;
  @Input() fields: Array<string[]>;
  @Input() conditions: Array<IConditions>;
  @Input() placeholder: string;
  @Input() readonly: boolean;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() dropdown: boolean;
  @Input() forceSelection: boolean;
  @Input() error: object;
  @Input() emptyMessage: string;
  @Input() keyCode: string;
  @Input() keyName = 'name';

  itemSelect: any;
  brands: string[] = ['Audi', 'BMW', 'Fiat', 'VW'];
  filteredBrands: any[];

  constructor(private service: InputRestAutoCompleteService) {
  }

  ngOnInit() {
    try {
        const args = {'page': {'current': '1', 'size': '10' }};
        this.service.query('employeeListQuery', args).subscribe( payload => console.log(payload) );
    } catch (e) {
        console.log('Erro ao buscar no back');
    }
  }

  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.brands.length; i++) {
      const brand = this.brands[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredBrands.push({'name': brand});
      }
    }
  }

  getParamsRest(search: string) {
    return {
      'table': this.table,
      'fields': this.fields,
      'order': this.order,
      'conditions': this.getConditionsRest(search)
    };
  }

  getConditionsRest(search: string) {
    const conditiosReturn = [{
      'fields': this.fields,
      'value': `like lower('%${search}%')`
    }];

    this.conditions.map(val => {
      if (val.value !== '') {
        conditiosReturn.push(val);
      }
    });

    return conditiosReturn;
  }


}
