
class Family(object):
    
    def __init__(self, members,last_name):
        self.members = members
        self.last_name = last_name   
    
    
    def born(self, **kwargs):
        self.members.append(kwargs)
        print('congratulations message')
        return self.members
    
    
    def is_18(self, name):
        for member in self.members:
            if name == member['name']:
                if member['age'] >= 18:
                    return True
                else:
                    return False
                
    def family_presentation(self):
        print(f'the {self.last_name} family members are: ')
        for member in self.members:
            print(member['name'])



class TheIncredibles(Family):
    def __init__(self, members,last_name):
        pass


if __name__ == "__main__":
    fam = Family([{'name':'Michael','age':35,'gender':'Male','is_child':False}, 
              {'name':'Sarah','age':32,'gender':'Female','is_child':False}], 'lastname')
    fam.born(name ='Steve',age = 1,gender = 'Male',is_child = True)
    print(fam.is_18('Steve'))       
    fam.family_presentation()