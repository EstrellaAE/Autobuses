import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, latLng, polyline, marker, Polyline, Marker } from 'leaflet';
import { HeaderComponent } from '../header/header.component';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [HeaderComponent, TableModule],
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  rutas: any[]; // Propiedad para almacenar las rutas
  map!: Map;
  polylines: { [key: string]: Polyline } = {}; // Almacena polylines para cada ruta
  paradaMarkers: Marker[] = []; // Almacena marcadores de paradas
  constructor() {
    // Datos de ejemplo para las rutas
    this.rutas = [
      { ruta: 'Ruta A', descripcion: 'Ruta centro', coordinates: [
        latLng(21.156811250648655, -100.93424033225013),
        latLng(21.16085710559847, -100.93238870287973),
        latLng(21.161232073989137, -100.93339769841721),
        latLng(21.157248870630283, -100.93518809652082),
        latLng(21.156811250648655, -100.93424033225013)
      ],
      paradas: [
        { nombre: 'Parada A', coords: latLng(21.15691634259154, -100.93422461957903) },
        { nombre: 'Parada B', coords: latLng(21.161111801212627, -100.93304113609027) }
      ]
    },
    { 
      ruta: 'Ruta B', 
      descripcion: 'Ruta Río Laja', 
      coordinates: [
        latLng(21.157508063864242, -100.94119113541964),
        latLng(21.154576387091605, -100.9328226433953),
        latLng(21.156050873521824, -100.93224035912309),
        latLng(21.154031553533045, -100.92685432083739),
        latLng(21.158028097659614, -100.92535669538628)
      ],
      paradas: [
        { nombre: 'Parada 1', coords: latLng(21.15590, -100.93400) },
        { nombre: 'Parada 2', coords: latLng(21.15480, -100.93200) }
      ]
    },
    { 
      ruta: 'Ruta C', 
      descripcion: 'Ruta Estrella', 
      coordinates: [
        latLng(21.15608703006592, -100.93461134112164),//1
        latLng(21.157583003324955, -100.93875291731162),//2
        latLng(21.15941788544031, -100.93787280112394),//3
        latLng(21.160267643390636, -100.93992273047176),//4
        latLng(21.162811640176145, -100.93869139150704),//5
        
        latLng(21.164698366771486, -100.93788212164027),//6
        
        latLng(21.165888180099984, -100.93836695632973),//7
        latLng(21.17025327450313, -100.94136124714035), 
        latLng(21.175722828672427, -100.94524610071247),
        latLng(21.18539009850307, -100.95412818351322),//8
        
        latLng(21.18299418379335, -100.95791009821313),//9
        latLng(21.181248492887967, -100.95949260152703),//10
        latLng(21.178552385315378, -100.9592512027402),//11
        latLng(21.17781707471852, -100.95893470207493),//12
        latLng(21.17524095778719, -100.96056012071686),//13
        latLng(21.175780654687475, -100.96166141995528),//14
        latLng(21.17578565687705, -100.96536286841857),//15
        latLng(21.17637591459992, -100.96576147698603),//16
        latLng(21.15924259675436, -100.94038661866308),
        latLng(21.15805193668601, -100.93731817156183),
        latLng(21.1564310227342, -100.938133563087),
        latLng(21.15530037470635, -100.93497928531093),
        latLng(21.15608703006592, -100.93461134112164)

        

      ],
      paradas: [
        { nombre: 'Parada 1', coords: latLng(21.15606139040705, -100.93455032086752) },
        { nombre: 'Parada 2', coords: latLng(21.162002312845182, -100.93903959602895) }
      ]
    }
    ];
  }

  ngOnInit() {
    // Inicializa el mapa centrado en una coordenada
    this.map = new Map('map').setView([21.15640, -100.93483], 13);

    tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Agrega polylines al mapa para cada ruta y las almacena
    this.rutas.forEach(ruta => {
      const polylinePath = polyline(ruta.coordinates, { color: 'blue' }).addTo(this.map);
      this.polylines[ruta.ruta] = polylinePath; // Guarda cada polyline con el nombre de la ruta
    });
  }

  // Función para resaltar una ruta seleccionada y mostrar sus paradas
  highlightRoute(ruta: any) {
    // Restablece todas las rutas a su color original
    Object.values(this.polylines).forEach(line => line.setStyle({ color: 'blue', weight: 3 }));

    // Cambia el estilo de la ruta seleccionada
    const selectedPolyline = this.polylines[ruta.ruta];
    if (selectedPolyline) {
      selectedPolyline.setStyle({ color: 'red', weight: 5 });
      this.map.fitBounds(selectedPolyline.getBounds()); // Ajusta el zoom para centrarse en la ruta seleccionada
    }

    // Elimina marcadores de paradas anteriores
    this.paradaMarkers.forEach(marker => this.map.removeLayer(marker));
    this.paradaMarkers = [];

    // Agrega los marcadores de paradas de la ruta seleccionada
    ruta.paradas.forEach((parada: any) => {
      const paradaMarker = marker(parada.coords).addTo(this.map)
        .bindPopup(`<b>${parada.nombre}</b>`); // Agrega un popup con el nombre de la parada
      this.paradaMarkers.push(paradaMarker);
    });
  }
}