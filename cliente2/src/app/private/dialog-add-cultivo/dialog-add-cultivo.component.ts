import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import Swal from 'sweetalert2';

interface Cultivos {
  id: string;
  nombre: string;
}
@Component({
  
  selector: 'app-dialog-add-cultivo',
  templateUrl: './dialog-add-cultivo.component.html',
  styleUrls: ['./dialog-add-cultivo.component.scss']
})
export class DialogAddCultivoComponent implements OnInit {
  cultivoSeleccionado = '';
  cultivos: Cultivos[] = [];
  n =  new Date();
  y = this.n.getFullYear();
  m =this.n.getMonth() + 1;
  d = this.n.getDate();
  hoy:string = this.y + '-' + this.m + '-' + this.d

  
  constructor(
    
   
    private http:HttpClient,
    
    private router:Router,
    private dialogRef: MatDialogRef<DialogAddCultivoComponent>,
    
  ) { 
    console.log(this.hoy)
    this.getCultivosDisponibles()
    
    
  }

  ngOnInit(): void {
  }

  getCultivosDisponibles() {
    let  data = {
      funcion: 'getCultivos'
    };
    
    this.http.post(AppComponent.url+'/api', data, AppComponent.header).subscribe(response => {
    let data2 = Object.values(response)
    console.log(data2)
   this.cultivos=data2;
      

    }); 
  }
  editarCultivosUsuario(){
    console.log(this.cultivoSeleccionado)
    
    console.log(localStorage['id'])

    let fecha_siembra = document.getElementById('fecha') as HTMLInputElement 
    console.log(fecha_siembra.value);

    let nombre = document.getElementById('nombreCultivo') as HTMLInputElement 
    console.log(nombre.value);


    let  data = {
      funcion: 'addCultivoUsuario',
      cultivo: this.cultivoSeleccionado,
      id:localStorage['id'],
      fecha_siembra:fecha_siembra.value,
      nombre_cultivo:nombre.value
      
    };
   console.log(JSON.stringify(data))

    this.http.post(AppComponent.url+'/api', data, AppComponent.header).subscribe(response => {
    let data2 = Object.values(response)
    console.log(data2.values)

   if (data2) {
     
 
    Swal.fire({
        
      title: 'Cultivo agregado con éxito',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })
    this.cerrarDialog()
    
    
      
    } else {
       
      Swal.fire({
        
        title: 'Error al agregar cultivo',
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