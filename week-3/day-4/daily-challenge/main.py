from collections import Counter


class Text():


    @classmethod
    def from_file(cls):
        fileName = 'daily-challenge/the_stranger.txt'
        with open(fileName, 'r')as file:
            contents = file.readlines()
            return contents


    def __init__(self, text: str):
        self.text = text


    def word_frequency(self, word):
        words = self.text.split()
        count = words.count(word)
        if count == 0:
            return None
        else:
            return count
        

    def most_common(self):
        words = self.text.split()
        counter = Counter(words)
        most_common = counter.most_common(2)[1][0]
        return most_common


    def unique_words(self):
        words = self.text.lower().split()
        freq = {}
        for word in words:
            if word not in freq:
                freq[word] = 0
            freq[word] += 1
        unique = [word for word in freq if freq[word] == 1]
        return unique


# sentence = 'A good book would sometimes cost as much as a good house.'
# text = Text(sentence)
# print(text.word_frequency('cost'))
# print(text.most_common())
# print(text.unique_words())

file = str(Text.from_file())
text = Text(file)
print(text.word_frequency('I'))
print(text.most_common())
# print(text.unique_words())