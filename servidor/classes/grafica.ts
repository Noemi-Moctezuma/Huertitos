export class GraficaData{
    private meses: string[] = ['enero', 'febrero', 'marzo', 'abril'];
    private valores: number[] = [0,0,0,0];
    
    constructor(){}

    getGraficaData(){
        return [
            {data:this.valores, label:this.meses},
            
            {data:this.valores, label:this.meses}
        ];
    }

    incrementarValor(mes:string, valor:number){
        mes = mes.toLowerCase().trim();

        for( let i in this.meses){
            if( this.meses[i] === mes){
                this.valores[i] += valor;
            }
        }
        return this.getGraficaData();
    }
}