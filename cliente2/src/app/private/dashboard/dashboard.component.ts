import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public temperatura: any;
  public sol: any;
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
    'Diciembre',
  ];
  public promedios:Array<any> = [{
    mes:this.labelsPromedio,
    temp:[0,0,0,0,0,0,0,0,0,0,0,0],
    sun:[0,0,0,0,0,0,0,0,0,0,0,0]
  }
   ]
  public lineChartxMinTemp: Array<any> = [
    {
      data: [],
      label: 'Temperatura',
    },
  ];
  public lineChartxMinSun: Array<any> = [

    {
      data: [],
      label: 'Sol',
    },
  ];
  public optionsMes = {
    plugins: {
      	title: {
			text: 'Gráfica de Temperatura y Nivel del Sol por Mes',
			display: true,
      	},
    },
  };
  public optionsMinTemp = {
    plugins: {
      	title: {
			text: 'Gráfica de Temperatura por Minuto',
			display: true,
      	},
    },
  };
  public optionsMinSun = {
    plugins: {
      	title: {
			text: 'Gráfica de Nivel del Sol por Minuto',
			display: true,
      	},
    },
  };
  public labelsxMin: Array<any> = [1, 2, 3, 4, 5, 6];
  constructor(private http: HttpClient, public wsService: WebsocketService) {}

  ngOnInit(): void {
    let  requestDataT = {
      funcion: 'getPromedioBDT',
    };
    this.http.post('http://localhost:4003/api', requestDataT).subscribe((dataTemp: any) => {
      //console.log("datos de temperatura")
     // console.log(dataTemp)

      let  requestDataS = {   
        funcion: 'getPromedioBDS',
      };
      this.http.post('http://localhost:4003/api', requestDataS).subscribe((dataSol: any) => {
     // console.log("datos de sol")
       // console.log(dataSol)

      //  console.log("arreglo sis")
        dataSol.forEach((element: any) => {
          this.promedios[0].sun[element.mes-1] = element.sun
        });
        dataTemp.forEach((element: any) => {
          this.promedios[0].temp[element.mes-1] = element.temp
        });
       console.log(this.promedios)
        this.http.post('http://localhost:4003/promedio', this.promedios).subscribe((response:any) =>{
        console.log(response)
        })
      });
    });
      this.getData()
    this.escucharSocket()
    console.log(JSON.stringify(this.lineChartPromedio)) 

  }

  getData() {
    this.http.get('http://localhost:4003/grafica').subscribe((data: any) => {
      this.temperatura = data.temperatura;
      this.sol = data.sol;
      this.lineChartPromedio = data.dataPromedio;
      this.lineChartxMinTemp = data.dataxMinTemp;
      this.lineChartxMinSun = data.dataxMinSun;
      this.labelsxMin = data.labelsxMin;
      console.log("get data>>>" + data);
    });
  }
  //actualiza la gráfica cada que el servidor manda un cambio
  escucharSocket() {
    this.wsService.listen('cambio-grafica').subscribe((data: any) => {
      this.temperatura = data.temperatura;
      this.sol = data.sol;
      this.lineChartPromedio = data.dataPromedio
      this.lineChartxMinTemp = data.dataxMinTemp;
      this.lineChartxMinSun = data.dataxMinSun;
      this.labelsxMin = data.labelsxMin;
      console.log("socket data>>>" + JSON.stringify(data));
    });
  }
}
