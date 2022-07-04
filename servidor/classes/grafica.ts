export class GraficaData{
    private meses: string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];
    private temp: number[] = [0,0,0,0,0,0,0];  
    private sun: number[] = [0,0,0,0,0,0,0];
    private temp_promedio : number = 0
    private sun_promedio: number =0
    private mes:string=''
    
    constructor(){}
    getGraficaData(){
        return [{
            label: 'Temperatura',
            //temp_promedio:this.temp_promedio, 
            //mes:this.mes, 
            //sun_promedio: this.sun_promedio,
            data:this.temp,
        },{
            label: 'Sol',
            data:this.sun
            
        }];
    }
    obtenerPromedio(temp:number, mes:string, sun:number , primer:boolean){
        this.mes= mes.toLowerCase().trim();
        if(primer){
            this.temp_promedio = temp
            this.sun_promedio = sun
        }else{
            for(let i in this.meses){
                if(this.meses[i] === mes){
                    this.temp_promedio = (this.temp_promedio+ temp)/2
                    this.sun_promedio = (this.sun_promedio+ sun)/2
                    this.incrementarValor(mes, this.temp_promedio, this.sun_promedio)
                }
            }
        }
        //return this.getGraficaData();
    }
    incrementarValor(mes:string, temp:number, sun:number){
        mes = mes.toLowerCase().trim();
        for( let i in this.meses){
            if( this.meses[i] === mes){
                this.temp[i] = temp;
                this.sun[i] = sun;
            }
        }
        return this.getGraficaData();
    }
}