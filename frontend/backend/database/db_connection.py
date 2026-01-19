import mysql.connector

def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="23HP1A0518",
        database="internship_portal"
    )
