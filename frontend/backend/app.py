from flask import Flask
from flask_cors import CORS
from auth.login import login_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(login_bp, url_prefix="/api")

@app.route("/")
def home():
    return "Backend running successfully"

if __name__ == "__main__":
    app.run(debug=True)
