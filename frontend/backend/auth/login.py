from flask import Blueprint, request, jsonify
from database.db_connection import get_db

login_bp = Blueprint("login", __name__)

@login_bp.route("/login", methods=["POST"])
def login():
    data = request.json

    # Validate input
    if not data or not data.get("email") or not data.get("password") or not data.get("role"):
        return jsonify({"error": "Missing fields"}), 400

    table = "admins" if data["role"] == "admin" else "students"

    db = get_db()
    cursor = db.cursor(dictionary=True)

    cursor.execute(
        f"SELECT * FROM {table} WHERE email=%s",
        (data["email"],)
    )
    user = cursor.fetchone()

    if not user:
        return jsonify({"error": "User not found"}), 404

    # ✅ PLAIN TEXT PASSWORD CHECK
    if user["password"] != data["password"]:
        return jsonify({"error": "Invalid password"}), 401

    return jsonify({"message": "Login successful"}), 200
