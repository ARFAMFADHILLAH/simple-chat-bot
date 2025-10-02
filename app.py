from flask import Flask, render_template, request, jsonify
from responses import RESPONSES   # pastikan ada file responses.py
import time

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get_response", methods=["POST"])
def get_response():
    user_message = request.json.get("message", "").lower()
    
    # cari jawaban di dict
    response = RESPONSES.get(user_message, "Maaf, aku belum paham maksudmu.")
    time.sleep(1.5)  # simulasi typing delay
    return jsonify({"response": response})

if __name__ == "__main__":
    print(">> Flask app starting...")
    app.run(debug=True)
