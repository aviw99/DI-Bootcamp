class BankAccount:

    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient Funds")
        else:
            self.balance -= amount
            self.transactions.append(f"Withdraw: {amount}") #***
            print("Withdraw Approved")
            return amount                                   #***

    def view_transactions(self):
        print("Transactions:")
        print("-------------")
        for transaction in self.transactions:
            print(transaction)

acount_one = BankAccount(12345, 5)
acount_two = BankAccount(12346, 54)
acount_three = BankAccount(12347, 0)
acount_four = BankAccount(12348, 2637)

acount_two.view_balance()
acount_four.view_balance()
acount_one.deposit(39847)
acount_three.withdraw(2000)
acount_one.view_transactions()
acount_three.view_balance()
acount_one.view_balance()