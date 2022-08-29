template<class T> inline Print &operator <<(Print &obj, T arg) { obj.print(arg); return obj; }

float tempC; 
int luz;
String id;
void setup() {

  Serial.begin(9600);

}

void loop() {

  //puerto analogico 9 para sensor de temperatura
  tempC = analogRead(1); 
   
  // Calculamos la temperatura con la f�rmula
  tempC = (5.0 * tempC * 100.0)/1024.0; 

  // puerto A1 para fotoresitencia
  luz = analogRead(0);
  id="TS-001";

//se imprimen los dos datos
  Serial << tempC << " " << luz<< " " << id;
  Serial.println();
  delay(5000);
}
