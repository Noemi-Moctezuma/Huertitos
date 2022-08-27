import { HttpClient } from '@angular/common/http';
import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.component.html',
  styleUrls: ['./dialog-editar.component.scss']
})
export class DialogEditarComponent implements OnInit {
  
  user: FormGroup;
  constructor(
    private http:HttpClient,
    
    private router:Router) { 
    
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
    this.http.post('http://localhost:4003/api', data ).subscribe(response => {
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
    this.http.post('http://localhost:4003/api', data ).subscribe(response => {
    let data2 = Object.values(response)
    console.log(data2.values)

   if (data2.length > 0) {
     
    this.router.navigate(['/private'])
      console.log('edición completada')
      
    } else {
       
      Swal.fire({
        
        title: 'Usuario no encontrado',
        text:'Por favor ingresa los datos nuevamente',
        icon: 'error'
    
      })
    }
     

    });
  }


}
