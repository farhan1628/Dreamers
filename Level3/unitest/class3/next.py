import unittest
from unitest import reverse_string, vowel_checker, word_finder

class Test(unittest.TestCase):
    def test_reverse_string(self):
        self.assertEqual(reverse_string("moon"), "noom")
    def test_vowel_checker(self):
        self.assertEqual(vowel_checker("capital"), 3)
    def test_word_finder(self):
        self.assertTrue(word_finder("the bus is red"),False)
        self.assertFalse(word_finder("the train is red"),True)

if __name__  == "__main__":
    unittest.main()