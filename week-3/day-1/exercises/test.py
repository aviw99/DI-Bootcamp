from collections import defaultdict

#Initializing list
test_list = ['an', 'a', 'geek', 'for', 'g', 'free']

#printing original list
print("The original list : " + str(test_list))

#Using defaultdict
res = defaultdict(list)
for i in test_list:
	res[i[0]].append(i)

#print result
print("The list after Categorization : " + str(list(res.values())))
#This code is contributed by Edula Vinay Kumar Reddy
