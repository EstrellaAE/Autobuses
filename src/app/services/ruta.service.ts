import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  url = 'http://localhost:4200/api/rutas'
  constructor(private http: HttpClient) {  }

  getRutas(): Observable<any> {
    return this.http.get(this.url);
  }

}
