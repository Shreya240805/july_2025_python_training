import sqlite3

conn=sqlite3.connect('mydata.db')
cursor=conn.cursor()
name=input("enter name:")
age=int(input("enter age:"))
cursor.execute("INSERT INTO users (name, age) VALUES (?,?)",(name, age))
conn.commit()
conn.close()