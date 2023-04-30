# Ben, Alan, Tina, Ziv
# name, age, passport, personal-info = birthdate, children, married...
from datetime import date

class Applicant:

    def __init__(self, name, passport_num, birthdate,children, married) -> None:
        self.name = name
        self.passport_num = passport_num
        self.birthdate =birthdate
        self.children = children
        self.married = married

def check_birthdate(birthdate):
    age = date.today().year - birthdate.year
    if birthdate < 18:
        return False
    return True

criteria = {
    'birthdate': check_birthdate()
}

class USEmbassy:

    def __init__(self, applicant_criteria: dict):
        self.applicant_criteria = applicant_criteria

    def check_applicant(self, applicant):
        applicant_passes = self.applicant_criteria['birthdate'](applicant.birthdate)
        if applicant_passes:
            print('Congratulations, here is your visa :)')
        else:
            print('Sorry, no visa :(')

applicant = Applicant(name='Avi',passport_num='12345678',birthdate=date(1999, 6 ,5), married=False,children=10)

tel_aviv_embassy = USEmbassy(criteria)

tel_aviv_embassy.check_applicant(applicant)