import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Aire } from "../models/aire";
import { AireService } from "../aire.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-fechas",
  templateUrl: "./fecha.component.html",
  styleUrls: ["./fecha.component.css"]
})
export class FechaComponent implements OnInit {
  fechas: Aire[];
  fechasApi = null;
  fechaTmp: any;

  constructor(
    private route: ActivatedRoute,
    private fechaService: AireService,
    private router: Router
  ) {}

  getAiresApi() {
  }

  getFechaApi(
    fecha2: string,
  ) {
    const fecha = fecha2;
    const dia = fecha.substr(8, 2).replace(/0?/, '');
    const mes = fecha.substr(5, 2).replace(/0?/, '');
    const ano = fecha.substr(0, 4);
    console.log(fecha, dia, mes, ano)
    this.fechaService.getFechaApi( ano, mes, dia ).subscribe(fechas => {
      if(fechas == "") {
        alert("No hay datos")
      } else {
        this.fechasApi = fechas;
        this.fechas = this.fechasApi;
      }
      console.log(this.fechasApi)
    });
  }

  getFechaApi3(
    fecha2: string,
  ) {
    const fecha = fecha2;
    const dia: string = fecha.substr(8, 2).replace(/0?/, '');
    const mes: string = fecha.substr(5, 2).replace(/0?/, '');
    const ano: string = fecha.substr(0, 4);
    const hora: string = fecha.substr(11, 2);
    const min: string = fecha.substr(14, 2);
    const seg: string = fecha.substr(17, 2);
    console.log(fecha, ano, mes, dia, hora, min, seg)
    this.fechaService.getFechaApi3( ano, mes, dia, hora, min, seg ).subscribe(fechas => {
      if(fechas == "") {
        alert("No hay datos")
      } else {
        this.fechasApi = fechas;
        this.fechas = this.fechasApi;
        localStorage.setItem("airesFilter", JSON.stringify(this.fechasApi))
        this.router.navigate(['/mapa2']);
      }
      console.log(this.fechasApi)
    });
  }

  ngOnInit() {
    this.getAiresApi();
  }
}
