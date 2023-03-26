# exercise 3
# true
# true
# false
# false
# true
# false ***
# x is true, y is false, a: 5, b: 10

# exercise 4
my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit 
           esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, 
           sunt in culpa qui officia deserunt mollit anim id est laborum."""
print(len(my_text))

# exercise 5
longer_sentence = ''
while True:
    sentence = input('Input the longest sentence you can without the characters "a" or "A": ')
    if 'A' in sentence:
        print('Sorry, your sentence contains the letter "A". Please try again. ')
    elif 'a' in sentence:
        print('Sorry, your sentence contains the letter "a". Please try again. ')
    elif len(sentence)  > len(longer_sentence):
        longer_sentence = sentence
        print('Congratulations! You have set a new record with a sentence length of ', len(longer_sentence))
    else:
        print('Try again. Your sentence is not longer than the previous record. ')