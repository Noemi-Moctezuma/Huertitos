import express from 'express';
import { Server } from "socket.io";
import http from 'http';
import { SERVER_PORT } from '../global/enviroment';

export default class Servidorcito {
    private static _instance: Servidorcito;
    public app: express.Application;
    public port: number;
    private httpServer: http.Server;
    public io : Server;

    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = new Server(this.httpServer,{
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
              }
        });
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    start( callback: any){
        this.httpServer.listen(this.port, callback);
    }
}