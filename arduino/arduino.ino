template<class T> inline Print &operator <<(Print &obj, T arg) { obj.print(arg); return obj; }

float tempC; 
int luz;
void setup() {

  Serial.begin(9600);

}

void loop() {

  //puerto analogico 9 para sensor de temperatura
  tempC = analogRead(1); 
   
  // Calculamos la temperatura con la fórmula
  tempC = (5.0 * tempC * 100.0)/1024.0; 

  // puerto A1 para fotoresitencia
  luz = analogRead(0);

//se imprimen los dos datos
  Serial << 1 << " " << 2;
  Serial.println();
  delay(5000);
}
