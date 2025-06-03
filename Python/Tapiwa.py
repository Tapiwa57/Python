for num in range(1,6):
    for i in range(1,6):
        i *= num
        print(i,end= ' ')
    print()

def get_grade(score):
    if 90 <=  score <=100:
     return "A"
    elif 80 <= score <=89:
       return "B"
    elif 70 <= score <=79:
       return "C"
    elif 60 <= score <=69:
       return "D"
    else:
       return "F"
print(get_grade(60))
print(get_grade(97))
print(get_grade(87))
print(get_grade(50))

def Show_balance():
   print(f"Balance in account ${balance}: ")

def Deposit():
   

def Withdrawal():
   pass

balance = float(0)
running = True

while running:
   print("1.Show balance")
   print("2.Deposit")
   print("3.Withdrawal")
   print("4.Exit")

   choice = input("Enter choice number (1-4)")

if choice == "1":
   Show_balance
elif choice == "2":
   Deposit
elif choice == "3":
   Withdrawal
elif choice == "4":
   running =False
else:
     print("invalid number")