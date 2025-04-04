SSID = input("Enter the Ecocash SSID code:")
print("short code" + SSID)
if SSID == "*151#":
    print("correct SSID")
else:
    print("wrong SSID")
Option = ("Please select your currency\n1.Zimbabwe Gold (ZWG)\n2.United States Dollar (USD)")
print(Option)
Select = input("Enter your choice:")
print(Select)
Password = input("Walcome to the Ecocash ZWG Wallet. Please enter your PIN to Proceed:")
print(Password)
if Password == "2020":
    print("pin successful")
else:
    print("wrong pin")
balance = 100
print("Select\n1.Send Money\n2.Make Payment\n3.Cash Out\n4.Airtime & Bundles\n5.Financial Service\n6.Wallet Services\n7.Banking services ")
option = input("select any option (1 to 8):")
if option == "1":
    recipient = input("Enter Subcriber number:")   
name = input("Name of subscriber:")
amount = float(input("Enter amount:"))
if amount <= 0:
    print("Invalid amount:")
elif amount > balance:
    print("insufficient balance")
print(f"Confirm detail: Sending ${amount} to {name} and {recipient}" )
balance-= amount
print(f"Transaction is successful.Your new balance is: ${balance}")




