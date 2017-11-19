import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  AutoCompleteModule,
  DataTableModule,
  SharedModule,
  InputTextModule,
  ButtonModule
} from 'primeng/primeng';
import {AppComponent} from './app.component';
import {InputRestAutoCompleteComponent} from './input-rest-auto-complete/input-rest-auto-complete.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListRestComponent} from './list-rest/list-rest.component';
import {EmployeeFilterComponent} from './employee-filter/employee-filter.component';
import {EmployeeSummaryComponent} from './employee-summary/employee-summary.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {CustomFieldsComponent} from './custom-fields/custom-fields.component';
import {FieldValidatorComponent} from './field-validator/field-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    InputRestAutoCompleteComponent,
    ListRestComponent,
    EmployeeFilterComponent,
    EmployeeSummaryComponent,
    BreadcrumbComponent,
    CustomFieldsComponent,
    FieldValidatorComponent
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
