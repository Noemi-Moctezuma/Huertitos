import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cliente2';
  //la url es aleatoria y se actualiza cada vez que se ejecuta el ngrok, cambiarla el lunes antes de empezar el coso
 // public static url = 'https://07e4-177-242-197-108.ngrok.io'
  public static url = 'http://localhost:4003'
}
