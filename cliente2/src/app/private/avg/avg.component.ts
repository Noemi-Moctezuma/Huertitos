import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-avg',
  templateUrl: './avg.component.html',
  styleUrls: ['./avg.component.scss'],
})
export class AvgComponent implements OnInit {
  public labelsPromedio: Array<any> = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  public lineChartPromedio: Array<any> = [
    {
      data: [0, 0, 0, 0, 0, 0, 0],
      label: 'Temperatura',
    },
    {
      data: [0, 0, 0, 0, 0, 0, 0],
      label: 'Sol',
    },
  ];
  constructor(private http: HttpClient, public wsService: WebsocketService) {}

  ngOnInit(): void {
    /*  this.getData()
    this.escucharSocket()
    console.log(JSON.stringify(this.lineChartPromedio)) */
  }

  getData() {
    this.http.get('http://localhost:4003/grafica').subscribe((data: any) => {
      this.lineChartPromedio = data.dataPromedio
      console.log(data);
    });
  }
  //actualiza la gráfica cada que el servidor manda un cambio
  escucharSocket() {
    this.wsService.listen('cambio-grafica').subscribe((data: any) => {
      this.lineChartPromedio = data.dataPromedio
      console.log(data);
    });
  }
}