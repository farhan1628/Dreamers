import unittest

def check_even(number):
    return number % 2 == 0

def wordcount(sent):
    word = sent.split()
    return len(word)
def search(sentence):
    split_sent = sentence.split()
    return split_sent
def check_data_type(data):
    return data
class TestEven(unittest.TestCase):
    def test_is_even(self):
        self.assertTrue(check_even(10))
    def test_word_count(self):
        self.assertEqual(wordcount("When will we learn data base?"), 6)
    def test_search_in_sent(self):
        self.assertIn("color", search("what is the color of the sun?"))
    def test_check_data_type(self):
        self.assertIsInstance(check_data_type(8),int)
        self.assertIsInstance(check_data_type("hello"), str)
if __name__ == "__main__":
    unittest.main()