import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = 'http://localhost:3000/rutas'; 

  constructor(private http: HttpClient) {}

  // Obtener todas las rutas
  obtenerRutas(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Obtener una ruta por su ID
  obtenerRutaPorId(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Crear nueva ruta
  crearRuta(ruta: any): Observable<any> {
    return this.http.post(this.baseUrl, ruta);
  }

  // Actualizar ruta existente
  actualizarRuta(id: string, ruta: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, ruta);
  }

  // Eliminar ruta
  eliminarRuta(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // Desactivar ruta
  desactivarRuta(id: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}/desactivar`, {});
  }
  

 // Activar ruta
activarRuta(id: string): Observable<any> {
  return this.http.patch(`${this.baseUrl}/${id}/activar`, {});
}

}
