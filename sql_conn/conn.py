import mysql.connector

mydb=mysql.connector.connect(
    host="localhost",
    user="root",
    password="123456",
    database="shreya_cse"
)
print(mydb)

mycursor=mydb.cursor()
mycursor.execute("SELECT * FROM user")
myresult=mycursor.fetchall()
for x in myresult:
    print(x)