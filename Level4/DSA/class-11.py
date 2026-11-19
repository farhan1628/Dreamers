class car:
    def des(self):
        return "Car brand: Ford. Car model: Ford Bronco "
    def price(self):
        return 45000000


class GPS:
    def __init__(self, car):
        self.car = car
    def des(self):
        return self.car.des() + "GPS is installed "
    def price(self):
        return self.car.price()+ 12000


class dashcam:
    def __init__(self, car):
        self.car = car
    def des(self):
        return self.car.des() + "Dashcamera is installed "
    def price(self):
        return self.car.price() + 14000

class sun_roof:
    def __init__(self, car):
        self.car = car
    def des(self):
        return self.car.des() + "Sun roof is added."
    def price(self):
        return self.car.price() + 10500

car = car()
car  =GPS(car)
car = dashcam(car)
car = sun_roof(car)
print(car.des())
print("Total Price:", car.price())