import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AiresComponent } from "./aires/aires.component";
import { FechaComponent } from "./fecha/fecha.component";
import { InicioComponent } from "./inicio/inicio.component";
import { MapComponent } from "./mapa1/mapa1.component";
import { Map2Component } from "./mapa2/mapa2.component";
import { bMapaComponent } from "./bMapa/bMapa.component";

const routes: Routes = [
  { path: "aires", component: AiresComponent },
  { path: "inicio", component: InicioComponent },
  { path: "fecha", component: FechaComponent },
  { path: "mapa1", component: MapComponent },
  { path: "mapa2", component: Map2Component },
  { path: "bmapa", component: bMapaComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}