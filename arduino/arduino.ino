template<class T> inline Print &operator <<(Print &obj, T arg) { obj.print(arg); return obj; }

float tempC; 
float antTemp;
float difTemp;
int luz;
float antLuz;
float difLuz;
String id;
int hum;
float antHum;
float difHum;

void setup() {

  Serial.begin(9600);
}

void loop() {
  //puerto analogico 9 para sensor de temperatura
  tempC = analogRead(0); 
  
    // puerto A1 para fotoresitencia
  luz = analogRead(1);
  
  //puerto para el sensor de humedad
  hum= analogRead(2);
   

  // Calculamos la temperatura con la f�rmula
  tempC = (5.0 * tempC * 100.0)/1024.0; 

  id="TS-001";
 

//eliminando picos en datos comparando cada dato con el anterior

//temperatura
  if (tempC > antTemp ){
    difTemp = tempC - antTemp;
    }
    else{
       difTemp = antTemp - tempC;
      }     
  while(antTemp!=0 && difTemp >= 2.0){
    //Serial.println("entro al while con diferencia de ");
    //Serial.println(difTemp);
    tempC = analogRead(0); 
    tempC = (5.0 * tempC * 100.0)/1024.0; 
      if (tempC > antTemp ){
    difTemp = tempC - antTemp;
    }
    else{
       difTemp = antTemp - tempC;
      }
    } 

//luz

  if (luz > antLuz ){
    difLuz = luz - antLuz;
    }
    else{
       difLuz = antLuz - luz;
      }     
  while(antLuz!=0 && difLuz >= 40){
     //Serial.println("entro al while con diferencia de ");
    //Serial.println(difLuz);
    luz = analogRead(1);
      if (luz > antLuz ){
        difLuz = luz - antLuz;
        }
        else{
           difLuz = antLuz - luz;
          }
    } 
//humedad

  if (hum > antHum ){
    difHum = hum - antHum;
    }
    else{
       difHum = antHum - hum;
      }     
  while(antHum!=0 && difHum >= 100){
    //Serial.println("entro al while con diferencia de ");
    //Serial.println(difHum);
    hum= analogRead(2);
         if (hum > antHum ){
        difHum = hum - antHum;
        }
        else{
           difHum = antHum - hum;
          }
    } 
    
//se imprimen los dos datos

    //Serial.println( "datos devueltos");
  Serial << tempC << " " << luz<< " " << hum<< " " << id;
  Serial.println(" ");
  antTemp = tempC;
  antLuz = luz;
  antHum = hum;
  delay(5000);
}
