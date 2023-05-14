import random


class Card:

    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self):
        return f"{self.__class__.__name__}"

    def display_card(self):
        print(f"{self}.suit: {self.suit}")
        print(f"{self}.value: {self.value}")


# card1 = Card('hearts', 'Q')
# card1.display_card()


class Deck:

    def __init__(self, amount: int):
        self.amount = amount

    def deal_card(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
        deck = []
        count = 0
        while True:
            if count < 52:
                key = random.choice(suits)
                value = random.choice(values)
                card = {key: value}
                if card not in deck:
                    deck.append(card)
                    count += 1
            else:
                break
        random_card = random.choice(deck)
        return random_card

    def get_deck(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
        deck = []
        count = 0
        while True:
            if count < 52:
                key = random.choice(suits)
                value = random.choice(values)
                card = {key: value}
                if card not in deck:
                    deck.append(card)
                    count += 1
            else:
                break
        # random_card = random.choice(deck)
        return deck

    def shuffle(self):
        if self.amount == 52:
            deck = self.get_deck()
            random.shuffle(deck)
            return deck
        elif self.amount < 52:
            return "not a complete deck"
        else:
            return "there are too many cards"


deck1 = Deck(52)
# print(deck1.deal_card())
print(deck1.shuffle())

