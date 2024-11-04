import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Ruta } from '../../models/ruta';
import { RutaService } from '../../services/ruta.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-rutas',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TableModule, ButtonModule, CardModule],
  templateUrl: './rutas.component.html',
  styleUrl: './rutas.component.css'
})
export class RutasComponent {
  listRutas: Ruta[] = [];

 constructor(private _rutaService: RutaService,
  private toastr: MessageService) {}
    

 ngOnInit(): void {
    this.obtenerRutas();
  }

  obtenerRutas(){
    this._rutaService.getRutas().subscribe(data => {
      console.log(data);
      this.listRutas = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarRuta(id: any){
    //this._rutaService.eliminarRuta(id).subscribe(data =>{
      //this.toastr.add({ severity: 'error', summary: 'Ruta fue eliminada ', detail: 'La ruta fue eliminada con exito' });
      //this.obtenerRutas();
    //},error => {
      //console.log(error)
    //})
  }
}
