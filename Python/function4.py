balance = 100

def withdraw():
    amount = float(input("Enter amount you want to withdraw:"))
    if amount > balance:
        print("Insufficient balance")
        return 0
    elif amount < 0:
        print("Amount should be greater than 0" )
        return 0
    else:
        return amount
    
withdraw()
