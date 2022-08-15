export class GraficaData{
    private meses: string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio','agosto', 'septiembre','octubre','noviembre','diciembre'];
    private temp: number[] = [0,0,0,0,0,0,0];  
    private sun: number[] = [0,0,0,0,0,0,0];
    private temp_promedio : number = 0
    private sun_promedio: number =0
    private mes:string=''
    private temperatura : number = 0
    private sol: number =0
    private tempxmin: number[] =[]
    private sunxmin: number[] =[]
    private labelsxmin: Date[]= []
    constructor(){}
    getGraficaData(){
         /* console.log( 
               'temp: ' +this.temp +' sun: '+ this.sun+' tempxmin: '+ this.tempxmin
        +' sunxmin: '+this.sunxmin+' labelsxmin'+this.labelsxmin+' temperatura: '+this.temperatura+
        ' sol: '+this.sol)  */
        return {
            dataPromedio:[
                {
                label: 'Temperatura',
                data:this.temp,
            },
            {
                label: 'Sol',
                data:this.sun
                
            }
        ],dataxMin:[
            {
            label: 'Temperatura',
            data:this.tempxmin,
        },
        {
            label: 'Sol',
            data:this.sunxmin
            
        },
        
    ],
        labelsxMin:this.labelsxmin,
        temperatura:this.temperatura,
        sol:this.sol
        };
        
    }
    agregarDato(temp:number, tiempo:Date, sun:number ){
        this.temperatura = temp
        this.sol = sun
        this.tempxmin.push(temp)
        this.sunxmin.push(sun)
        this.labelsxmin.push(tiempo)
        return this.getGraficaData();
    }
    obtenerPromedio(temp:number, mes:string, sun:number , primer:boolean){
        this.temperatura = temp
        this.sol = sun
        this.mes= mes.toLowerCase().trim();
        if(primer){
            this.temp_promedio = temp
            this.sun_promedio = sun
        }else{
            for(let i in this.meses){
            
                if(this.meses[i] == mes){
                    this.temp_promedio = (this.temp_promedio+ temp)/2
                    this.sun_promedio = (this.sun_promedio+ sun)/2
                    this.incrementarValor(mes, this.temp_promedio, this.sun_promedio)
                    
                     }
            }
        }
        return this.getGraficaData();
    }
    incrementarValor(mes:string, temp_promedio:number, sun_promedio:number){
     
        mes = mes.toLowerCase().trim();
        for( let i in this.meses){
            
            if( this.meses[i] == mes){
                this.temp[i] = temp_promedio;
                this.sun[i] = sun_promedio;
            }
        }
        return this.getGraficaData();
    }
}