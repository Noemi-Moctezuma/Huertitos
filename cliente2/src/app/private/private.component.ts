import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PerfilComponent } from './perfil/perfil.component';
import { AppComponent } from '../app.component';


@Component({
  
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent implements OnInit, OnDestroy {
  hidden:boolean = true;
  mobileQuery: MediaQueryList;
  nombre:String;
  apellido_paterno:String;
  apellido_materno:String;
  email:String;
  telefono:String;
  ocupacion:String;
  titulo: string = '';
  fondo:string='';


  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private router:Router,
    private http:HttpClient,
    ) {

      this.nombre=''
      this.apellido_paterno=''
      this.apellido_materno=''
      this.email=''
      this.telefono=''
      this.ocupacion=''


      this.getUser()
      this.mobileQuery = media.matchMedia('(max-width: 640px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  cerrarsesion(){
    
    localStorage.id=''
    this.router.navigate(['/'])
     
  }
  hide(){
    this.hidden = !this.hidden;
    console.log("is hidden" + this.hidden)
  }
  getUser() {
    console.log(localStorage['id'])
    let  data = {
      funcion: 'getUser',
      id: localStorage['id'],
    };
    this.http.post(AppComponent.url+'/api', data, AppComponent.header).subscribe(response => {
    let data2 = Object.values(response)
    this.nombre=data2[0]['nombre']
    this.apellido_paterno=data2[0]['apellido_paterno']
    this.apellido_materno=data2[0]['apellido_materno']
    this.email=data2[0]['email']
    this.telefono=data2[0]['telefono']
    this.ocupacion=data2[0]['ocupacion']
    })
  };
}
