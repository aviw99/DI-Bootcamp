import math 

class Pagination(object):
    items: list
    pageSize: int

    def __init__(self, items, pageSize=10):
        self.items = items
        self.pageSize = pageSize
        self.current_index = 0
    
    def getVisibleItems(self):
        start_index = self.current_index * self.pageSize
        end_index = start_index + self.pageSize
        return self.items[self.current_index: end_index]
    
    def go_to_page(self, page_num: int):
        total_pages = math.ceil(len(self.items) / self.pageSize)
        if page_num > total_pages or page_num <0:
            raise ValueError(f'Incorrect page number - {page_num}. Available - {total_pages}')
        
        self.current_index = page_num - 1


alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())

p.go_to_page(7)

print(p.current_index)

print(p.getVisibleItems())