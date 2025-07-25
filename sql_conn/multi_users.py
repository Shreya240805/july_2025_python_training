import sqlite3

conn=sqlite3.connect('mydata.db')
cursor=conn.cursor()
num_users=int(input("enter the number of users:"))

for i in range(num_users):
    print(f"\n User {i+1}")
    name=input("enter name:")
    age=int(input("enter age:"))
    cursor.execute("INSERT INTO users (name, age) VALUES (?,?)",(name, age))
conn.commit()
conn.close()