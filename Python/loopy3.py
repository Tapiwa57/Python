i = 0
fruits = ["kiwi","coconut","apple"]
while i < 3:
    print(fruits[i])
    i += 1
i =0
Fruits = ["kiwi","coconut","apple"]
while i < len(Fruits):
    print(Fruits[i])
    i += 1
for x in range(1,10):
    print(x)

fruit = ["kiwi","coconut","apple"]
for i in range(len(fruit)):
    print(fruit[i])
# nested loops next less
# Assignment Question: Write a Python program using a for loop to print the sum of all even numbers from 1 to 20.
sum = 0
for number in range(1,21):
    if number  % 2 == 0: # even number
        sum += number
    print(number)