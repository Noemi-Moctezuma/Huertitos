import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';
import { DialogEditarComponent } from '../dialog-editar/dialog-editar.component';
import { DialogAddCultivoComponent } from '../dialog-add-cultivo/dialog-add-cultivo.component';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

 nombre:String;
 apellido_paterno:String;
 apellido_materno:String;
 email:String;
 telefono:String;
 ocupacion:String;
 cultivos :any
 dialogRef!:any
  constructor(
    private http:HttpClient,
    private router:Router,
    public dialog: MatDialog
  ) { 
    this.nombre=''
    this.apellido_paterno=''
    this.apellido_materno=''
    this.email=''
    this.telefono=''
    this.ocupacion=''
    this.getUser()
    this.getCultivosUsuario()
  }

  ngOnInit(): void {

  }

   getUser() {
    console.log(localStorage['id'])
    let  data = {
      funcion: 'getUser',
      id: localStorage['id'],
    };
    this.http.post(AppComponent.url+'/api', data, AppComponent.header ).subscribe(response => {
    let data2 = Object.values(response)
    console.log(data2)
    this.nombre=data2[0]['nombre']
    this.apellido_paterno=data2[0]['apellido_paterno']
    this.apellido_materno=data2[0]['apellido_materno']
    this.email=data2[0]['email']
    this.telefono=data2[0]['telefono']
    this.ocupacion=data2[0]['ocupacion']

    });
  }
  getCultivosUsuario() {
    console.log(localStorage['id'])
    let  data = {
      funcion: 'getCultivosUsuario',
      id: localStorage['id'],
    };
    this.http.post(AppComponent.url+'/api', data, AppComponent.header).subscribe(response => {
    this.cultivos = Object.values(response)
    console.log(this.cultivos)
    });
  }
  
  abrirDialog(): void {
     this.dialogRef = this.dialog.open(DialogEditarComponent, {
      width: '450px',
    });

    this.dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      //window.location.reload()
    });
  }
  abrirDialogAddCultivo(){
    console.log('abrio desde imagen')
    
    this.dialogRef = this.dialog.open(DialogAddCultivoComponent, {
      width: '250px',
    });

    this.dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      //window.location.reload()
    });
  }
  recargar(){
    window.location.reload()
  }

  
}
export function recargar(){
  window.location.reload()
}