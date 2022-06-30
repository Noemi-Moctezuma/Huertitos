import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {

  public lineChartData: Array<any> = [
    {
      data:[0,0,0,0],
      label: 'Ventas'
    }
  ];

  public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril'];

  constructor(
    private http: HttpClient,
    public wsService : WebsocketService
  ) { }

  ngOnInit(): void {
  }

  getData(){
    this.http.get('http://localhost:4003/grafica').subscribe(
      (data:any)=>{
        console.log(data)
        //this.lineChartData = data;
      }
    );
  }

  escucharSocket(){
    this.wsService.listen('cambio-grafica').subscribe(
      (data:any)=>{
        console.log(data);
        this.lineChartData = data;
      }
    )
  }

}
