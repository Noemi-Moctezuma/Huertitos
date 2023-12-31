import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public temperatura: any = 0;
  public sol: any= 0;
  constructor(private http: HttpClient, public wsService: WebsocketService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params.id);
    });
   // this.getData()
    //this.escucharSocket()
  }
 /*  getData() {
    this.http.get('http://localhost:4003/grafica').subscribe((data: any) => {
      this.temperatura = data.temperatura;
      this.sol = data.sol;
      console.log("get data>>>" + data);
    });
  }
  //actualiza la gráfica cada que el servidor manda un cambio
  escucharSocket() {
    this.wsService.listen('cambio-grafica').subscribe((data: any) => {
      this.temperatura = data.temperatura;
      this.sol = data.sol;
      console.log("socket data>>>" + JSON.stringify(data));
    });
  } */
}
