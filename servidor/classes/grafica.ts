export class GraficaData {
    private meses_arr: string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    private temp_arr: number[] = [0, 0, 0, 0, 0, 0, 0];
    private sun_arr: number[] = [0, 0, 0, 0, 0, 0, 0];
    private hum_arr: number[] = [0, 0, 0, 0, 0, 0, 0];
    private temp_promedio: number = 0
    private sun_promedio: number = 0
    private hum_promedio: number = 0
    private mes: string = ''
    private temperatura: number = 0
    private sol: number = 0
    private humedad: number = 0
    private tempxmin_arr: number[] = []
    private sunxmin_arr: number[] = []
    private humxmin_arr: number[] = []
    private labelsxmin: String[] = []
    private id: String = ''
    constructor() { }
    getGraficaData() {

        /* console.log( 
              'temp: ' +this.temp +' sun: '+ this.sun+' tempxmin: '+ this.tempxmin
       +' sunxmin: '+this.sunxmin+' labelsxmin'+this.labelsxmin+' temperatura: '+this.temperatura+
       ' sol: '+this.sol)  */
        return {
            dataPromedio: [
                {
                    label: 'Temperatura',
                    data: this.temp_arr,
                },
                {
                    label: 'Sol',
                    data: this.sun_arr
                },
                {
                    label: 'Humedad',
                    data: this.hum_arr
                }
            ], dataxMinSun: [
                {
                    label: 'Sol',
                    data: this.sunxmin_arr
                },
            ], dataxMinTemp: [
                {
                    label: 'Temperatura',
                    data: this.tempxmin_arr,
                },
            ], dataxMinHumedad: [
                {
                    label: 'Humedad',
                    data: this.humxmin_arr,
                },
            ],
            labelsxMin: this.labelsxmin,
            temperatura: this.temperatura,
            sol: this.sol,
            humedad: this.humedad,
            id: this.id
        };

    }
    agregarDato(temp: number, tiempo: String, sun: number, id: string, humedad: number) {
        console.log(tiempo)
        this.temperatura = temp
        this.sol = sun
        this.humedad = humedad
        this.tempxmin_arr.push(temp)
        this.sunxmin_arr.push(sun)
        this.humxmin_arr.push(humedad)
        this.labelsxmin.push(tiempo)
        this.id = id
        return this.getGraficaData();
    }
    obtenerPromedio(temp: number, mes: string, sun: number, primer: boolean, id: string, humedad: number) {
        this.temperatura = temp
        this.sol = sun
        this.humedad = humedad
        this.mes = mes.toLowerCase().trim();
        this.id = id
        if (primer) {
            //hacer for para cada mes mandar llamar incrementar valor 
            this.temp_promedio = temp
            this.sun_promedio = sun
            this.hum_promedio = humedad
        } else {
            for (let i in this.meses_arr) {
                if (this.meses_arr[i] == mes) {
                    this.temp_promedio = (this.temp_promedio + temp) / 2
                    this.sun_promedio = (this.sun_promedio + sun) / 2
                    this.hum_promedio = (this.hum_promedio + humedad) / 2
                    this.incrementarValor(mes, this.temp_promedio, this.sun_promedio, this.hum_promedio)
                }
            }
        }
        return this.getGraficaData();
    }
    incrementarValor(mes: string, temp_promedio: number, sun_promedio: number, hum_promedio: number) {

        mes = mes.toLowerCase().trim();
        for (let i in this.meses_arr) {

            if (this.meses_arr[i] == mes) {
                this.temp_arr[i] = temp_promedio;
                this.sun_arr[i] = sun_promedio;
                this.hum_arr[i] = hum_promedio;
            }
        }
        return this.getGraficaData();
    }
    insertarPrimeros(promedios: any) {
        console.log(promedios)
        this.temp_arr = promedios[0].temp
        this.sun_arr = promedios[0].sun
        this.hum_arr = promedios[0].hum
        this.meses_arr = promedios[0].mes
        console.log(this.temp_arr)
        console.log(this.sun_arr)
        console.log(this.mes)
        return this.getGraficaData();

    }
}