import random
colour = ["red","pink","purple","black"]
print(colour)
print(colour[1])
print(len(colour))
colour.remove("black")
print(colour)
colour[1] = "blue"    
print(colour)
print(random.choice(colour))
Fruit = ["Apple","Cherry","Banana","kiwi","Coconut"]
print(Fruit.index("Apple"))
print(Fruit[1:4:2])
a = "hello World"
print(a[::-1])
print(a[-1::-1])
Fruit[1:3] = "mango","orange"
print(Fruit)
x = ["hello","cherry","banana"]
x[0:3:2] = "mango","lemon"
print(x)
b = {"blue","brown","black","green",}
print(b)
c = {"orange","cream"}
b.update(c)
print(b)
car = {"brand": "Ford","model": "Mustang","year": 1964,"year": 2020           
}
print(car)
print(car.keys())
car.update({"brand":"honda"})
car.pop("brand")
print(car)
car.popitem()
print(car)