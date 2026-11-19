class PaymentStrategy:
    def pay(self,payment):
        pass

class Bkash(PaymentStrategy):
    def pay(self,payment):
        print(payment,"taka is paid using Bkash")

class Nagad(PaymentStrategy):
    def pay(self,payment):
        print(payment,"taka is paid using Nagad")

class ATM(PaymentStrategy):
    def pay(self,payment):
        print(payment,"taka is paid using ATM")

class COD(PaymentStrategy):
    def pay(self,payment):
        print(payment,"taka will be paid using COD")

class Payment:
    def _init_(self,strategy):
        self.strategy = strategy

    def checkout(self,payment):
        self.strategy.pay(payment)

method=input("Enter your payment method (Bkash, Nagad, ATM, Cash On Delivery)):")

if method.lower() == "bkash":
        payment=Payment(Bkash())
elif method.lower() == "nagad":
    payment=Payment(Nagad())
elif method.lower() == "atm":
    payment=Payment(ATM())
elif method.lower() == "cash":
    payment=Payment(COD())
else:
    print("Invalid payment method")

payment.checkout(1250)