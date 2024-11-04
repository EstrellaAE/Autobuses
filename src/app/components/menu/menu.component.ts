import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items: any[];

  constructor() {
    this.items = [
      { label: 'Inicio', routerLink: '/home' },
      {label: 'Crear ruta',routerLink: '/crearrutas'},
      { label: 'Horario', routerLink: '/rutas' },
      { label: 'Mapa', routerLink: '/mapa' }
    ];
  }
}
