import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';
import { DialogEditarComponent } from '../dialog-editar/dialog-editar.component';
import { DialogAddCultivoComponent } from '../dialog-add-cultivo/dialog-add-cultivo.component';
@Component({
  selector: 'app-mis-huertos',
  templateUrl: './mis-huertos.component.html',
  styleUrls: ['./mis-huertos.component.scss']
})
export class MisHuertosComponent implements OnInit {

  cultivos :any
  dialogRef!:any
  constructor(
    
    private http:HttpClient,
    private router:Router,
    public dialog: MatDialog
  ) { 
    
    
    this.getCultivosUsuario()
  }

  ngOnInit(): void {
  }
  
  getCultivosUsuario() {
    console.log(localStorage['id'])
    let  data = {
      funcion: 'getCultivosUsuario',
      id: localStorage['id'],
    };
    this.http.post('http://localhost:4003/api', data ).subscribe(response => {
    this.cultivos = Object.values(response)
    console.log(this.cultivos)
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

}
