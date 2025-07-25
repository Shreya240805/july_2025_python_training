import sqlite3

conn=sqlite3.connect('mydata.db')
cursor=conn.cursor()
cursor.execute("DELETE FROM users WHERE id=2")
conn.commit()
conn.close() 