from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app=Flask(__name__)

app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='roottoor'
app.config['MYSQL_DB']='project'

mysql=MySQL(app)

@app.route('/')
def Home():
    return 'JOB LISTING'

@app.route('/alljobs', methods=["GET"])
def alljobs():
    sql="select * from job_listing"
    cur=mysql.connection.cursor()
    cur.execute(sql)
    results=cur.fetchall()
    cur.close()
    return jsonify(results)

@app.route("/newJobListings",methods=["POST"])
def update():
    json=request.get_json()
    job_id=json.get("job_id")
    job_name=json.get("job_name")
    job_desc=json.get("job_desc")
    qualification=json.get("qualification")
    email=json.get("email")
    job_type=json.get("job_type")
    company_name=json.get("company_name")
    location=json.get("location")
    salary=json.get("salary")
    last_date=json.get("last_date")
    cur=mysql.connection.cursor()
    sql="insert into job_listing(job_id,job_name,job_desc,qualification,email,job_type,company_name,location,salary,last_date) values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    val=[job_id,job_name,job_desc,qualification,email,job_type,company_name,location,salary,last_date]
    cur.execute(sql,val)
    mysql.connection.commit()
    cur.close()
    return "success"

if __name__=='__main__':
    app.run()