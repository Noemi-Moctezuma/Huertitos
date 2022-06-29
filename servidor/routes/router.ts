import { Router } from "express";
import { GraficaData } from "../classes/grafica";
import Servidorcito from "../classes/servidorcito";
import * as MySQLConnector from "../classes/mysql.connector";
import { execute } from "../classes/mysql.connector";

const router = Router();
const grafica =  new GraficaData();
MySQLConnector.init();
router.get('/grafica', (request, response)=>{
      response.json( grafica.getGraficaData() );
});

var contador: number=0
router.post('/grafica', (request, response)=>{

    //const mes = request.body.mes;
    //const valor = Number(request.body.valor);
    //grafica.incrementarValor(mes,valor);

    const temp = Number (request.body.temp)
    const tiempo = new Date(request.body.tiempo);
    const sun = Number (request.body.sun)
    var primer = false
if(contador=0){
     primer=true
}
    var mes:any = tiempo.getMonth()
    grafica.obtenerPromedio(temp, mes, sun, primer);
    const server = Servidorcito.instance;
    //execute("INSERT INTO dispositivo (data) VALUES ('"+valor+"');",[]);
    server.io.emit('cambio-grafica', grafica.getGraficaData());
    response.json(grafica.getGraficaData());
    contador ++
});

export default router;
