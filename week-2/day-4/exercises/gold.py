from datetime import datetime, date


def get_age():#year, month, day):
    year = input('In what year were you born?(YYYY) ')
    month = input('In what month were you born?(MM) ')
    day = input('On what day of the month were you born?(DD) ')
    birthdate = day+'/'+month+'/'+year
    birthdate_datetime = datetime.strptime(birthdate, '%d/%m/%Y')
    age_years =( date.today() - birthdate_datetime.date()).days // 365
    
    return age_years

def can_retire():
    gender = input('What is you gender?(m/f) ')
    age = get_age()
    if gender == 'm':
        if age < 67:
            can_retire = False
            print(f'can_retire = {can_retire}')
        else:
            can_retire = True
            print(f'can_retire = {can_retire}')
    elif gender == 'f':
        if age < 62:
            can_retire = False
            print(f'can_retire = {can_retire}')
        else:
            can_retire = True
            print(f'can_retire = {can_retire}')

can_retire()








