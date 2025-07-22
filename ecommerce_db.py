import sqlite3

conn = sqlite3.connect('ecommerce.db')
cursor = conn.cursor()

cursor.execute('''
create table if not exists customer (
    uid integer primary key autoincrement,
    name text not null,
    email text not null,
    password text unique not null
);
''')
cursor.execute('''
create table if not exists order (
    oid integer primary key autoincrement,
    cid integer primary key,
    amount integer not null,
    date text,
    foriegn key (cid) references customer (uid)
);
''')
cursor.execute('''
create table if not exists product (
    pid integer primary key autoincrement,
    name not null,
    price integer not null,
    description text,
);
''')
cursor.execute('''
create table if not exists payment (
    pid integer primary key autoincrement,
    type not null,
    amount integer not null
);
''')
cursor.execute('''
create table if not exists category (
    cid integer primary key autoincrement,
    name not null,
    picture text,
    description text,
);
''')
cursor.execute('''
create table if not exists cart (
    cid integer primary key autoincrement,
    uid integer primary key,
    foreign key (uid) references customer (cid)
);
''')

conn.commit()
conn.close()
