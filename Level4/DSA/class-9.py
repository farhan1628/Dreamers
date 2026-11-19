class principal:
    _instance = None
    def __new__(cls):
        if cls._instance is  None:
            cls._instance = super().__new__(cls)
        return cls._instance

principal1 = principal()
principal2 = principal()

print(principal1 is principal2)



class school:
    _instance = None
    def __new__(cls):
        if cls._instance is  None:
            cls._instance = super().__new__(cls)
        return cls._instance
    def school_info(self):
        print("Dreamers")

school1 = school()
school2 = school()

print(school1 is school2)