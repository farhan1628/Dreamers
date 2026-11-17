class Car:
    def drive(self):
        print("Car is driving")

class Bus:
    def drive(self):
        print("Bus is driving")

class Bike:
    def drive(self):
        print("Bike is driving")

class fac:
    def create(self, vehicle):
        if vehicle == 'car':
            return Car()
        elif vehicle == 'bus':
            return Bus()
        elif vehicle == 'bike':
            return Bike()
        else:
            return None

factory = fac()
vehi_cle = factory.create("car")
vehi_cle.drive()