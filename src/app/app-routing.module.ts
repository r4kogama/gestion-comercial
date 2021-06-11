import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { CustomerDataComponent } from './customer/customer-data/customer-data.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'customer',component:CustomerListComponent},
  {path:'customer/:id', component: CustomerDataComponent},
  {path:'**', component:NotfoundComponent}//si no hay ruta
];
  //invoca metodo statico forROot carga la calse en memoria con al rutas que hay enb el array
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
