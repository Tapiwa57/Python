from flask import Flask, request, jsonify
import tkinter as tk
root = tk.Tk()
root.title("Hello, Tkinter!")
root.mainloop()


app = Flask(__name__)

# Sample data storage (replace with actual database integration)
users = {}
loans = {}

# Route for user registration
@app.route('/register', methods=
['POST'])
def register():
    data = request.json
    if data['email'] in users:
        return jsonify({'message': 'User already exists'}), 400
    
    users[data['email']] = {
        'name': data['name'],
        'password': data['password']
    }
    return jsonify({'message': 'User registered successfully'}), 200

# Route for user login
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = users.get(data['email'])
    if user and user['password'] == data['password']:
        return jsonify({'message': 'Login successful'}), 200
    return jsonify({'message': 'Invalid credentials'}), 400

# Route for loan application (example)
@app.route('/apply-loan', methods=['POST'])
def apply_loan():
    data = request.json
    loans[data['email']] = {
        'loan_type': data['loan_type'],
        'amount': data['amount']
    }
    return jsonify({'message': 'Loan application submitted'}), 200

# Placeholder for external API integration (e.g., payment)
@app.route('/payment', methods=['POST'])
def payment():
    data = request.json
    # Replace this with actual API call
    return jsonify({'message': 'Payment processed successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)
