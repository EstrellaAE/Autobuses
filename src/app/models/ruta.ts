export interface Coordinate {
    lat: number;  // Latitud de la coordenada
    lng: number;  // Longitud de la coordenada
  }

export class Ruta{
    _id?:number;
    nombre: string;
    descripcion: string;
    coordinates: Coordinate[];  // Lista de coordenadas que representan la ruta

    constructor(nombre:string, descripcion:string, coordinates:Coordinate[]) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.coordinates = coordinates;
    }
}