from datetime import datetime, timedelta, timezone
from types import MethodDescriptorType
import urllib3
import urllib
import mysql.connector
import serial
import json
import re
from datetime import timedelta

mydb = mysql.connector.connect(
host="localhost",
user="root",
password="",
database="db_invernadero"
)
mycursor = mydb.cursor()

http = urllib3.PoolManager()
arduino = serial.Serial("COM10", baudrate= 9600)
#arduino = serial.Serial("COM3", baudrate= 9600)
arduino.flushInput()

while True:
    row = arduino.readline()
    clean_row = row.decode()
    
    values = clean_row.split(" ")
    print (row)
    temp = values[0]
    sun = values[1]
    hum = values[2]
    id = values[3]
    sun = re.sub("\r\n", '', sun)
    id = re.sub("\r\n", '', id)
    tiempo_actual= datetime.now()
    #tiempo_actual = tiempo_actual - timedelta(days=74)
    sql="INSERT INTO tbl_sun (valor, tiempo, sensor) VALUES (%s, %s, %s)"
    valores =(sun, tiempo_actual, id)

    mycursor.execute(sql, valores)

    sql2="INSERT INTO tbl_temp (valor, tiempo, sensor) VALUES (%s, %s, %s)"
    valores2 =(temp, tiempo_actual, id)

    mycursor.execute(sql2, valores2)

    sql3="INSERT INTO tbl_hum (valor, tiempo, sensor) VALUES (%s, %s, %s)"
    valores3 =(hum, tiempo_actual, id)

    mycursor.execute(sql3, valores3)
    mydb.commit()
    
    print(mycursor.rowcount, "Insert OK")
    URL = 'http://localhost:4003/grafica'
    if clean_row:
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        data =  urllib.parse.urlencode({'temp': temp,'tiempo': tiempo_actual, 'sun': sun,  'humedad': hum, 'id':id})
        response = http.request('POST', URL, headers=headers, body=data)
        #print(response)
