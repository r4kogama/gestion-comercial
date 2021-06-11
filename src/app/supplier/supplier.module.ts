import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierDataComponent } from './supplier-data/supplier-data.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';


@NgModule({
  declarations: [
    SupplierDataComponent,
    SupplierListComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
