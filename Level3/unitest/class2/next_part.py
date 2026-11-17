import unittest
def divide(x,y):
    return x/y
def first_letter(name):
    return name[0]
def square(x):
    return x*x
class TestDivide(unittest.TestCase):
    def test_divide(self):
        self.assertEqual(divide(36,6),6)
    def test_divide_by_zero(self):
        with self.assertRaises(ZeroDivisionError):
            divide(10,0)
    def test_first_letter(self):
        self.assertEqual(first_letter("advise"), "a")
    def test_first_letter_empty(self):
        with self.assertRaises(IndexError):
            first_letter("")
    def test_square(self):
        self.assertEqual(square(10),100)
    def test_square_negative(self):
        with self.assertRaises(TypeError):
            square("5")

if __name__ == "__main__":
    unittest.main()