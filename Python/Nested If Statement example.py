number = input("What is these number")
if int(number) > 0:
    if int(number) % 2 == 0:
        print("The number is positive and even.")
    else:
        print("The number is positive and odd.")
elif int(number) < 0:
    print("The number is negative.")
else:
    print("The number is zero.")