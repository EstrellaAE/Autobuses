import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { CrearRutasComponentcopy } from './components/rutascopy/crearrutas.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home', // Redirecciona a 'home' solo si la URL está vacía
    pathMatch: 'full',
  },
  {
    path: 'mapa',
    component: MapaComponent,
  },
  {
    path: 'rutas',
    component: RutasComponent,
  },
  {
    path: 'crearrutas',
    component: CrearRutasComponentcopy, // Ruta para crear rutas
  },
  {
    path: '**', // Ruta wildcard para manejar cualquier otra URL no definida
    redirectTo: 'crearrutas',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
