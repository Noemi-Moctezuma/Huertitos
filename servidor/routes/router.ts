import * as MySQLConnector from "../classes/mysql.connector";

import { GraficaData } from "../classes/grafica";
import { Router } from "express";
import Servidorcito from "../classes/servidorcito";
import { execute } from "../classes/mysql.connector";
import { select } from "../classes/mysql.connector";
import { map } from "rxjs/operators"; 

import { createPool, Pool } from "mysql";

const router = Router();
const grafica =  new GraficaData();
MySQLConnector.init();

router.get('/grafica', (request, response)=>{
      response.json( grafica.getGraficaData() );
});

var contador: number=0
router.post('/grafica', (request, response)=>{
    console.log(request.body)
    //const mes = request.body.mes;
    //const valor = Number(request.body.valor);
    //grafica.incrementarValor(mes,valor);
    const temp = Number (request.body.temp)
    const tiempo = new Date(request.body.tiempo);
    const sun = Number (request.body.sun)
    var primer = false
    if(contador===0){
        primer=true
    }
    var mes:any = tiempo.toLocaleString("es-MX", { month: "long" })
  grafica.obtenerPromedio(temp, mes, sun, primer);
  grafica.agregarDato(temp, tiempo, sun);
    
    const server = Servidorcito.instance;
    //execute("INSERT INTO dispositivo (data) VALUES ('"+valor+"');",[]);
    server.io.emit('cambio-grafica', grafica.getGraficaData());
    response.json(grafica.getGraficaData());
    contador ++
});
router.post('/login', (request, response)=>{
  
  console.log(request.body)
  const email = request.body.email
  
const pass = request.body.password


});
export default router;
