import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: FormGroup;

  constructor( private http:HttpClient) { 
    this.user = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
   
  }
  login() {
    this.http.post('http://localhost:4003/login',this.user.value ).subscribe((data: any) => {

      console.log(data);
    });
  }
  

}
