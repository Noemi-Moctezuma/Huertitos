template<class T> inline Print &operator <<(Print &obj, T arg) { obj.print(arg); return obj; }

float tempC; 
int luz;
String id;
int hum;
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



//se imprimen los dos datos
  Serial << tempC << " " << luz<< " " << hum<< " " << id;
  Serial.println();
  delay(5000);
}
