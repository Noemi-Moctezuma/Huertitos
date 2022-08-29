import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms'

import {MatSnackBar} from '@angular/material/snack-bar';
interface Cultivos {
  id: string;
  nombre: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  cultivoSeleccionado = '';
  cultivos: Cultivos[] = [];
  user: FormGroup;
  constructor( 
    private http:HttpClient,
    private router:Router,
    private _snackBar: MatSnackBar
    ) 
    { 
      this.user = new FormGroup({
        nombre: new FormControl(''),
        apellido_paterno: new FormControl(''),
        apellido_materno: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        password2: new FormControl(''),
        telefono: new FormControl(''),
        ocupacion: new FormControl(''),
        cultivo: new FormControl(''),

      });
    
    localStorage.id=''
    
    this.getCultivosDisponibles()
  }

  ngOnInit(): void {

   
  }login() {
    let  data = {
      funcion: 'login',
      user: this.user.value,
    };
    this.http.post('http://localhost:4003/api', data ).subscribe(response => {
    let data2 = Object.values(response)
    console.log(data2)

    if (data2.length > 0) {
      localStorage.id=data2[0]['id']
      this.addCultivoUsuario()
      
    } else {
       
      Swal.fire({
        
        title: 'Error al registrar usuario',
        text:'Por favor ingresa los datos nuevamente',
        icon: 'error'
    
    })


    }
    

    });
  }
  agregarUsuario(){
    if(this.user.value['password'] == this.user.value['password2']){
      this.user.controls['cultivo'].setValue(this.cultivoSeleccionado);
      let  data = {
        funcion: 'agregarUsuario',
        user: this.user.value,
      };
      this.http.post('http://localhost:4003/api', data ).subscribe(response => {
      let data2 = Object.values(response)
      if( data2.length>0){
        this.login()

      }
      console.log( data2)})
    }
    else{
      this._snackBar.open('Las contraseñas no coinciden','',{
        duration:2000
      }
      );
    }
    

  }
  
  addCultivoUsuario(){
    console.log(this.cultivoSeleccionado)
    
    console.log(localStorage['id'])
        
    let  data = {
      funcion: 'addCultivoUsuario',
      cultivo: this.cultivoSeleccionado,
      id:localStorage['id']
    };
    this.http.post('http://localhost:4003/api', data ).subscribe(response => {
    let data2 = Object.values(response)
    console.log(data2.values)

   if (data2) {
    Swal.fire({
        
      title: 'Usuario registardo con éxito',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    })
    
    this.router.navigate(['/private'])
      
    } else {
       
      Swal.fire({
        
        title: 'Error al registrar usuario',
        text:'Por favor inténtalo nuevamente',
        icon: 'error'
    
      })
    }

    }); 
  }

  getCultivosDisponibles() {
    let  data = {
      funcion: 'getCultivos'
    };
    this.http.post('http://localhost:4003/api', data ).subscribe(response => {
    let data2 = Object.values(response)
    
   this.cultivos=data2;
   console.log(this.cultivos)

    }); 
  }
}
