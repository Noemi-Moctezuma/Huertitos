import * as MySQLConnector from "../classes/mysql.connector";

import { GraficaData } from "../classes/grafica";
import { Router } from "express";
import Servidorcito from "../classes/servidorcito";
import { execute } from "../classes/mysql.connector";
import { select } from "../classes/mysql.connector";
/* import { map } from "rxjs/operators"; 
 */
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
    const humedad = Number (request.body.humedad)
    const temp = Number (request.body.temp)
    const tiempo = new Date(request.body.tiempo);
    const sun = Number (request.body.sun)
    const id = String(request.body.id)
  
    const hora =  tiempo.getHours() + ':'+tiempo.getMinutes()+':'+tiempo.getSeconds()
    var primer = false
    if(contador===0){
        primer=true
    }
    var mes:any = tiempo.toLocaleString("es-MX", { month: "long" })
    grafica.obtenerPromedio(temp, mes, sun, primer, id, humedad);
    grafica.agregarDato(temp, hora, sun, id, humedad);
    
    const server = Servidorcito.instance;
    //execute("INSERT INTO dispositivo (data) VALUES ('"+valor+"');",[]);
    server.io.emit('cambio-grafica', grafica.getGraficaData());
    response.json(grafica.getGraficaData());
    contador ++
});
router.post('/promedio', (request)=>{
    //console.log(request.body)
    grafica.insertarPrimeros(request.body);
   /*  
    const server = Servidorcito.instance;
    //execute("INSERT INTO dispositivo (data) VALUES ('"+valor+"');",[]);
    server.io.emit('cambio-grafica', grafica.getGraficaData());
    response.json(grafica.getGraficaData());
    contador ++ */
});
router.post('/api', (request, response)=>{
  let funcion = request.body.funcion
  let sql =''
  switch ( funcion ) {
    case 'login':
        let email = request.body.user.email
        let pass = request.body.user.password
        sql = "SELECT id FROM tbl_usuarios WHERE email ='"+email+"' and password = md5('"+pass+"') "
        break;
    case 'getUser':
        let id = request.body.id
        sql = "SELECT nombre, apellido_paterno, apellido_materno, email, telefono, ocupacion  FROM tbl_usuarios WHERE id ='"+id+"' "
        break;
    case 'getCultivosUsuario':
        let idUser = request.body.id
        sql = "SELECT nombre FROM tbl_cultivos JOIN tbl_usuarios_cultivos WHERE tbl_cultivos.id = tbl_usuarios_cultivos.id_cultivo AND tbl_usuarios_cultivos.id_usuario ='"+idUser+"' "
        break;
    case 'editarUsuario':
        let nombre = request.body.user.nombre
        let apellido_paterno = request.body.user.apellido_paterno
        let apellido_materno = request.body.user.apellido_materno
        email = request.body.user.email
        let telefono = request.body.user.telefono
        let ocupacion = request.body.user.ocupacion
        id = request.body.user.id
        sql = "UPDATE tbl_usuarios SET nombre = '"+nombre+"', apellido_paterno = '"+apellido_paterno+"', apellido_materno = '"+apellido_materno+"', email = '"+email+"', telefono = '"+telefono+"', ocupacion ='"+ocupacion+"' WHERE id = '"+id+"' "
        break;
    case 'getCultivos':
        sql = "SELECT id, nombre FROM tbl_cultivos"
        break;
    case 'addCultivoUsuario':
        id=request.body.id
        let idCultivo = request.body.cultivo
        sql = "INSERT INTO tbl_usuarios_cultivos(id_usuario, id_cultivo) VALUES ('"+id+"','"+idCultivo+"')"
        break;
    case 'agregarDispositivo':
            id = request.body.id
            let dispositivo = request.body.dispositivo
            sql = "INSERT INTO tbl_usuarios_dispositivos(id_usuario, dispositivo) VALUES ('"+id+"','"+dispositivo+"')"
            break;
    case 'agregarUsuario':
        nombre = request.body.user.nombre
        apellido_paterno = request.body.user.apellido_paterno
        apellido_materno = request.body.user.apellido_materno
        email = request.body.user.email
        let password = request.body.user.password
        telefono = request.body.user.telefono
        ocupacion = request.body.user.ocupacion
        let cultivo = request.body.user.cultivo
        sql = "INSERT INTO tbl_usuarios(nombre, apellido_paterno, apellido_materno, email, password, telefono, ocupacion) VALUES ('"+nombre+"','"+apellido_paterno+"','"+apellido_materno+"','"+email+"', md5('"+password+"'),'"+telefono+"','"+ocupacion+"')"
       //sql = ""
        break; 
    case 'getPromedioBDT':
        sql = "SELECT AVG(valor) temp, month(tiempo) mes FROM tbl_temp GROUP BY month(tiempo)"
        break;
    case 'getPromedioBDS':
        sql = "SELECT AVG(valor) sun , month(tiempo) mes FROM tbl_sun GROUP BY month(tiempo)"
        break;
    case 'getPromedioBDH':
        sql = "SELECT AVG(valor) hum , month(tiempo) mes FROM tbl_hum GROUP BY month(tiempo)"
        break;   
    default: 
    
        // break;
 }
  /* console.log(request.body)
   */

// como se ejecuta una promesa que siempre está esperando una respuesta puede que no la obtenga a tiempo y marque como pending
// por eso se pone el .then para que ejecute el response.json hasta que haya terminado
  execute(sql,[]).then(results => 
  response.json(results))  


});
export default router;
