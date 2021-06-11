import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { FromSupplierComponent } from './from-supplier/from-supplier.component';
import { ToSupplierComponent } from './to-supplier/to-supplier.component';


@NgModule({
  declarations: [
    FromSupplierComponent,
    ToSupplierComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
