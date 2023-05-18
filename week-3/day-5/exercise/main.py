import enchant


class AnagramChecker:

    def __init__(self, file_name):
        self.words = []
        with open(file_name, 'r') as file:
            for line in file:
                words_in_line = line.strip().split()
                self.words += words_in_line

    def is_valid_word(self, word):
        dictionary = enchant.Dict("en_US")
        if dictionary.check(word):
            return 'valid'
        else:
            return 'not valid'


file = AnagramChecker('text_file.txt')
print(file.is_valid_word('hello'))
 