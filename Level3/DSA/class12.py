class student:
    def __init__(self, name):
        self.name = name
    def update(self, notice):
        print(f"{self.name} got  {notice} notice")



class school:
    def __init__(self):
        self.students = []
    def subscribe(self, student):
        self.students.append(student)
    def unsubscribe(self, student):
        self.students.remove(student)
    def publish_notice(self, notice):
        print(f"Notice: {notice}")
        for student in self.students:
            student.update(notice)


rahim = student("Rahim")
karim = student("Kairm")
david = student("David")
school = school()
school.subscribe(david)
school.subscribe(rahim)
school.subscribe(karim)

school.unsubscribe(karim)

school.publish_notice("School is off.")