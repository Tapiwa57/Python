Fruit = ["apple", "banana", "cherry"]
for x in Fruit:
    print(x)
Option = ("Please select your currency","1.Zimbabwe Gold (ZWG)","2.United States Dollar (USD)")
for x in Option:
    print(x)
Type = ("Honda","Nissan","Benz")
for x in Type:
    print(x)
    if x == "Nissan":
        break # selecting things you want
Colour = ("Black","White","Blue")
for x in Colour:
    if x == "White":
        continue # it remove the selected colour
    print(x)
for x in range(2,30,4): # start number is 2 , 30 is the last number , plus adding 4
    print(x)
for x in range(10):
    print(x)
else:
    print("Stop!")
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]
for x in adj:
  for y in fruits:
    print(x, y)
def my_function(fname):
  print(fname + " Refsnes")
my_function("Emil")
my_function("Tobias")
my_function("Linus")
def my_function(fname, lname):
  print(fname + " " + lname)
my_function("Emil", "Refsnes")