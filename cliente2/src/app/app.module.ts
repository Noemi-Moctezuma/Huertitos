import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { GraficaComponent } from './components/grafica/grafica.component';

const config: SocketIoConfig={
  url:'http://localhost:4003',
  options:{}
}
@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
