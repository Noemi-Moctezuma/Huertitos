import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from 'src/app/services/websocket.service';

import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

import interactionPlugin from '@fullcalendar/interaction';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import esLocale from '@fullcalendar/core/locales/es';
import Swal from 'sweetalert2';
import { DialogAddEtapaComponent } from '../dialog-add-etapa/dialog-add-etapa.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-huerto',
  templateUrl: './huerto.component.html',
  styleUrls: ['./huerto.component.scss'],
 
})
export class HuertoComponent implements OnInit {
  
  cultivos :any
  
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
  
  
  public labelsxMin: Array<any> = [1, 2, 3, 4, 5, 6];




  huerto :any
  titulo:any
  //temperatura:any
 // luz:any
 // humedad:any
  etapas:any
  eventos:any
  calendarOptions: CalendarOptions

 


  constructor(
    public wsService: WebsocketService,
    
  public dialog: MatDialog,
    private router:Router,
    private http:HttpClient,

  ) {
    this.getHuerto()
    this.getEtapas()
    console.log(this.eventos)
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      locale: esLocale,
      plugins: [ interactionPlugin ],
      dateClick: function(info:any) {
        localStorage.setItem('fechaClick', info.dateStr)

    console.log(info.dateStr)
    
    let dialogRef!:any
    dialogRef = dialog.open(DialogAddEtapaComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      //window.location.reload()
    });
      },
      events:this.eventos,
      eventSources:[
            // your event source
    {
      url: 'http://localhost:4003/api',
      method: 'POST',
      extraParams: {
        funcion: 'getEventos',
        idCultivo: localStorage['id_huerto'],
      }

    }
      ],
      eventClick: function(info) {
        var eventObj = info.event;
  
        if (eventObj.url) {
          alert(
            'Clicked ' + eventObj.title + '.\n' +
            'Will open ' + eventObj.url + ' in a new tab'
          );
  
          window.open(eventObj.url);
  
          info.jsEvent.preventDefault(); // prevents browser from following link in current tab.
        } else {
          Swal.fire( eventObj.title);
        }
      }
      
    };


   }

  ngOnInit(): void {
    
    let requestDataT = {
      funcion: 'getPromedioBDT',
    };
    this.http.post(AppComponent.url+'/api', requestDataT, AppComponent.header).subscribe((dataTemp: any) => {
        //console.log("datos de temperatura")
        // console.log(dataTemp)
        let requestDataS = {
          funcion: 'getPromedioBDS',
        };
        this.http.post(AppComponent.url+'/api', requestDataS, AppComponent.header).subscribe((dataSol: any) => {
            // console.log("datos de sol")
            // console.log(dataSol)
            let requestDataH = {
              funcion: 'getPromedioBDH',
            };
            this.http.post(AppComponent.url+'/api', requestDataH, AppComponent.header).subscribe((dataHum:any)=>{
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
              this.http.post(AppComponent.url+'/promedio', this.promedios, AppComponent.header).subscribe((response: any) => {
                  console.log(response);
                });
            })
          });
      });
    this.getData();
    this.escucharSocket();
    console.log(JSON.stringify(this.lineChartPromedio));
  }

  getHuerto() {
    console.log(localStorage['id_huerto'])
    let  data = {
      funcion: 'getHuerto',
      idCultivo: localStorage['id_huerto'],
    };
    console.log(data)
    this.http.post(AppComponent.url+'/api', data, AppComponent.header).subscribe(response => {
    this.huerto = Object.values(response)
    console.log(this.huerto[0].nombre)
    this.titulo=this.huerto[0].nombre
    });

  }
  getEtapas() {
    console.log(localStorage['id_huerto'])
    let  data = {
      funcion: 'getEtapas',
      idCultivo: localStorage['id_huerto'],
    };
    console.log(data)
    this.http.post(AppComponent.url+'/api', data, AppComponent.header).subscribe(response => {
    this.etapas = Object.values(response)
    console.log(this.etapas)
    
    });

  }  
  
  getEventos() {
    console.log(localStorage['id_huerto'])
    let  data = {
      funcion: 'getEventos',
      idCultivo: localStorage['id_huerto'],
    };
    console.log(data)
    this.http.post(AppComponent.url+'/api', data, AppComponent.header).subscribe(response => {
    this.eventos = Object.values(response)
    console.log(this.eventos)
    
    });

  }  
  getData() {
    this.http.get(AppComponent.url+'/grafica', AppComponent.header).subscribe((data: any) => {
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

 /* abrirDialogAddCultivo(){
    console.log('abrio desde imagen')
    
    this.dialogRef = this.dialog.open(DialogAddEtapaComponent, {
      width: '250px',
    });

    this.dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      //window.location.reload()
    });
  }
  cerrarDialog(){
    this.dialogRef.close();
  }*/

}



