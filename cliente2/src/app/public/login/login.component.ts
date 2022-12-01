import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: FormGroup;
  constructor( 
    private http:HttpClient,
    private router:Router
    ) 
    { 
    this.user = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    }
    
    );
    
    localStorage.id=''
  }

  ngOnInit(): void {

   
  }
  login() {
    let  data = {
      funcion: 'login',
      user: this.user.value,
    };
    this.http.post('http://localhost:4003/api', data ).subscribe(response => {
    let data2 = Object.values(response)
    console.log(data2)

    if (data2.length > 0) {
      localStorage.id=data2[0]['id']
      this.router.navigate(['/private'])
      
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

