import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'input-rest-auto-complete',
  templateUrl: './input-rest-auto-complete.component.html',
  styleUrls: ['./input-rest-auto-complete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputRestAutoCompleteComponent implements OnInit {

  @Input() table: string;
  @Input() order: string;
  @Input() fields: string;
  @Input() conditions: string[];
  @Input() model: string;
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() name: string;
  @Input() error: object;
  @Input() emptytext: string;
  @Input() keyCode: string;
  @Input() keyName: string;

  constructor() {
  }

  ngOnInit() {
  }

  brand: any;

  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];

  filteredBrands: any[];

  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.brands.length; i++) {
      const brand = this.brands[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredBrands.push(brand);
      }
    }
  }

}
