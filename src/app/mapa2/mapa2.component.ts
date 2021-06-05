import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';
import { Aire2 } from "../models/aire2";

const markerOptions = {
  opacity: 1,
  color: ''
}

@Component({
  selector: 'app-map',
  templateUrl: './mapa2.component.html',
  styleUrls: ['./mapa2.component.css']
})
export class Map2Component implements AfterViewInit {
  private map: any;

  private initMap(): void {
    this.map = L.map('map')

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
   
    let markerArray = []

    let aires: Array<Aire2> = JSON.parse(localStorage.getItem('airesFilter'));
    console.log(aires)


    for (let aire of aires) { 
      const num1:any = aire.dato[0]
      const num2:any = aire.dato[1]
      const num3:any = aire.dato[2]
      const max = Math.max(num1, num2, num3)
      if (max == aire.dato[0]) {
        if (aire.dato[0] < 50) {
          markerOptions.color = '#50f0e6'
        } else if (aire.dato[0] < 100) {
          markerOptions.color = '#50ccaa'
        } else if (aire.dato[0] < 130) {
          markerOptions.color = '#f0e641'
        } else if (aire.dato[0] < 240) {
          markerOptions.color = '#ff5050'
        } else if (aire.dato[0] < 380) {
          markerOptions.color = '#960032'
        } else {
          markerOptions.color = '#7d2181'
        }
      } else if (max == aire.dato[1]) {
        if (aire.dato[1] < 40) {
          markerOptions.color = '#50f0e6'
        } else if (aire.dato[1] < 90) {
          markerOptions.color = '#50ccaa'
        } else if (aire.dato[1] < 120) {
          markerOptions.color = '#f0e641'
        } else if (aire.dato[1] < 230) {
          markerOptions.color = '#ff5050'
        } else if (aire.dato[1] < 340) {
          markerOptions.color = '#960032'
        } else {
          markerOptions.color = '#7d2181'
        }
      } else if (max == aire.dato[2]) {
        if (aire.dato[2] < 1) {
          markerOptions.color = '#50f0e6'
        } else if (aire.dato[2] < 2) {
          markerOptions.color = '#50ccaa'
        } else if (aire.dato[2] < 10) {
          markerOptions.color = '#f0e641'
        } else if (aire.dato[2] < 17) {
          markerOptions.color = '#ff5050'
        } else if (aire.dato[2] < 34) {
          markerOptions.color = '#960032'
        } else {
          markerOptions.color = '#7d2181'
        }
      }
      var marker = L.circleMarker([aire.Latitud, aire.Longitud], markerOptions)
      .bindPopup(`<b>NO2: ${aire.dato[0]}<br>PM10: ${aire.dato[1]}<br>PM25: ${aire.dato[2]}</b><br>${aire.Longitud},${aire.Latitud}.`)
      .openPopup();
      markerArray.push(marker)
        
      let group = L.featureGroup(markerArray).addTo(this.map)

      this.map.fitBounds(group.getBounds(), {
        padding: [70, 70]

      })
    }
  }

  constructor() { }
  ngAfterViewInit(): void {
    this.initMap();
  }
  

}