from translate import Translator

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 

translator = Translator(to_lang='en', from_lang='fr')

translations = {}
for word in french_words:
    translations[word] = translator.translate(word)

print(translations)