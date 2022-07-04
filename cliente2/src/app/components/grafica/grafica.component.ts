import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {

  public lineChartData: Array<any> = [
    {
      data:[0,0,0,0,0,0,0],
      label: 'Temperatura'
    },
    {
      data:[0,0,0,0,0,0,0],
      label: 'Sol'
    }
  ];
  
  public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

  constructor(
    private http: HttpClient,
    public wsService : WebsocketService
  ) { }

  ngOnInit(): void {
    this.getData()
    this.escucharSocket()
    console.log(JSON.stringify(this.lineChartData))
  }
  getData(){
    this.http.get('http://localhost:4003/grafica').subscribe(
      (data:any)=>{
        this.lineChartData = data
        console.log(data)
      }
    );
  }
//actualiza la gráfica cada que el servidor manda un cambio
  escucharSocket(){
    this.wsService.listen('cambio-grafica').subscribe(
      (data:any)=>{
        this.lineChartData = data
        console.log(data)
      }
    )
  }
}
