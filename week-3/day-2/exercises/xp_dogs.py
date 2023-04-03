from xp import Dog
import random

class PetDog(Dog):
    def __init__(self,name,age,weight):
        super().__init__(name,age,weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True
    
    def play(self, *args):
        print(f'{args} all play together')

    def do_a_trick(self):
        self.sentences = [f'{self.name} does a barrel roll', 
                     f'{self.name} stands on his back legs', 
                     f'{self.name} shakes your hand', 
                     f'{self.name} plays dead']
        self.random_sentence = random.choice(self.sentences)
        if self.trained == True:
            print(self.random_sentence)
            
        


dog1 = PetDog('steve', 3, 12)
dog2 = PetDog('pete', 5, 7)
dog3 = PetDog('henry', 16, 8)

dog4 = PetDog('charlie',3,6)
dog4.train()
dog4.play('steve','henry')
dog4.do_a_trick()