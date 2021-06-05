import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Aire } from "./models/aire";
import { Aire2 } from "./models/aire2";

@Injectable({
  providedIn: "root"
})
export class AireService {
  //private urlAPI = "http://localhost:3000/";
  private urlAPI = "https://apiapp-portable.herokuapp.com/"
  constructor(
    private http: HttpClient
  ) {}

  getAiresApi() {
    return this.http.get(this.urlAPI);
  }

  getFechaApi(ano: string, mes: string, dia: string) {
    const url = `https://apiapp-portable.herokuapp.com/getFecha/${ano}&${mes}&${dia}`;
    return this.http.get(url);
  }

  getFechaApi2(ano: string, mes: string, dia: string, cont: string) {
    const url = `https://apiapp-portable.herokuapp.com/getFecha2/${ano}&${mes}&${dia}&${cont}`;
    return this.http.get(url);
  }

  getFechaApi3(ano: string, mes: string, dia: string, hora: string, min: string, seg: string) {
    const url = `https://apiapp-portable.herokuapp.com/getFecha3/${ano}&${mes}&${dia}&${hora}&${min}&${seg}`;
    return this.http.get(url);
  }

}
