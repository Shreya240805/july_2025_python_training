import mysql.connector
def insert_data(id,name,email,password):
    mydb=mysql.connector.connect(
        host="localhost",
        user="root",
        password="123456",
        database="shreya_cse"
    )

    mycursor=mydb.cursor()
    sql="INSERT INTO user(id,name,email,password) VALUES (%s,%s,%s,%s)"
    val=(id,name,email,password)
    mycursor.execute(sql,val)
    mydb.commit()
    mycursor.close()
    mydb.close()
    print(mycursor.rowcount,"record inserted")

id=input("enter id: ")
name=input("enter name: ")
email=input("enter email: ")
password=input("enter password: ")
insert_data(id,name,email,password)