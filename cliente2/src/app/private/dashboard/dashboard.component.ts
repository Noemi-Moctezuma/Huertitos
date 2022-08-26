import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public temperatura:any
  public sol:any
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
    'Diciembre'
  ];
  public lineChartxMin: Array<any> = [
    {
      data:[],
      label: 'Temperatura'
    },
    {
      data:[],
      label: 'Sol'
    }
    ];
  public labelsxMin: Array<any> = [];
  constructor(private http: HttpClient, public wsService: WebsocketService) {}

  ngOnInit(): void {
    /*  this.getData()
    this.escucharSocket()
    console.log(JSON.stringify(this.lineChartPromedio)) */
  }

  getData() {
    this.http.get('http://localhost:4003/grafica').subscribe((data: any) => {
      this.temperatura = data.temperatura
      this.sol = data.sol
      this.lineChartPromedio = data.dataPromedio
      this.lineChartxMin = data.dataxMin
      this.labelsxMin= data.labelsxMin
      console.log(data);
    });
  }
  //actualiza la gráfica cada que el servidor manda un cambio
  escucharSocket() {
    this.wsService.listen('cambio-grafica').subscribe((data: any) => {
      this.temperatura = data.temperatura
      this.sol = data.sol
      this.lineChartPromedio = data.dataPromedio
      this.lineChartxMin = data.dataxMin
      this.labelsxMin= data.labelsxMin
      console.log(data);
    });
  }
}