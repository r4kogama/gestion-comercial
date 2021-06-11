import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {

  constructor() { }

 //captura el momento exacto que se crea el componente
 //viene definido en una interfaz
 ngOnInit(): void {
  //justo antes que se renderize el html.. se tiene que captura antes
}

//captura el momento exacto que el componente se destruye
/*   ngOnDestroy(){

}
*/



}
