import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cultivos:any;
  public imgs: Array<any> = [
    'brote',
    'crecimiento',
    'floracion',
    'cosecha'
  ];
  public etapas: Array<any> = [
    'Brote',
    'Crecimiento',
    'Floración',
    'Cosecha'
  ];
  constructor(private http: HttpClient, public wsService: WebsocketService) {
  }

  ngOnInit(): void {
    let  data = {
      funcion: 'getCultivoFases',
      id: localStorage.getItem('id')
    };
    console.log(data)
     this.http.post(AppComponent.url+'/api', data, {headers: {"ngrok-skip-browser-warning": "69420"}}).subscribe(response => {
      this.cultivos = (response)
      console.log(this.cultivos)
  });
  setTimeout(()=>{
  console.log(this.cultivos)
    
  },5000)
  }

  }

//CODIGO DE LAS GRÁFICAS
/*
DECLARACIONES
public temperatura: any = 0;
  public sol: any = 0;
  public humedad: any = 0;
  public lineChartPromedio: Array<any> = [
    {
      data: [0, 0, 0, 0, 0, 0, 0],
      label: 'Temperatura',
    },
    {
      data: [0, 0, 0, 0, 0, 0, 0],
      label: 'Sol',
    },
    {
      data: [0, 0, 0, 0, 0, 0, 0],
      label: 'Humedad',
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
  public promedios: Array<any> = [
    {
      mes: this.labelsPromedio,
      temp: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      sun: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hum: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ];
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
  public lineChartxMinHum: Array<any> = [
    {
      data: [],
      label: 'Humedad',
    },
  ];
  public optionsMes = {
    plugins: {
      title: {
        text: 'Gráfica de Temperatura, Humedad y Nivel del Sol por Mes',
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
  public optionsMinHum = {
    plugins: {
      title: {
        text: 'Gráfica de Humedad por Minuto',
        display: true,
      },
    },
  };
  public labelsxMin: Array<any> = [1, 2, 3, 4, 5, 6];

  CODIGO DEL ON INIT
  
    let requestDataT = {
      funcion: 'getPromedioBDT',
    };
    this.http.post('http://localhost:4003/api', requestDataT).subscribe((dataTemp: any) => {
        //console.log("datos de temperatura")
        // console.log(dataTemp)
        let requestDataS = {
          funcion: 'getPromedioBDS',
        };
        this.http.post('http://localhost:4003/api', requestDataS).subscribe((dataSol: any) => {
            // console.log("datos de sol")
            // console.log(dataSol)
            let requestDataH = {
              funcion: 'getPromedioBDH',
            };
            this.http.post('http://localhost:4003/api', requestDataH).subscribe((dataHum:any)=>{
              dataSol.forEach((element: any) => {
                this.promedios[0].sun[element.mes - 1] = element.sun;
              });
              dataTemp.forEach((element: any) => {
                this.promedios[0].temp[element.mes - 1] = element.temp;
              });
              dataHum.forEach((element: any) => {
                this.promedios[0].hum[element.mes - 1] = element.hum;
              });
              console.log(this.promedios);
              this.http.post('http://localhost:4003/promedio', this.promedios).subscribe((response: any) => {
                  console.log(response);
                });
            })
          });
      });
    this.getData();
    this.escucharSocket();
    console.log(JSON.stringify(this.lineChartPromedio));


    //FUNCIONES
      getData() {
    this.http.get('http://localhost:4003/grafica').subscribe((data: any) => {
      this.temperatura = data.temperatura;
      this.sol = data.sol;
      this.humedad = data.humedad;
      this.lineChartPromedio = data.dataPromedio;
      this.lineChartxMinTemp = data.dataxMinTemp;
      this.lineChartxMinSun = data.dataxMinSun;
      this.lineChartxMinHum = data.dataxMinHumedad;
      this.labelsxMin = data.labelsxMin;
      console.log(data);
    });
  }
  //actualiza la gráfica cada que el servidor manda un cambio
  escucharSocket() {
    this.wsService.listen('cambio-grafica').subscribe((data: any) => {
      this.temperatura = data.temperatura;
      this.sol = data.sol;
      this.humedad = data.humedad;
      this.lineChartPromedio = data.dataPromedio;
      this.lineChartxMinTemp = data.dataxMinTemp;
      this.lineChartxMinSun = data.dataxMinSun;
      this.lineChartxMinHum = data.dataxMinHumedad;
      this.labelsxMin = data.labelsxMin;
      console.log('socket data>>>' + JSON.stringify(data));
    });
  }
*/