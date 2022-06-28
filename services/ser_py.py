import urllib3
import serial
import json
import re

http = urllib3.PoolManager()
arduino = serial.Serial("COM3", baudrate= 9600, timeout= 1.0)
arduino.flushInput()
URL = 'http://localhost/sistemasAbiertos/components/ser_py.php'
while True:
    row = arduino.readline()
    clean_row = row.decode()
    
    values = clean_row.split(" ")
    value_1 = values[0]
    value_2 = values[1]
    value_2_no_spaces = re.sub("\r\n", '', value_2)
   
    if clean_row:
        response = http.request('POST', URL, fields={'dato_1': value_1, 'dato_2': value_2_no_spaces})
        resJson = response.data.decode('UTF-8')
        data = json.loads(resJson)
        print(data)