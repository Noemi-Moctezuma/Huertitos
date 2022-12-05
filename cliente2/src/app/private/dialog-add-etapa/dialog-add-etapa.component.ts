import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AnyObject } from 'chart.js/types/basic';
import { AppComponent } from 'src/app/app.component';
interface Cultivos {
  id: string;
  nombre: string;
}
@Component({
  
  selector: 'app-dialog-add-etapa',
  templateUrl: './dialog-add-etapa.component.html',
  styleUrls: ['./dialog-add-etapa.component.scss']
})
export class DialogAddEtapaComponent implements OnInit {
  cultivoSeleccionado = '';
  cultivos: Cultivos[] = [];
  n =  new Date();
  y = this.n.getFullYear();
  m =this.n.getMonth() + 1;
  d = this.n.getDate();
  hoy:string = this.y + '-' + this.m + '-' + this.d

  etapas:any;
  constructor(
    
   
    private http:HttpClient,
    
    private router:Router,
    private dialogRef: MatDialogRef<DialogAddEtapaComponent>,
    
  ) { 
    //console.log(this.hoy)
    this.getEtapasDisponibles()
    
    
  }

  ngOnInit(): void {
  }

  getEtapasDisponibles() {
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
  editarCultivosUsuario(){

let seleccionado = document.getElementById('select') as  HTMLInputElement ;

    console.log(seleccionado.value)
    console.log(this.cultivoSeleccionado)
    

  
    let  data = {
      funcion: 'addEtapaCultivo',
      id_etapa: seleccionado.value,
      id_cultivo:localStorage['id_huerto'],
      fecha2: localStorage['fechaClick']
      
    };
   console.log(data)

    this.http.post(AppComponent.url+'/api', data, AppComponent.header).subscribe(response => {
    let data2 = Object.values(response)
    console.log(data2.values)

   if (data2) {
     
 
    Swal.fire({
        
      title: 'Etapa agregada con éxito',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })
    this.cerrarDialog()
    
    
      
    } else {
       
      Swal.fire({
        
        title: 'Error al agregar etapa',
        text:'Por favor inténtalo nuevamente',
        icon: 'error'
    
      })
    }

    }); 
    
  }
  cerrarDialog(){
    this.dialogRef.close();
  }
  
}