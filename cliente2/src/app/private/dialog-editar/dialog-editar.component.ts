import { HttpClient } from '@angular/common/http';
import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import Swal from 'sweetalert2'
import {PerfilComponent} from '../perfil/perfil.component'
@Component({
  providers:[PerfilComponent ],
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.component.html',
  styleUrls: ['./dialog-editar.component.scss']
})
export class DialogEditarComponent implements OnInit {
  
  user: FormGroup;
  
  constructor(
    private http:HttpClient,
    private perfil: PerfilComponent,
    private router:Router,
    private dialogRef: MatDialogRef<DialogEditarComponent>) { 
     
    
    this.user = new FormGroup({
      nombre: new FormControl(''),
      apellido_paterno: new FormControl(''),
      apellido_materno: new FormControl(''),
      email: new FormControl(''),
      telefono: new FormControl(''),
      ocupacion: new FormControl(''),
      id:new FormControl(localStorage['id'])
      
    });
    
    this.getUser()
  }

  ngOnInit(): void {
  }
  getUser() {
    console.log(localStorage['id'])
    let  data = {
      funcion: 'getUser',
      user: this.user.value,
      id: localStorage['id']
    };
    this.http.post(AppComponent.url+'/api', data, AppComponent.header).subscribe(response => {
    let data2 = Object.values(response)
    console.log(data2)
    this.user.controls['nombre'].setValue(data2[0]['nombre']);
    this.user.controls['apellido_paterno'].setValue(data2[0]['apellido_paterno']);
    this.user.controls['apellido_materno'].setValue(data2[0]['apellido_materno']);
    this.user.controls['email'].setValue(data2[0]['email']);
    this.user.controls['telefono'].setValue(data2[0]['telefono']);
    this.user.controls['ocupacion'].setValue(data2[0]['ocupacion']);
      

    });
  }
  editarUser(){
    console.log(this.user.value)
    
    let  data = {
      funcion: 'editarUsuario',
      user: this.user.value,
    };
    this.http.post(AppComponent.url+'/api', data, AppComponent.header).subscribe(response => {
    let data2 = Object.values(response)
    console.log(data2.length)

   if (data2.length > 0) {
    
   
    Swal.fire({
        
      title: 'Usuario editado con éxito',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })
    this.cerrarDialog()
    this.perfil.recargar()
      
    } else {
       
      Swal.fire({
        
        title: 'Error al editar usuario',
        text:'Por favor inténtalo nuevamente',
        icon: 'error'
    
      })
    }
     

    });
  }
  cerrarDialog(){
    this.dialogRef.close();
  }
  recargarPerfil(){
    this.perfil.recargar()  
  }

}

